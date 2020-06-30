import { call, put, takeEvery } from 'redux-saga/effects'
import { web3ForNetworkId } from "../../web3global"
import { FetchBlockAction, FetchBlockWithHashActionInput, FetchBlockWithNumberActionInput, CREATE_BLOCK, FETCH_BLOCK, LATEST_BLOCK } from './types'

// fetch data from service using sagas
export function* fetchBlock(action: FetchBlockAction) {
    const web3 = web3ForNetworkId(action.payload.networkId)
    const blockHashOrBlockNumber = (action.payload as FetchBlockWithHashActionInput).hash || (action.payload as FetchBlockWithNumberActionInput).number

    const block = yield call(web3.eth.getBlock, blockHashOrBlockNumber)
    yield put({ type: CREATE_BLOCK, payload: { ...block, networkId: action.payload.networkId }, })

    if (blockHashOrBlockNumber === 'latest') {
        console.debug(block)
        yield put({ type: LATEST_BLOCK, payload: { ...block, networkId: action.payload.networkId } })
    }
}

// Combine all your redux concerns

// app root saga
export function* blocksRootSaga() {
    const cache: { [key: string]: boolean } = {}
    const pattern = (action: FetchBlockAction) => {
        if (action.type != FETCH_BLOCK) return false;
        const blockHashOrBlockNumber = (action.payload as FetchBlockWithHashActionInput).hash || (action.payload as FetchBlockWithNumberActionInput).number
        if (cache[blockHashOrBlockNumber]) return false;

        cache[blockHashOrBlockNumber] = true;
        return true;
    }

    yield takeEvery(pattern, fetchBlock)
}