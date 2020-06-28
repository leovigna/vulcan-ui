import { race, take, call, put } from 'redux-saga/effects'
import { delay } from "redux-saga";
import axios from 'axios'

import { START_POLL_COINBASE_ORACLE, STOP_POLL_COINBASE_ORACLE, POLL_COINBASE_ORACLE_ERROR } from "./types";
import { createCoinbaseOracleResponse } from "./actions";
/* Worker Function */
const POLL_DELAY_MS = 30000

function* pollCoinbaseOracle() {
    console.debug('STARTING COINBASE POLLING...')
    while (true) {
        try {
            // Fetching posts at regular interval 4 seconds.
            const response = yield call(axios.get, process.env.REACT_APP_COINBASE_ORACLE_API);
            console.debug(response.data)
            yield put(createCoinbaseOracleResponse(response.data));
            yield call(delay, POLL_DELAY_MS);
        } catch (err) {
            yield put({
                type: POLL_COINBASE_ORACLE_ERROR,
                message: err.message
            });
            // Once the polling has encountered an error,
            // it should be stopped immediately
            yield put({ type: STOP_POLL_COINBASE_ORACLE, err });
        }
    }
}
/* Watcher Function */
export function* coinbaseRootSaga() {
    while (true) {
        yield take(START_POLL_COINBASE_ORACLE)
        yield race([call(pollCoinbaseOracle), take(STOP_POLL_COINBASE_ORACLE)])
    }
}