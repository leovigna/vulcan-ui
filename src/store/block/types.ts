import { Block } from '../../orm/models'

export const CREATE_BLOCK = 'ORM/CREATE_BLOCK'
export const UPDATE_BLOCK = 'ORM/UPDATE_BLOCK'
export const REMOVE_BLOCK = 'ORM/REMOVE_BLOCK'
export const FETCH_BLOCK = 'ORM/FETCH_BLOCK'

export type CreateBlockActionInput = Block
export interface CreateBlockAction {
    type: typeof CREATE_BLOCK
    payload: CreateBlockActionInput
}

export type UpdateBlockActionInput = Block
export interface UpdateBlockAction {
    type: typeof UPDATE_BLOCK
    payload: UpdateBlockActionInput
}

export type RemoveBlockActionInput = Block
export interface RemoveBlockAction {
    type: typeof REMOVE_BLOCK
    payload: RemoveBlockActionInput
}

export type FetchBlockActionInput = Block
export interface FetchBlockAction {
    type: typeof FETCH_BLOCK
    payload: FetchBlockActionInput
}
