interface Event {
    id: string,
    address: string,
    event: string,
    blockHash: string,
    blockNumber: number,
    transactionHash: string,
    returnValues: any,
    contractTypeIndexId: string
}
interface EventByContractTypeIndex {
    contractTypeIndexId: string,
    address: string,
    event: string,
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
    web3Contract: any
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
    contractTypeIndexId: EventByContractTypeIndex['contractTypeIndexId']
}
export interface RemoveEventByContractTypeIndexAction {
    type: typeof REMOVE_EVENT_CT_INDEX
    payload: RemoveEventByContractTypeIndexActionInput
}


export type EventAction = FetchEventAction | CreateEventAction | UpdateEventAction | RemoveEventAction | CreateEventByContractTypeIndexAction | UpdateEventByContractTypeIndexAction | RemoveEventByContractTypeIndexAction