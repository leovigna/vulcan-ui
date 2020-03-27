// models.js
import { attr, fk } from 'redux-orm';
import { Model } from 'redux-orm';

interface Transaction {
    transactionHash: string,
    blockNumber: number,
}

class Transaction extends Model {
    toString() {
        return `Transaction: ${this.transactionHash}`;
    }
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'transactionHash',
    };

}
Transaction.modelName = 'Transaction';

// Declare your related fields.
Transaction.fields = {
    transactionHash: attr(),
    // foreign key field
    blockNumber: fk({
        to: 'Block',
        as: 'block',
        relatedName: 'transactions',
    }),
};

export default Transaction;