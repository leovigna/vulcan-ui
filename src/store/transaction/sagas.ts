import { call, put, takeEvery } from "redux-saga/effects"
import { web3ForNetworkId } from "../../web3global"
import { FetchTransactionAction, FETCH_TRANSACTION } from "./types"
import { createTransaction } from "./actions"

// fetch data from service using sagas
export function* fetchTransaction(action: FetchTransactionAction) {
    const web3: any = web3ForNetworkId(action.payload.networkId)

    const transaction = yield call(web3.eth.getTransaction, action.payload.hash)
    yield put(createTransaction({ ...transaction, networkId: action.payload.networkId }))
}

// Combine all your redux concerns

// app root saga
export function* transactionRootSaga() {
    const cache: { [key: string]: boolean } = {}
    const pattern = (action: FetchTransactionAction) => {
        if (action.type !== FETCH_TRANSACTION) return false;
        if (!action.payload.hash) return false;
        if (cache[action.payload.hash]) return false;

        cache[action.payload.hash] = true;
        return true;
    }

    //@ts-ignore
    yield takeEvery(pattern, fetchTransaction)
}