import { call, put, takeEvery } from 'redux-saga/effects'
import { FETCH_BLOCK, CREATE_BLOCK, UPDATE_BLOCK } from "../actions"

// reducers


// fetch data from service using sagas
export function* fetchBlock(action) {
    const web3 = action.web3
    const blockNumber = (action.payload.blockNumber || action.payload.number)

    const block = yield call(web3.eth.getBlock, blockNumber)
    yield put({ type: CREATE_BLOCK, payload: block, web3 })
    //yield put({ type: UPDATE_BLOCK, payload: block, web3 })
}

// Combine all your redux concerns

// app root saga
export function* blocksRootSaga() {
    const cache = {}
    const pattern = (action) => {
        if (action.type != FETCH_BLOCK) return false;
        if (!action.payload.blockNumber) return false;
        if (cache[action.payload.blockNumber]) return false;

        cache[action.payload.blockNumber] = true;
        return true;
    }

    yield takeEvery(pattern, fetchBlock)
}