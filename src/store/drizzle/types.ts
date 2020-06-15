export const DRIZZLE_CONTRACT_INITIALIZED = 'CONTRACT_INITIALIZED'
export const DRIZZLE_CONTRACT_INITIALIZING = 'CONTRACT_INITIALIZING'
export const DRIZZLE_ADD_CONTRACT = 'ADD_CONTRACT'
export const DRIZZLE_INITIALIZED = 'DRIZZLE_INITIALIZED'
export const BLOCK_RECEIVED = "BLOCK_RECEIVED";
export const BLOCK_PROCESSING = "BLOCK_PROCESSING";
export const SYNCING_ACCOUNTS = "SYNCING_ACCOUNTS";
export const ACCOUNTS_FETCHED = "ACCOUNTS_FETCHED";
export const ACCOUNT_BALANCE_FETCHED = "ACCOUNT_BALANCE_FETCHED";
export const ACCOUNT_BALANCES_FETCHED = "ACCOUNT_BALANCES_FETCHED";
export const LISTEN_FOR_EVENT = "LISTEN_FOR_EVENT";
export const ADD_CONTRACT = "ADD_CONTRACT";
export const GOT_CONTRACT_VAR = "GOT_CONTRACT_VAR";

export interface AddDrizzleContractInput {
    contractConfig: any,
    events: any
}

export interface DrizzleAddContractAction {
    type: typeof DRIZZLE_ADD_CONTRACT,
    contractConfig: any,
    events: any
}