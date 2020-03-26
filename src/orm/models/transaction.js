// models.js
import { Model, fk, many, attr } from 'redux-orm';

class Transaction extends Model {
    toString() {
        return `Transaction: ${this.name}`;
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