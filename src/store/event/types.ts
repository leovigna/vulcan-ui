import { Event, EventByContractTypeIndex } from './orm/models'

export const FETCH_EVENT = 'ORM/FETCH_EVENT'
export const CREATE_EVENT = 'ORM/CREATE_EVENT'
export const UPDATE_EVENT = 'ORM/UPDATE_EVENT'
export const REMOVE_EVENT = 'ORM/REMOVE_EVENT'

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
        filter: any
    },
    networkId: number | string,
    max: 25
};

export interface FetchEventAction {
    type: typeof FETCH_EVENT
    payload: FetchEventActionInput,
    web3Contract: any
}

export const CREATE_EVENT_CT_INDEX = 'ORM/CREATE_EVENT_CT_INDEX'
export const UPDATE_EVENT_CT_INDEX = 'ORM/UPDATE_EVENT_CT_INDEX'
export const REMOVE_EVENT_CT_INDEX = 'ORM/REMOVE_EVENT_CT_INDEX'

export type CreateEventByContractTypeIndexActionInput = EventByContractTypeIndex
export interface CreateEventByContractTypeIndexAction {
    type: typeof CREATE_EVENT_CT_INDEX
    payload: CreateEventByContractTypeIndexActionInput
}