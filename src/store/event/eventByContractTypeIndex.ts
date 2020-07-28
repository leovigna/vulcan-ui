import { Model, attr } from 'redux-orm';

class EventByContractTypeIndexModel extends Model {
}

EventByContractTypeIndexModel.modelName = 'EventByContractTypeIndex';

// Declare your related fields.
EventByContractTypeIndexModel.fields = {
    id: attr(),
    address: attr(),
    event: attr()
};

export default EventByContractTypeIndexModel;

export function indexAddressEvent({ address, event }: { address: string, event: string }) {
    return `${address}-${event}`
}