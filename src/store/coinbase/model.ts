import { attr } from 'redux-orm';
import { Model } from 'redux-orm';

class CoinbaseOracleResponseModel extends Model {
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'timestamp',
    };
}

CoinbaseOracleResponseModel.modelName = 'CoinbaseOracleResponse';

// Declare your related fields.
CoinbaseOracleResponseModel.fields = {
    timestamp: attr(),
    messages: attr(),
    signatures: attr(),
    prices: attr()
};

export default CoinbaseOracleResponseModel;