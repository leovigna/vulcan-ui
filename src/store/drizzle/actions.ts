import {
    DRIZZLE_ADD_CONTRACT,
    AddDrizzleContractInput,
    DrizzleAddContractAction
} from './types'


export function addDrizzleContract(data: AddDrizzleContractInput): DrizzleAddContractAction {
    return {
        type: DRIZZLE_ADD_CONTRACT,
        contractConfig: data.contractConfig,
        events: data.events
    }
}