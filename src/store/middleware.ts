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
        case DrizzleTypes.DRIZZLE_CONTRACT_INITIALIZED:
        case DrizzleTypes.DRIZZLE_CONTRACT_INITIALIZING:
        case EventTypes.FETCH_EVENT:
        case EventTypes.CREATE_EVENT:
        case BlockTypes.FETCH_BLOCK:
        case BlockTypes.CREATE_BLOCK:
            break
        case TransactionTypes.CREATE_TRANSACTION:
        case TransactionTypes.UPDATE_TRANSACTION:
            break
        case BlockTypes.CREATE_BLOCK:
        case BlockTypes.UPDATE_BLOCK:
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
            if (action.payload.event === 'AnswerUpdated') break

            const transactionHash = (action.payload.transactionHash || action.payload.hash)
            const blockNumber = (action.payload.blockNumber || action.payload.number)

            store.dispatch(BlockActions.fetchBlock({ blockNumber, networkId: action.payload.networkId }))
            store.dispatch(TransactionActions.fetchTransaction({ transactionHash, networkId: action.payload.networkId }))
            break;
    }

    return next(action)
}

export const transactionAddNotifier = store => next => action => {
    switch (action.type) {
        case TransactionTypes.CREATE_TRANSACTION:
        case TransactionTypes.UPDATE_TRANSACTION:
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
