export type Transaction = {
    transactionHash: string,
    blockNumber: number
}

export const CREATE_TRANSACTION = 'ORM/TRANSACTION/CREATE'
export type CreateTransactionActionInput = Transaction
export interface CreateTransactionAction {
    type: typeof CREATE_TRANSACTION
    payload: CreateTransactionActionInput
}

export const FETCH_TRANSACTION = 'ORM/TRANSACTION/FETCH'
export type FetchTransactionActionInput = {
    transactionHash: string,
    networkId: string | number
}
export interface FetchTransactionAction {
    type: typeof FETCH_TRANSACTION
    payload: FetchTransactionActionInput
}

export const UPDATE_TRANSACTION = 'ORM/TRANSACTION/UPDATE'
export type UpdateTransactionActionInput = Transaction
export interface UpdateTransactionAction {
    type: typeof UPDATE_TRANSACTION
    payload: UpdateTransactionActionInput
}

export const REMOVE_TRANSACTION = 'ORM/TRANSACTION/REMOVE'
export type RemoveTransactionActionInput = {
    transactionHash: Transaction['transactionHash']
}
export interface RemoveTransactionAction {
    type: typeof REMOVE_TRANSACTION
    payload: RemoveTransactionActionInput
}

export type TransactionAction = CreateTransactionAction | FetchTransactionAction | UpdateTransactionAction | RemoveTransactionAction