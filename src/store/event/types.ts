import { Event, EventByContractTypeIndex } from '../orm/models'

export const FETCH_EVENT = 'ORM/EVENT/FETCH'
export const CREATE_EVENT = 'ORM/EVENT/CREATE'
export const UPDATE_EVENT = 'ORM/EVENT/UPDATE'
export const REMOVE_EVENT = 'ORM/EVENT/REMOVE'

export type CreateEventActionInput = Event;
export interface CreateEventAction {
    type: typeof CREATE_EVENT
    payload: CreateEventActionInput
}

export type FetchEventActionInput = {
    event: string,
    options: {
        fromBlock: number | string,
        toBlock: number | string,
        filter?: any
    },
    max: number,
    web3Contract: any
};

export interface FetchEventAction {
    type: typeof FETCH_EVENT
    payload: FetchEventActionInput,
}

export const CREATE_EVENT_CT_INDEX = 'ORM/EVENT_CT_INDEX/CREATE'
export const UPDATE_EVENT_CT_INDEX = 'ORM/EVENT_CT_INDEX/UPDATE'
export const REMOVE_EVENT_CT_INDEX = 'ORM/EVENT_CT_INDEX/REMOVE'

export type CreateEventByContractTypeIndexActionInput = EventByContractTypeIndex
export interface CreateEventByContractTypeIndexAction {
    type: typeof CREATE_EVENT_CT_INDEX
    payload: CreateEventByContractTypeIndexActionInput
}