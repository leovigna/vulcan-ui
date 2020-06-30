import { Model, attr } from 'redux-orm';

class EventByContractTypeIndex extends Model {
}

EventByContractTypeIndex.modelName = 'EventByContractTypeIndex';

// Declare your related fields.
EventByContractTypeIndex.fields = {
    id: attr(),
    address: attr(),
    event: attr()
};

export default EventByContractTypeIndex;

export function indexAddressEvent({ address, event }: { address: string, event: string }) {
    return `${address}-${event}`
}