import { Block } from "../block/types"

export type Transaction = {
    blockHash: string
    blockNumber: number
    from: string
    gas: number
    gasPrice: string
    hash: string
    input: string
    nonce: number
    r: string
    s: string
    to: string
    transactionIndex: number
    v: string
    value: string
    networkId: string,
    block?: Block
}

export const CREATE_TRANSACTION = 'ORM/TRANSACTION/CREATE'
export type CreateTransactionActionInput = Transaction
export interface CreateTransactionAction {
    type: typeof CREATE_TRANSACTION
    payload: CreateTransactionActionInput
}

export const FETCH_TRANSACTION = 'ORM/TRANSACTION/FETCH'
export type FetchTransactionActionInput = {
    hash: Transaction['hash'],
    networkId: Transaction['networkId']
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
    hash: Transaction['hash']
}
export interface RemoveTransactionAction {
    type: typeof REMOVE_TRANSACTION
    payload: RemoveTransactionActionInput
}

export type TransactionAction = CreateTransactionAction | FetchTransactionAction | UpdateTransactionAction | RemoveTransactionAction