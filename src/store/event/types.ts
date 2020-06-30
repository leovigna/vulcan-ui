import { Transaction } from "../transaction/types";
import { Block } from "../block/types";

export interface Event {
    id: string,
    address: string,
    event: string,
    logIndex: number,
    blockHash: string,
    blockNumber: number,
    transactionHash: string,
    transactionIndex: number,
    returnValues: any,
    contractTypeIndexId: string,
    transaction?: Transaction,
    block?: Block
}

export const eventId = ({ transactionHash, logIndex }: { transactionHash: Event['transactionHash'], logIndex: Event['logIndex'] }) => {
    return `${transactionHash}-${logIndex}`
}

export interface EventByContractTypeIndex {
    id: string,
    address: string,
    event: string,
    events: Event[]
}

export const CREATE_EVENT = 'ORM/EVENT/CREATE'


export type CreateEventActionInput = Event;
export interface CreateEventAction {
    type: typeof CREATE_EVENT
    payload: CreateEventActionInput
}

export const FETCH_EVENT = 'ORM/EVENT/FETCH'
export type FetchEventActionInput = {
    event: string,
    options: {
        fromBlock: number | string,
        toBlock: number | string,
        filter?: any
    },
    max: number,
    web3Contract: any,
    fetchTransaction?: boolean,
    fetchBlock?: boolean
};

export const UPDATE_EVENT = 'ORM/EVENT/UPDATE'
export type UpdateEventActionInput = Event;
export interface UpdateEventAction {
    type: typeof UPDATE_EVENT
    payload: UpdateEventActionInput
}

export const REMOVE_EVENT = 'ORM/EVENT/REMOVE'
export type RemoveEventActionInput = {
    id: Event['id']
};
export interface RemoveEventAction {
    type: typeof REMOVE_EVENT
    payload: RemoveEventActionInput
}

export interface FetchEventAction {
    type: typeof FETCH_EVENT
    payload: FetchEventActionInput,
}

export const CREATE_EVENT_CT_INDEX = 'ORM/EVENT_CT_INDEX/CREATE'
export type CreateEventByContractTypeIndexActionInput = EventByContractTypeIndex
export interface CreateEventByContractTypeIndexAction {
    type: typeof CREATE_EVENT_CT_INDEX
    payload: CreateEventByContractTypeIndexActionInput
}

export const UPDATE_EVENT_CT_INDEX = 'ORM/EVENT_CT_INDEX/UPDATE'
export type UpdateEventByContractTypeIndexActionInput = EventByContractTypeIndex
export interface UpdateEventByContractTypeIndexAction {
    type: typeof UPDATE_EVENT_CT_INDEX
    payload: UpdateEventByContractTypeIndexActionInput
}

export const REMOVE_EVENT_CT_INDEX = 'ORM/EVENT_CT_INDEX/REMOVE'
export type RemoveEventByContractTypeIndexActionInput = {
    contractTypeIndexId: EventByContractTypeIndex['id']
}
export interface RemoveEventByContractTypeIndexAction {
    type: typeof REMOVE_EVENT_CT_INDEX
    payload: RemoveEventByContractTypeIndexActionInput
}


export type EventAction = FetchEventAction | CreateEventAction | UpdateEventAction | RemoveEventAction | CreateEventByContractTypeIndexAction | UpdateEventByContractTypeIndexAction | RemoveEventByContractTypeIndexAction