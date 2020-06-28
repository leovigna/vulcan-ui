import { CreateCoinbaseOracleResponseActionInput, CreateCoinbaseOracleResponseAction, CREATE_COINBASE_ORACLE_RESPONSE } from "./types";

export function createCoinbaseOracleResponse(data: CreateCoinbaseOracleResponseActionInput): CreateCoinbaseOracleResponseAction {
    return {
        type: CREATE_COINBASE_ORACLE_RESPONSE,
        payload: data
    }
}