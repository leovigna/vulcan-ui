import { EventActions } from "@drizzle/store"
import { ropstenWeb3, mainnetWeb3 } from "../web3global"

import {
    CREATE_EVENT,
    UPDATE_EVENT,
    REMOVE_EVENT,
    CREATE_TRANSACTION,
    UPDATE_TRANSACTION,
    REMOVE_TRANSACTION,
    CREATE_BLOCK,
    UPDATE_BLOCK,
    REMOVE_BLOCK,
    FETCH_BLOCK,
    FETCH_TRANSACTION,
    CREATE_EVENT_CT_INDEX,
    UPDATE_EVENT_CT_INDEX,
    REMOVE_EVENT_CT_INDEX
} from "../actions"

import orm from "../orm"
import { indexAddressEvent } from "../orm/models/eventByContractTypeIndex"

export const actionDebugger = store => next => action => {
    switch (action.type) {
        case CREATE_TRANSACTION:
        case UPDATE_TRANSACTION:
            const transactionHash = (action.payload.transactionHash || action.payload.hash)
            console.debug(`${action.type} ${transactionHash}`)
            break
        case CREATE_BLOCK:
        case UPDATE_BLOCK:
            const blockNumber = (action.payload.blockNumber || action.payload.number)
            console.debug(`${action.type} ${blockNumber}`)
            break
    }

    return next(action);
}

export const eventAddNotifier = store => next => action => {
    switch (action.type) {
        case CREATE_EVENT:
            if (action.payload.event === 'AnswerUpdated') break

            const web3 = action.web3;
            const transactionHash = (action.payload.transactionHash || action.payload.hash)
            const blockNumber = (action.payload.blockNumber || action.payload.number)

            const sess = orm.session(store.getState().db);
            const { Transaction, Block, Event } = sess;

            if (blockNumber) {
                if (!Block.idExists(blockNumber)) {
                    store.dispatch({ type: FETCH_BLOCK, payload: { blockNumber }, web3 })
                }
            }

            if (transactionHash) {
                if (!Transaction.idExists(transactionHash)) {
                    store.dispatch({ type: FETCH_TRANSACTION, payload: { transactionHash }, web3 })
                }
            }

            break;
    }

    return next(action)
}

export const transactionAddNotifier = store => next => action => {
    switch (action.type) {
        case CREATE_TRANSACTION:
        case UPDATE_TRANSACTION:
            //const blockNumber = action.payload.blockNumber;
            //const web3 = action.web3;

            //const sess = orm.session(store.getState().db);
            //const { Block } = sess;

            /*
            if (blockNumber) {
                if (!Block.idExists(blockNumber)) {
                    store.dispatch({ type: CREATE_BLOCK, payload: { blockNumber }, web3 });
                }
            }*/


            break;
    }

    return next(action)
}

export const contractAddNotifier = store => next => action => {
    if (action.type === "CONTRACT_INITIALIZED") {
        // interact with your service
        console.log("Contract initialized fired", action);
    } else if (action.type === "CONTRACT_INITIALIZING") {
        // interact with your service
        console.log("Contract initializing fired", action)
        const { contractName, web3Contract } = action.contractConfig
        const eventNames = Object.keys(web3Contract.events)
        eventNames.forEach(event => {
            const data = { address: contractName, event }
            store.dispatch({ type: CREATE_EVENT_CT_INDEX, payload: data })
        });
    }

    return next(action)
}
