import { Transaction } from '../orm/models'

export const FETCH_TRANSACTION = 'ORM/FETCH_TRANSACTION'
export const CREATE_TRANSACTION = 'ORM/CREATE_TRANSACTION'
export const UPDATE_TRANSACTION = 'ORM/UPDATE_TRANSACTION'
export const REMOVE_TRANSACTION = 'ORM/REMOVE_TRANSACTION'

export type CreateTransactionActionInput = Transaction
export interface CreateTransactionAction {
    type: typeof CREATE_TRANSACTION
    payload: CreateTransactionActionInput
}

export type FetchTransactionActionInput = Transaction
export interface FetchTransactionAction {
    type: typeof FETCH_TRANSACTION
    payload: FetchTransactionActionInput
}