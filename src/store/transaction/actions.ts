import {
    CREATE_TRANSACTION,
    FETCH_TRANSACTION,
    CreateTransactionAction,
    FetchTransactionAction,
    CreateTransactionActionInput,
    FetchTransactionActionInput
} from './types'

export function createTransaction(data: CreateTransactionActionInput): CreateTransactionAction {
    return {
        type: CREATE_TRANSACTION,
        payload: data
    }
}

export function fetchTransaction(data: FetchTransactionActionInput): FetchTransactionAction {
    return {
        type: FETCH_TRANSACTION,
        payload: data
    }
}