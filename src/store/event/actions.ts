import {
    CREATE_EVENT,
    FETCH_EVENT,
    CREATE_EVENT_CT_INDEX,
    CreateEventAction,
    FetchEventAction,
    CreateEventByContractTypeIndexAction,
    CreateEventActionInput,
    FetchEventActionInput,
    CreateEventByContractTypeIndexActionInput
} from './types'


export function createEvent(data: CreateEventActionInput): CreateEventAction {
    return {
        type: CREATE_EVENT,
        payload: data
    }
}

export function fetchEvent(data: FetchEventActionInput, web3Contract: any): FetchEventAction {
    return {
        type: FETCH_EVENT,
        payload: data,
        web3Contract: web3Contract
    }
}

export function createEventIndex(data: CreateEventByContractTypeIndexActionInput): CreateEventByContractTypeIndexAction {
    return {
        type: CREATE_EVENT_CT_INDEX,
        payload: data
    }
}
