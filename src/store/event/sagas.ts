import { call, put, takeEvery, take, race, spawn } from 'redux-saga/effects'
import { eventChannel, END, delay } from 'redux-saga'

import { FetchEventAction, FETCH_EVENT, FETCH_EVENT_ERROR, FETCH_EVENT_DONE } from './types';
import { createEvent } from './actions';
import { fetchTransaction } from '../transaction/actions'
import { fetchBlock } from '../block/actions';

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
    let fetchCount = 0
    try {
        while (true) {
            //take('END')// will cause the saga to terminate by jumping to the finally block
            const e = yield take(chan)

            const { message, event, error } = e
            if (message === 'data') {
                fetchCount += 1
                //yield put({ type: EventActions.EVENT_FIRED, name, event, error })

                yield spawn(yield put, createEvent({ ...event, networkId: web3Contract.web3._provider.networkVersion }))

                if (action.payload.fetchTransaction) {
                    console.debug(`fetchTransactions ${event.transactionHash}`)
                    yield spawn(yield put, fetchTransaction({ hash: event.transactionHash, networkId: web3Contract.web3._provider.networkVersion }))
                }

                if (action.payload.fetchBlock) {
                    yield spawn(yield put, fetchBlock({ number: event.blockNumber, networkId: web3Contract.web3._provider.networkVersion }))
                }


            } else if (message === 'error') {
                yield put({ type: FETCH_EVENT_ERROR, action, error })
            } else if (message === 'changed') {
                yield put({ type: FETCH_EVENT_ERROR, action, error })
            }
        }
    } catch (error) {
        yield put({ type: FETCH_EVENT_ERROR, action, error })
    } finally {
        yield put({ type: FETCH_EVENT_DONE, action, fetchCount })
    }
}

export function* fetchEventWithTimeout(action: FetchEventAction) {
    const { response, failed, timeout } = yield race({
        response: call(fetchEvent, action),
        failed: take(FETCH_EVENT_ERROR),
        timeout: call(delay, 10000)
    })

    if (failed) console.error(`[FAILED] fetchEventWithTimeout ${failed}`)
    if (timeout) console.debug(`[TIMEOUT] fetchEventWithTimeout ${timeout}`)
    if (response) console.debug(`[RESPONSE] fetchEventWithTimeout ${response}`)
}

// app root saga
export function* eventsRootSaga() {
    yield takeEvery(FETCH_EVENT, fetchEventWithTimeout)
}