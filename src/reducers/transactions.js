import { call, put, cancel, fork, take, takeEvery } from "redux-saga/effects"
import { FETCH_TRANSACTION, CREATE_TRANSACTION, UPDATE_TRANSACTION } from "../actions"
import { web3ForNetworkId } from "../web3global"

// fetch data from service using sagas
export function* fetchTransaction(action) {
    const web3 = web3ForNetworkId(action.payload.networkId)
    const transactionHash = (action.payload.transactionHash || action.payload.hash)

    //yield put({ type: CREATE_TRANSACTION, payload: { transactionHash }, web3 })
    const transaction = yield call(web3.eth.getTransaction, transactionHash)
    yield put({ type: CREATE_TRANSACTION, payload: { ...transaction, networkId: action.payload.networkId } })
}

// Combine all your redux concerns

// app root saga
export function* transactionRootSaga() {
    const cache = {}
    const pattern = (action) => {
        if (action.type != FETCH_TRANSACTION) return false;
        if (!action.payload.transactionHash) return false;
        if (cache[action.payload.transactionHash]) return false;

        cache[action.payload.transactionHash] = true;
        return true;
    }

    yield takeEvery(pattern, fetchTransaction)
}