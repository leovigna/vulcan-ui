export const DRIZZLE_CONTRACT_INITIALIZED = 'CONTRACT_INITIALIZED'
export const DRIZZLE_CONTRACT_INITIALIZING = 'CONTRACT_INITIALIZING'
export const DRIZZLE_ADD_CONTRACT = 'ADD_CONTRACT'
export const DRIZZLE_INITIALIZED = 'DRIZZLE_INITIALIZED'

export interface AddDrizzleContractInput {
    contractConfig: any,
    events: any
}

export interface DrizzleAddContractAction {
    type: typeof DRIZZLE_ADD_CONTRACT,
    contractConfig: any,
    events: any
}