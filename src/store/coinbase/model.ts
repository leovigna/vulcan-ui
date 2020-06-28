import { attr } from 'redux-orm';
import { Model } from 'redux-orm';

class CoinbaseOracleResponse extends Model {
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'timestamp',
    };
}

CoinbaseOracleResponse.modelName = 'CoinbaseOracleResponse';

// Declare your related fields.
CoinbaseOracleResponse.fields = {
    timestamp: attr(),
    messages: attr(),
    signatures: attr(),
    prices: attr()
};

export default CoinbaseOracleResponse;