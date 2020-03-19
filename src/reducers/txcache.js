import { call, put, takeEvery } from 'redux-saga/effects'
import web3 from '../web3global'

// actions
export const TX_FETCH = 'VULCAN/TX_FETCH'
export const TX_RECEIVED = 'VULCAN/TX_RECEIVED'

// reducers
export const txReducer = (state = {}, action) => {
    switch (action.type) {
        case TX_RECEIVED:
            const data = {}
            data[action.tx.hash] = action.tx;
            return Object.assign({}, state, data)
        default:
            return state
    }
}

// fetch data from service using sagas
export function* fetchTx(action) {
    const tx = yield call(web3.eth.getTransaction, action.transactionHash)
    yield put({ type: TX_RECEIVED, tx })
}

// Combine all your redux concerns

// app root saga
export function* txRootSaga() {
    yield takeEvery(TX_FETCH, fetchTx)
}