import { EventAction, CREATE_EVENT, UPDATE_EVENT, REMOVE_EVENT, CREATE_EVENT_CT_INDEX, UPDATE_EVENT_CT_INDEX, REMOVE_EVENT_CT_INDEX } from "./types";
import { indexAddressEvent } from "./eventByContractTypeIndex";

export function eventReducer(sess: any, action: EventAction) {
    const { Event, EventByContractTypeIndex } = sess;
    let contractTypeIndexId;
    switch (action.type) {
        case CREATE_EVENT:
            contractTypeIndexId = indexAddressEvent(action.payload)
            Event.upsert({ ...action.payload, contractTypeIndexId });
            break;
        case UPDATE_EVENT:
            Event.withId(action.payload.id).update(action.payload);
            break;
        case REMOVE_EVENT:
            Event.withId(action.payload.id).delete();
            break;
        case CREATE_EVENT_CT_INDEX:
            contractTypeIndexId = indexAddressEvent(action.payload)
            EventByContractTypeIndex.create({ ...action.payload, contractTypeIndexId });
            break;
        case UPDATE_EVENT_CT_INDEX:
            EventByContractTypeIndex.withId(action.payload.contractTypeIndexId).update(action.payload);
            break;
        case REMOVE_EVENT_CT_INDEX:
            EventByContractTypeIndex.withId(action.payload.contractTypeIndexId).delete();
            break;
    }

    return sess;
}
