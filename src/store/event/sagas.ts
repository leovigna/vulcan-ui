import { call, put, takeEvery, take } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { EventActions as DrizzleEventActions } from "@drizzle/store"

import { FetchEventAction } from './types';
import { createEvent } from './actions';
import { EventTypes } from '../types';
import { fetchTransaction } from '../transaction/actions'

// actions
function web3EventChannel(web3Contract: any, eventName: string, options: object, max: number) {
    //console.debug(web3Contract.events)
    const events = web3Contract.events[eventName](options);
    let count = 0;
    if (!max) { max = 100 };

    return eventChannel(emitter => {
        events.on('data', (event: any) => {
            emitter({ message: 'data', event })
            count += 1;
            if (count >= max) { emitter(END); }
        }).on('error', (error: any) => {
            emitter({ message: 'error', error })
            emitter(END)
        }).on('changed', (event: any) => {
            emitter({ message: 'changed', event })
            count += 1;
            if (count >= max) { emitter(END); }
        })

        // The subscriber must return an unsubscribe function
        return () => {
            events.unsubscribe()
        }
    }
    )
}

// fetch data from service using sagas
export function* fetchEvent(action: FetchEventAction) {
    const { event, options, web3Contract, max } = action.payload
    const chan = yield call(web3EventChannel, web3Contract, event, options, max)
    console.debug(web3Contract)
    try {
        while (true) {
            //take('END')// will cause the saga to terminate by jumping to the finally block
            const e = yield take(chan)
            const { message, event, error } = e
            if (message === 'data') {
                //yield put({ type: EventActions.EVENT_FIRED, name, event, error })
                yield put(createEvent({ ...event, networkId: web3Contract.web3._provider.networkVersion }))
                yield put(fetchTransaction({ hash: event.transactionHash, networkId: web3Contract.web3._provider.networkVersion }))

            } else if (message === 'error') {
                yield put({ type: DrizzleEventActions.EVENT_ERROR, name: web3Contract.address, event, error })
            } else if (message === 'changed') {
                yield put({ type: DrizzleEventActions.EVENT_CHANGED, name: web3Contract.address, event, error })
            }
        }
    } catch (error) {
        console.error(error)
    } finally {
        console.debug('Event subscriber terminated')
    }
}

// app root saga
export function* eventsRootSaga() {
    yield takeEvery(EventTypes.FETCH_EVENT, fetchEvent)
}