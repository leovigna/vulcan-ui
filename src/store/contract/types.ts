import { Contract } from '../../orm/models'

export const CREATE_CONTRACT = 'ORM/CREATE_CONTRACT'
export const SETUP_CONTRACT = 'ORM/SETUP_CONTRACT'
export const UPDATE_CONTRACT = 'ORM/UPDATE_CONTRACT'
export const REMOVE_CONTRACT = 'ORM/REMOVE_CONTRACT'
export const UPDATE_CONTRACT_EVENTS = 'ORM/GET_CONTRACT_EVENTS'

export type CreateContractActionInput = Contract;

export interface CreateContractAction {
    type: typeof CREATE_CONTRACT
    payload: CreateContractActionInput
}

export type UpdateContractActionInput = Contract;

export interface UpdateContractAction {
    type: typeof UPDATE_CONTRACT
    payload: UpdateContractActionInput
}

export type RemoveContractActionInput = Contract;

export interface RemoveContractAction {
    type: typeof REMOVE_CONTRACT
    payload: RemoveContractActionInput
}

export type SetupContractActionInput = Contract;


export interface SetupContractAction {
    type: typeof SETUP_CONTRACT
    payload: SetupContractActionInput
}

export type UpdateContractEventsActionInput = {
    web3Contract: any,
    address: string,
    networkId: number | string,
};;


export interface UpdateContractEventsAction {
    type: typeof UPDATE_CONTRACT_EVENTS
    payload: UpdateContractEventsActionInput
}