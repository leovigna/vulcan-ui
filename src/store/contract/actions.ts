import { Contract } from '../../orm/models'
import {
    CREATE_CONTRACT,
    SETUP_CONTRACT,
    CreateContractAction,
    SetupContractAction,
    CreateContractActionInput,
    SetupContractActionInput
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