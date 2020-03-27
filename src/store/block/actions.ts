import {
    CREATE_BLOCK,
    FETCH_BLOCK,
    CreateBlockAction,
    FetchBlockAction,
    CreateBlockActionInput,
    FetchBlockActionInput
} from './types'


export function createBlock(data: CreateBlockActionInput): CreateBlockAction {
    return {
        type: CREATE_BLOCK,
        payload: data
    }
}

export function fetchBlock(data: FetchBlockActionInput): FetchBlockAction {
    return {
        type: FETCH_BLOCK,
        payload: data
    }
}