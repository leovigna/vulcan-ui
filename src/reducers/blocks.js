import { call, put, takeEvery } from 'redux-saga/effects'
import web3 from '../web3global'

// actions
export const BLOCK_FETCH = 'VULCAN/BLOCK_FETCH'
export const BLOCK_RECEIVED = 'VULCAN/BLOCK_RECEIVED'

// reducers
export const blocksReducer = (state = {}, action) => {
    switch (action.type) {
        case BLOCK_RECEIVED:
            const data = {}
            data[action.block.number] = action.block;
            return Object.assign({}, state, data)
        default:
            return state
    }
}

// fetch data from service using sagas
export function* fetchBlock(action) {
    const block = yield call(web3.eth.getBlock, action.block)
    yield put({ type: BLOCK_RECEIVED, block })
}

// Combine all your redux concerns

// app root saga
export function* blocksRootSaga() {
    yield takeEvery(BLOCK_FETCH, fetchBlock)
}