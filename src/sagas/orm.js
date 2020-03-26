import { call, put, takeEvery, take, fork, all } from 'redux-saga/effects'
import { eventChannel, END } from 'redux-saga'
import { EventActions } from "@drizzle/store"
import dotProp from "dot-prop-immutable";

import {
    CREATE_CONTRACT,
    DRIZZLE_ADD_CONTRACT,
    CREATE_EVENT_CT_INDEX,
    FETCH_EVENT,
    SETUP_CONTRACT,
    DRIZZLE_CONTRACT_INITIALIZED
} from "../actions"


function* updateContractEvents(web3Contract, address, networkId) {
    try {
        const latestRound = yield call(web3Contract.methods.latestRound().call)
        yield put({
            type: FETCH_EVENT, payload:
            {
                eventName: 'ResponseReceived',
                web3Contract: web3Contract,
                name: address,
                options: {
                    fromBlock: 0,
                    toBlock: 'latest',
                    filter: { answerId: latestRound }
                },
                networkId: networkId,
                web3: web3Contract._provider,
                max: 25
            },
            networkId: networkId
        })
    } catch (error) {
        console.error(error)
    }



}

// fetch data from service using sagas
export function* contractUpdate(action) {
    const { address, events, web3Contract } = action.payload
    const contractConfig = {
        contractName: address,
        web3Contract
    }
    //
    yield all(events.map(event => put({ type: CREATE_EVENT_CT_INDEX, payload: { address, event } })));
    yield all(events.map(event => put({ type: CREATE_EVENT_CT_INDEX, payload: { address, event } })));

    yield put({ type: DRIZZLE_ADD_CONTRACT, contractConfig, events })
    const contractInitializedAction = yield take(DRIZZLE_CONTRACT_INITIALIZED)
    yield fork(updateContractEvents, web3Contract, address, action.payload.networkId)
}

// Combine all your redux concerns

// app root saga
export function* ormRootSaga() {
    yield takeEvery(SETUP_CONTRACT, contractUpdate)
}