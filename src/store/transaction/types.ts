export const FETCH_TRANSACTION = 'ORM/TRANSACTION/FETCH'
export const CREATE_TRANSACTION = 'ORM/TRANSACTION/CREATE'
export const UPDATE_TRANSACTION = 'ORM/TRANSACTION/UPDATE'
export const REMOVE_TRANSACTION = 'ORM/TRANSACTION/REMOVE'

export type Transaction = {
    transactionHash: string,
    blockNumber: number
}

export type CreateTransactionActionInput = Transaction
export interface CreateTransactionAction {
    type: typeof CREATE_TRANSACTION
    payload: CreateTransactionActionInput
}

export type FetchTransactionActionInput = {
    transactionHash: string,
    networkId: string | number
}
export interface FetchTransactionAction {
    type: typeof FETCH_TRANSACTION
    payload: FetchTransactionActionInput
}