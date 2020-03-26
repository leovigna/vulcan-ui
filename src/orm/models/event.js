// models.js
import { Model, fk, many, attr } from 'redux-orm';

class Event extends Model {
    toString() {
        return `Event: ${this.name}`;
    }
    // Declare any static or instance methods you need.
}
Event.modelName = 'Event';

// Declare your related fields.
Event.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    address: attr(),
    event: attr(),
    blockHash: attr(),
    blockNumber: fk({
        to: 'Block',
        as: 'block',
        relatedName: 'events',
    }),
    transactionHash: fk({
        to: 'Transaction',
        as: 'transaction',
        relatedName: 'events',
    }),
    transactionIndex: attr(),
    returnValues: attr(),
    contractTypeIndexId: fk({
        to: 'EventByContractTypeIndex',
        as: 'contractTypeIndex',
        relatedName: 'events',
    }),
};

export default Event;