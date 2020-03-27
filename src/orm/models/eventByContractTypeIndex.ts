import { Model, attr } from 'redux-orm';

export function indexAddressEvent({ address, event }) {
    return `${address}-${event}`
}

interface EventByContractTypeIndex {
    contractTypeIndexId: string,
    address: string,
    event: string,
}


//Join table
class EventByContractTypeIndex extends Model {
    toString() {
        return `Event: ${this.name}`;
    }
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'contractTypeIndexId',
    };
}

EventByContractTypeIndex.modelName = 'EventByContractTypeIndex';

// Declare your related fields.
EventByContractTypeIndex.fields = {
    contractTypeIndexId: attr(),
    address: attr(),
    event: attr()
};

export default EventByContractTypeIndex;