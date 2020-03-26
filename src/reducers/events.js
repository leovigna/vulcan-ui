import { call, put, takeEvery, take, fork } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { EventActions } from "@drizzle/store"
import dotProp from "dot-prop-immutable";

import {
    FETCH_EVENT,
    CREATE_EVENT
} from "../actions"
import { web3ForNetworkId } from "../web3global"


// actions
function web3EventChannel(web3Contract, eventName, options, max) {
    console.debug('web3EventChannel')
    console.debug(web3Contract)

    const events = web3Contract.events[eventName](options);
    let count = 0;
    if (!max) { max = 100 };

    return eventChannel(emitter => {
        events.on('data', (event) => {
            emitter({ message: 'data', event })
            count += 1;
            if (count >= max) { emitter(END); }
        }).on('error', (error) => {
            emitter({ message: 'error', error })
            emitter(END)
        }).on('changed', (event) => {
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
export function* fetchEvent(action) {
    const { eventName, web3Contract, options, name } = action.payload
    const web3 = action.payload.web3 || web3Contract._provider || web3ForNetworkId(action.networkId)
    const max = action.payload.max || 100
    const chan = yield call(web3EventChannel, web3Contract, eventName, options, max)
    try {
        while (true) {
            //take('END')// will cause the saga to terminate by jumping to the finally block
            const e = yield take(chan)
            const { message, event, error } = e
            if (message === 'data') {
                //yield put({ type: EventActions.EVENT_FIRED, name, event, error })
                yield put({ type: CREATE_EVENT, payload: { ...event, networkId: action.networkId }, web3 })

            } else if (message === 'error') {
                yield put({ type: EventActions.EVENT_ERROR, name, event, error })
            } else if (message === 'changed') {
                yield put({ type: EventActions.EVENT_CHANGED, name, event, error })
            }
        }
    } catch (error) {
        console.error(error)
    } finally {
        console.log('Event subscriber terminated')
    }
}

// app root saga
export function* eventsRootSaga() {
    yield takeEvery(FETCH_EVENT, fetchEvent)
}