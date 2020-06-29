export const CREATE_BLOCK = 'ORM/BLOCK/CREATE'
export const UPDATE_BLOCK = 'ORM/BLOCK/UPDATE'
export const REMOVE_BLOCK = 'ORM/BLOCK/REMOVE'
export const FETCH_BLOCK = 'ORM/BLOCK/FETCH'

export type CreateBlockActionInput = {
    blockNumber: number
}
export interface CreateBlockAction {
    type: typeof CREATE_BLOCK
    payload: CreateBlockActionInput
}

export type UpdateBlockActionInput = {
    blockNumber: number
}
export interface UpdateBlockAction {
    type: typeof UPDATE_BLOCK
    payload: UpdateBlockActionInput
}

export type RemoveBlockActionInput = {
    blockNumber: number
}
export interface RemoveBlockAction {
    type: typeof REMOVE_BLOCK
    payload: RemoveBlockActionInput
}

export type FetchBlockActionInput = {
    blockNumber: string | number
    networkId: string | number
}
export interface FetchBlockAction {
    type: typeof FETCH_BLOCK
    payload: FetchBlockActionInput
}
