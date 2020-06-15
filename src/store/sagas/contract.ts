import { call, put, takeEvery, all } from 'redux-saga/effects'
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

import gql from "graphql-tag"
import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'

import { contracts as contractsDefault } from "../../data/contracts"
import client from "../../client";

const queryOracleAggregators = gql`
query {
contractDefinition(where: {id: 1}) {
    compilerOutput
  }
oracleAggregators {
    title
    path
    answerRenderFormat
    Contract {
      networkId
      address
      specId
    }
  }
}`

function* setupDefaultContractsGraphQLAPI() {
    const response = yield call(client.query, { query: queryOracleAggregators });
    //console.debug(response)
    const contracts = response.data.oracleAggregators;
    const abi = JSON.parse(response.data.contractDefinition.compilerOutput).abi
    //const allContracts = [].concat.apply([], Object.values(contractsDefault));
    yield all(contracts.map((c) => {
        const { title, path, answerRenderFormat, Contract } = c;
        const answerRenderOptions = JSON.parse(answerRenderFormat);
        const { address, networkId } = Contract;
        const events = ["AnswerUpdated", "ResponseReceived"]
        const payload = { address, title, path, networkId, answerRenderOptions, abi, events }
        //console.debug(payload)
        return put(ContractActions.createContract(payload))
    }))
}


function* setupDefaultContractsJSON() {
    console.debug('JSON update')
    const allContracts = [].concat.apply([], Object.values(contractsDefault));
    yield all(allContracts.map((c) => {
        const abi = AggregatorABI.compilerOutput.abi
        const events = ["AnswerUpdated", "ResponseReceived"]

        return put(ContractActions.createContract({ ...c, abi, events }))
    }))
}

function* setupDefaultContracts() {
    console.debug(process.env.REACT_APP_GRAPHQL_API)
    if (process.env.REACT_APP_GRAPHQL_API === 'true') {
        yield call(setupDefaultContractsGraphQLAPI);
    }
    else {
        yield call(setupDefaultContractsJSON);
    }
}


function* updateContractEvents(action: ContractTypes.UpdateContractEventsAction) {
    const { web3Contract, address, networkId } = action.payload

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
            event: 'ResponseReceived',
            options: {
                fromBlock: 0,
                toBlock: 'latest',
                filter: { answerId: latestRound }
            },
            networkId: networkId,
            max: 25
        }, web3Contract))

        const pastRounds = []
        for (let i = Math.max(latestRound - 50, 0); i <= latestRound; i++) {
            pastRounds.push(i)
        }

        yield all(pastRounds.map((roundId) => put(EventActions.fetchEvent({
            event: 'AnswerUpdated',
            name: address,
            options: {
                fromBlock: 0,
                toBlock: 'latest',
                filter: { roundId }
            },
            networkId: networkId,
            max: 1
        }, web3Contract))))

    } catch (error) {
        console.error(error)
    }



}

// fetch data from service using sagas
export function* contractSetup(action: ContractTypes.SetupContractAction) {
    const { address, events, abi, networkId } = action.payload
    const web3 = web3ForNetworkId(networkId)!;
    const web3Contract = new web3.eth.Contract(abi, address)
    const contractConfig = {
        contractName: address,
        web3Contract
    }

    yield all(events.map(event => put(EventActions.createEventIndex({ address, event }))));
    yield put(DrizzleActions.addDrizzleContract({ contractConfig, events }))
}

// Combine all your redux concerns

// app root saga
export function* contractRootSaga() {
    yield takeEvery(DrizzleTypes.DRIZZLE_INITIALIZED, setupDefaultContracts)
    yield takeEvery(ContractTypes.SETUP_CONTRACT, contractSetup)
    yield takeEvery(ContractTypes.UPDATE_CONTRACT_EVENTS, updateContractEvents)
}