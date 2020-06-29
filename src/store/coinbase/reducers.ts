import { CoinbaseAction, CREATE_COINBASE_ORACLE_RESPONSE } from "./types";
export function coinbaseReducer(sess: any, action: CoinbaseAction) {
    const { CoinbaseOracleResponse } = sess;
    switch (action.type) {
        case CREATE_COINBASE_ORACLE_RESPONSE:
            CoinbaseOracleResponse.upsert(action.payload)
            break;
    }

    return sess;
}
