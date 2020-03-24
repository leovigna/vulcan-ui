import { call, put, takeEvery } from 'redux-saga/effects'
import web3Default from '../web3global'

// actions
export const TX_FETCH = 'VULCAN/TX_FETCH'
export const TX_RECEIVED = 'VULCAN/TX_RECEIVED'

// reducers
export const txReducer = (state = {}, action) => {
    if (action.type === TX_RECEIVED) {
        const tx = action.tx
        return { ...state, [action.tx.hash]: tx }
    }

    return state;
}

// fetch data from service using sagas
export function* fetchTx(action) {
    const web3 = action.web3 || web3Default
    const tx = yield call(web3.eth.getTransaction, action.transactionHash)
    yield put({ type: TX_RECEIVED, tx })
}

// Combine all your redux concerns

// app root saga
export function* txRootSaga() {
    yield takeEvery(TX_FETCH, fetchTx)
}