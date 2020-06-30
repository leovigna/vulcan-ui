// models.js
import { attr, fk } from 'redux-orm';
import { Model } from 'redux-orm';

class Transaction extends Model {
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'hash',
    };
}
Transaction.modelName = 'Transaction';

// Declare your related fields.
Transaction.fields = {
    blockHash: attr(),
    blockNumber: fk({
        to: 'Block',
        as: 'block',
        relatedName: 'transactionsWithData',
    }),
    from: attr(),
    gas: attr(),
    gasPrice: attr(),
    hash: attr(),
    input: attr(),
    nonce: attr(),
    r: attr(),
    s: attr(),
    to: attr(),
    transactionIndex: attr(),
    v: attr(),
    value: attr(),
    networkId: attr()
};

export default Transaction;