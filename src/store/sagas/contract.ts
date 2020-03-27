import { call, put, takeEvery, take, fork, all } from 'redux-saga/effects'
import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'
import { contracts as contractsDefault } from "../../data/contracts"
import { web3ForNetworkId } from "../../web3global"

import {
    DrizzleTypes,
    ContractTypes,
} from "../types"

import {
    DrizzleActions,
    EventActions,
    ContractActions,
} from "../actions"

function* setupDefaultContracts() {
    yield all(Object.values(contractsDefault).map((c) => {
        const { networkId, address } = c
        const web3 = web3ForNetworkId(networkId)
        const web3Contract = new web3.eth.Contract(AggregatorABI.compilerOutput.abi, address)
        const events = ["AnswerUpdated", "ResponseReceived"]

        return put(ContractActions.createContract({ ...c, web3Contract, events }))
    }))
}


function* updateContractEvents(web3Contract, address: string, networkId: string) {
    try {
        const latestRound = yield call(web3Contract.methods.latestRound().call)

        /*
        yield put({
            type: 'CALL_CONTRACT_FN',
            contract: address,
            fnName: 'latestRound',
            fnIndex: '0x0',
            args,
            argsHash,
            sync: true
          })*/



        yield put(EventActions.fetchEvent({
            eventName: 'ResponseReceived',
            web3Contract: web3Contract,
            name: address,
            options: {
                fromBlock: 0,
                toBlock: 'latest',
                filter: { answerId: latestRound }
            },
            networkId: networkId,
            max: 25
        }))

        const pastRounds = []
        for (let i = latestRound - 50; i <= latestRound; i++) {
            pastRounds.push(i)
        }

        yield all(pastRounds.map((roundId) => put(EventActions.fetchEvent({
            eventName: 'AnswerUpdated',
            web3Contract: web3Contract,
            name: address,
            options: {
                fromBlock: 0,
                toBlock: 'latest',
                filter: { roundId }
            },
            networkId: networkId,
            max: 1
        }))))

    } catch (error) {
        console.error(error)
    }



}

// fetch data from service using sagas
export function* contractSetup(action: ContractTypes.SetupContractAction) {
    const { address, events, web3Contract } = action.payload
    const contractConfig = {
        contractName: address,
        web3Contract
    }

    console.debug('CONTRACT SETUP')
    //yield all(events.map(event => put(EventActions.createEvent({ address, event }))));
    yield all(events.map(event => put(EventActions.createEventIndex({ address, event }))));

    yield put(DrizzleActions.addDrizzleContract({ contractConfig, events }))

    const pattern = (action) => action.type === DrizzleTypes.DRIZZLE_CONTRACT_INITIALIZED
    yield take(pattern)

    yield fork(updateContractEvents, web3Contract, address, action.payload.networkId)
}

// Combine all your redux concerns

// app root saga
export function* contractRootSaga() {
    yield takeEvery(DrizzleTypes.DRIZZLE_INITIALIZED, setupDefaultContracts)
    yield takeEvery(ContractTypes.SETUP_CONTRACT, contractSetup)
}