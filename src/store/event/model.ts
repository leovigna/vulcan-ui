import { attr, fk } from 'redux-orm';
import { Model } from 'redux-orm';

class EventModel extends Model {
    // Declare any static or instance methods you need.
}
EventModel.modelName = 'Event';

// Declare your related fields.
EventModel.fields = {
    id: attr(), // non-relational field for any value; optional but highly recommended
    address: attr(),
    event: attr(),
    logIndex: attr(),
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

export default EventModel;