import { call, put, takeEvery } from 'redux-saga/effects'
import {
    BlockTypes
} from "../types"
import { web3ForNetworkId } from "../../web3global"
// reducers


// fetch data from service using sagas
export function* fetchBlock(action: BlockTypes.FetchBlockAction) {
    const web3 = web3ForNetworkId(action.payload.networkId)
    const blockNumber = (action.payload.blockNumber || action.payload.number)

    const block = yield call(web3.eth.getBlock, blockNumber)
    yield put({ type: BlockTypes.CREATE_BLOCK, payload: { ...block, networkId: action.payload.networkId }, })
}

// Combine all your redux concerns

// app root saga
export function* blocksRootSaga() {
    const cache = {}
    const pattern = (action: BlockTypes.FetchBlockAction) => {
        if (action.type != BlockTypes.FETCH_BLOCK) return false;
        if (!action.payload.blockNumber) return false;
        if (cache[action.payload.blockNumber]) return false;

        cache[action.payload.blockNumber] = true;
        return true;
    }

    yield takeEvery(pattern, fetchBlock)
}