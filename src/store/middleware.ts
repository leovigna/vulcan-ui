import {
    EventTypes,
    ContractTypes,
    TransactionTypes,
    BlockTypes,
    DrizzleTypes
} from "./types"

import {
    ContractActions,
    BlockActions,
    TransactionActions
} from "./actions"

export const actionDebugger = store => next => action => {
    switch (action.type) {
        case ContractTypes.CREATE_CONTRACT:
        case ContractTypes.SETUP_CONTRACT:
        //case BlockTypes.CREATE_BLOCK:
        //case BlockTypes.FETCH_BLOCK:
        //case BlockTypes.UPDATE_BLOCK:
        //case TransactionTypes.CREATE_TRANSACTION:
        //case TransactionTypes.FETCH_TRANSACTION:
        //case TransactionTypes.UPDATE_TRANSACTION:
        //case EventTypes.CREATE_EVENT:
        //case EventTypes.FETCH_EVENT:
        //case EventTypes.UPDATE_EVENT:
        case EventTypes.CREATE_EVENT_CT_INDEX:
        case EventTypes.UPDATE_EVENT_CT_INDEX:
        case EventTypes.REMOVE_EVENT_CT_INDEX:
        case DrizzleTypes.DRIZZLE_CONTRACT_INITIALIZED:
        case DrizzleTypes.DRIZZLE_CONTRACT_INITIALIZING:
        case DrizzleTypes.BLOCK_RECEIVED:
        case DrizzleTypes.BLOCK_PROCESSING:
        case DrizzleTypes.SYNCING_ACCOUNTS:
        case DrizzleTypes.ACCOUNTS_FETCHED:
        case DrizzleTypes.ACCOUNT_BALANCE_FETCHED:
        case DrizzleTypes.ACCOUNT_BALANCES_FETCHED:
        case DrizzleTypes.LISTEN_FOR_EVENT:
        case DrizzleTypes.ADD_CONTRACT:
        case DrizzleTypes.GOT_CONTRACT_VAR:
            break
        default:
            console.debug(action)
            break
    }

    return next(action);
}

export const eventAddNotifier = store => next => action => {
    switch (action.type) {
        case EventTypes.CREATE_EVENT:
            if (action.payload.event === 'ResponseReceived') {
                const transactionHash = (action.payload.transactionHash || action.payload.hash)
                const blockNumber = (action.payload.blockNumber || action.payload.number)
                store.dispatch(BlockActions.fetchBlock({ blockNumber, networkId: action.payload.networkId }))
                store.dispatch(TransactionActions.fetchTransaction({ transactionHash, networkId: action.payload.networkId }))
            }

            break;
    }

    return next(action)
}

export const contractAddNotifier = store => next => action => {
    switch (action.type) {
        case ContractTypes.CREATE_CONTRACT:
            store.dispatch(ContractActions.setupContract(action.payload))
            break
    }

    return next(action)
}
