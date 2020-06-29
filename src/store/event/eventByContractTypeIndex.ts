import { Model, attr } from 'redux-orm';

class EventByContractTypeIndex extends Model {
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

export function indexAddressEvent({ address, event }: { address: string, event: string }) {
    return `${address}-${event}`
}