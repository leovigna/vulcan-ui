import { call, put, takeEvery } from 'redux-saga/effects'
import web3Default from '../web3global'

// actions
export const BLOCK_FETCH = 'VULCAN/BLOCK_FETCH'
export const BLOCK_RECEIVED = 'VULCAN/BLOCK_RECEIVED'

// reducers
export const blocksReducer = (state = {}, action) => {
    const data = {}

    switch (action.type) {
        case BLOCK_RECEIVED:
            data[action.block.number] = action.block;
            return Object.assign({}, state, data)
        case BLOCK_FETCH:
            data[action.block] = true
            return Object.assign({}, state, data)
        default:
            return state
    }
}

// fetch data from service using sagas
export function* fetchBlock(action) {
    const web3 = action.web3 || web3Default
    const block = yield call(web3.eth.getBlock, action.block)
    yield put({ type: BLOCK_RECEIVED, block })
}

// Combine all your redux concerns

// app root saga
export function* blocksRootSaga() {
    yield takeEvery(BLOCK_FETCH, fetchBlock)
}