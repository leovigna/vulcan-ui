import { attr, fk } from 'redux-orm';
import { Model } from 'redux-orm';

interface Event {
    id: string,
    address: string,
    event: string,
    blockHash: string,
    blockNumber: number,
    transactionHash: string,
    returnValues: any,
    contractTypeIndexId: string
}

class Event extends Model {
    toString() {
        return `Event: ${this.id}`;
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