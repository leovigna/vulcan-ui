import { call, put, takeEvery, take, fork } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { EventActions } from "@drizzle/store"
import dotProp from "dot-prop-immutable";


import web3Default from '../web3global'

// actions
export const EVENT_FETCH = 'VULCAN/EVENT_FETCH'
export const EVENT_ADDED = 'VULCAN/EVENT_ADDED'

// reducers
export const contractEventsReducer = (state = {}, action) => {
    if (action.type === EVENT_ADDED) {
        const contractName = action.name
        const eventName = action.event.event

        let currState = state;
        if (!currState[contractName]) {
            const d = {}
            d[eventName] = []
            currState = dotProp.set(
                state,
                `${contractName}`,
                _ => { return { [eventName]: [] } }
            );
        } else if (!currState[contractName][eventName]) {
            currState = dotProp.set(
                currState,
                `${contractName}`,
                c => { return { ...c, [eventName]: [] } }
            );
            //console.debug(currState)
        }

        const updatedWithEvent = dotProp.set(
            currState,
            `${contractName}.${eventName}`,
            events => events.concat(action.event)
        );

        //console.debug(updatedWithEvent)
        return updatedWithEvent;
    }
    return state
}

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
                yield put({ type: EventActions.EVENT_FIRED, name, event, error })
                yield put({ type: EVENT_ADDED, name, event, error })
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
    yield takeEvery(EVENT_FETCH, fetchEvent)
}