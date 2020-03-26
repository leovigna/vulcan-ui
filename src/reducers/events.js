import { call, put, takeEvery, take, fork } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { EventActions } from "@drizzle/store"
import dotProp from "dot-prop-immutable";

import {
    FETCH_EVENT,
    CREATE_EVENT
} from "../actions"

// actions
function web3EventChannel(eventSelector, options, max) {
    const events = eventSelector(options);
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
    const web3 = action.web3
    const web3Event = action.event
    const options = action.options
    const name = action.name //Drizzle Contract name
    const max = action.max || 100
    const chan = yield call(web3EventChannel, web3Event, options, max)
    try {
        while (true) {
            // take(END) will cause the saga to terminate by jumping to the finally block
            const e = yield take(chan)
            const { message, event, error } = e
            if (message === 'data') {
                //yield put({ type: EventActions.EVENT_FIRED, name, event, error })
                yield put({ type: CREATE_EVENT, payload: event, web3 })
            } else if (message === 'error') {
                yield put({ type: EventActions.EVENT_ERROR, name, event, error })
            } else if (message === 'changed') {
                yield put({ type: EventActions.EVENT_CHANGED, name, event, error })
            }
        }
    } finally {
        console.log('Event subscriber terminated')
    }
}

// Combine all your redux concerns

// app root saga
export function* eventsRootSaga() {
    yield takeEvery(FETCH_EVENT, fetchEvent)
}