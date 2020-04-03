import { Contract } from '../../orm/models'
import {
    CREATE_CONTRACT,
    SETUP_CONTRACT,
    UPDATE_CONTRACT_EVENTS,
    CreateContractAction,
    SetupContractAction,
    UpdateContractEventsAction,
    CreateContractActionInput,
    SetupContractActionInput,
    UpdateContractEventsActionInput
} from './types'


export function createContract(data: CreateContractActionInput): CreateContractAction {
    return {
        type: CREATE_CONTRACT,
        payload: data
    }
}

export function setupContract(data: SetupContractActionInput): SetupContractAction {
    return {
        type: SETUP_CONTRACT,
        payload: data
    }
}

export function updateContractEvents(data: UpdateContractEventsActionInput): UpdateContractEventsAction {
    return {
        type: UPDATE_CONTRACT_EVENTS,
        payload: data
    }
}