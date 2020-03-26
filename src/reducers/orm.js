import orm from '../orm';

import {
    CREATE_EVENT,
    UPDATE_EVENT,
    REMOVE_EVENT,
    CREATE_TRANSACTION,
    UPDATE_TRANSACTION,
    REMOVE_TRANSACTION,
    CREATE_BLOCK,
    UPDATE_BLOCK,
    REMOVE_BLOCK,
    FETCH_TRANSACTION,
    CREATE_EVENT_CT_INDEX,
    UPDATE_EVENT_CT_INDEX,
    REMOVE_EVENT_CT_INDEX,
} from "../actions"

import { indexAddressEvent } from "../orm/models/eventByContractTypeIndex"

export function ormReducer(dbState, action) {
    const sess = orm.session(dbState);

    // Session-specific Models are available
    // as properties on the Session instance.
    const { Transaction, Block, Event, EventByContractTypeIndex } = sess;
    let transactionHash;
    let blockNumber;
    switch (action.type) {
        case CREATE_EVENT:
            if (!Event.idExists(action.payload.id)) {
                const indexData = { address: action.payload.address, event: action.payload.event }
                const contractTypeIndexId = indexAddressEvent(indexData)
                Event.create({ ...action.payload, contractTypeIndexId });
            }
            break;
        case UPDATE_EVENT:
            Event.withId(action.payload.id).update(action.payload);
            break;
        case REMOVE_EVENT:
            Event.withId(action.payload.id).delete();
            break;
        case CREATE_TRANSACTION:
            transactionHash = (action.payload.transactionHash || action.payload.hash)
            if (!Transaction.idExists(transactionHash)) {
                Transaction.create({ ...action.payload, transactionHash });
            }
            break;
        case UPDATE_TRANSACTION:
            transactionHash = (action.payload.transactionHash || action.payload.hash)
            Transaction.withId(transactionHash).update({ ...action.payload, transactionHash });
            break;
        case REMOVE_TRANSACTION:
            transactionHash = (action.payload.transactionHash || action.payload.hash)
            Transaction.withId(transactionHash).delete();
            break;
        case CREATE_BLOCK:
            blockNumber = (action.payload.blockNumber || action.payload.number)
            if (!Block.idExists(blockNumber)) {
                Block.create({ ...action.payload, blockNumber });
            }
            break;
        case UPDATE_BLOCK:
            blockNumber = (action.payload.blockNumber || action.payload.number)
            Block.withId(blockNumber).update({ ...action.payload, blockNumber });
            break;
        case REMOVE_BLOCK:
            blockNumber = (action.payload.blockNumber || action.payload.number)
            Block.withId(blockNumber).delete();
            break;
        case CREATE_EVENT_CT_INDEX:
            const contractTypeIndexId = indexAddressEvent(action.payload)
            EventByContractTypeIndex.create({ ...action.payload, contractTypeIndexId });
            break;
        case UPDATE_EVENT_CT_INDEX:
            EventByContractTypeIndex.withId(action.payload.contractTypeIndexId).update(action.payload);
            break;
        case REMOVE_EVENT_CT_INDEX:
            EventByContractTypeIndex.withId(action.payload.contractTypeIndexId).delete();
            break;

    }

    return sess.state;
}