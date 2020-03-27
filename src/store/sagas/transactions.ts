import { call, put, takeEvery } from "redux-saga/effects"
import { TransactionActions } from "../actions"
import { TransactionTypes } from "../types"

import { web3ForNetworkId } from "../../web3global"

// fetch data from service using sagas
export function* fetchTransaction(action: TransactionTypes.FetchTransactionAction) {
    const web3 = web3ForNetworkId(action.payload.networkId)
    const transactionHash = (action.payload.transactionHash || action.payload.hash)

    const transaction = yield call(web3.eth.getTransaction, transactionHash)
    yield put(TransactionActions.createTransaction({ ...transaction, networkId: action.payload.networkId }))
}

// Combine all your redux concerns

// app root saga
export function* transactionRootSaga() {
    const cache = {}
    const pattern = (action) => {
        if (action.type != TransactionTypes.FETCH_TRANSACTION) return false;
        if (!action.payload.transactionHash) return false;
        if (cache[action.payload.transactionHash]) return false;

        cache[action.payload.transactionHash] = true;
        return true;
    }

    yield takeEvery(pattern, fetchTransaction)
}