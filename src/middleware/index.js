import { EventActions } from "@drizzle/store"
import { ropstenWeb3, mainnetWeb3 } from "../web3global"

import {
    CREATE_EVENT,
    UPDATE_EVENT,
    REMOVE_EVENT,
    FETCH_EVENT,
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
    REMOVE_EVENT_CT_INDEX,
    CREATE_CONTRACT,
    UPDATE_CONTRACT,
    REMOVE_CONTRACT,
    DRIZZLE_CONTRACT_INITIALIZED,
    DRIZZLE_CONTRACT_INITIALIZING,
    DRIZZLE_ADD_CONTRACT,
    SETUP_CONTRACT
} from "../actions"

import orm from "../orm"
import { indexAddressEvent } from "../orm/models/eventByContractTypeIndex"

export const actionDebugger = store => next => action => {
    switch (action.type) {
        case CREATE_CONTRACT:
        case SETUP_CONTRACT:
        case DRIZZLE_CONTRACT_INITIALIZED:
        case DRIZZLE_CONTRACT_INITIALIZING:
        case FETCH_EVENT:
        case CREATE_EVENT:
        case FETCH_BLOCK:
        case CREATE_BLOCK:
            console.debug(action)
            break
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

            const transactionHash = (action.payload.transactionHash || action.payload.hash)
            const blockNumber = (action.payload.blockNumber || action.payload.number)

            store.dispatch({ type: FETCH_BLOCK, payload: { blockNumber, networkId: action.payload.networkId } })
            store.dispatch({ type: FETCH_TRANSACTION, payload: { transactionHash, networkId: action.payload.networkId } })
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
    switch (action.type) {
        case CREATE_CONTRACT:
            store.dispatch({ type: SETUP_CONTRACT, payload: action.payload })
            break
    }

    return next(action)
}
