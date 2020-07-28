export type CoinbaseTicker = 'BTC' | 'ETH' | 'XTZ' | 'DAI' | 'REP' | 'ZRX' | 'BAT' | 'KNC' | 'LINK' | 'COMP';

export interface CoinbaseOracleResponse {
    timestamp: string;
    messages: string[9];
    signatures: string[9];
    prices: {
        [ticker in CoinbaseTicker]: string;
    };
}

export interface CoinbaseOracle {
    timestamp: string;
    message: string;
    signature: string;
    price: string;
}

export const START_POLL_COINBASE_ORACLE = 'ORM/START_POLL_COINBASE_ORACLE';
export const POLL_COINBASE_ORACLE_ERROR = 'ORM/POLL_COINBASE_ORACLE_ERROR';
export const STOP_POLL_COINBASE_ORACLE = 'ORM/STOP_POLL_COINBASE_ORACLE';
export const CREATE_COINBASE_ORACLE_RESPONSE = 'ORM/CREATE_COINBASE_ORACLE_RESPONSE';
export type CreateCoinbaseOracleResponseActionInput = CoinbaseOracleResponse;
export interface CreateCoinbaseOracleResponseAction {
    type: typeof CREATE_COINBASE_ORACLE_RESPONSE;
    payload: CreateCoinbaseOracleResponseActionInput;
}

export type CoinbaseAction = CreateCoinbaseOracleResponseAction;
