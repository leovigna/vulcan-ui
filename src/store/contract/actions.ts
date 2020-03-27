import { Contract } from '../../orm/models'
import {
    CREATE_CONTRACT,
    SETUP_CONTRACT,
    CreateContractAction,
    SetupContractAction
} from './types'


export function createContract(data: Contract): CreateContractAction {
    return {
        type: CREATE_CONTRACT,
        payload: data
    }
}

export function setupContract(data: Contract): SetupContractAction {
    return {
        type: SETUP_CONTRACT,
        payload: data
    }
}