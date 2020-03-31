import orm from '../orm';

import {
    EventTypes,
    TransactionTypes,
    BlockTypes,
    ContractTypes,
} from "./types"

import { indexAddressEvent } from "../orm/models/eventByContractTypeIndex"

type Action = {
    type: string,
    payload: any,
    [key: string]: any
}

export function ormReducer(dbState: any, action: Action) {
    const sess = orm.session(dbState);

    // Session-specific Models are available
    // as properties on the Session instance.
    const { Transaction, Block, Event, EventByContractTypeIndex, Contract } = sess;
    let transactionHash;
    let blockNumber;
    switch (action.type) {
        case EventTypes.CREATE_EVENT:
            if (!Event.idExists(action.payload.id)) {
                const indexData = { address: action.payload.address, event: action.payload.event }
                const contractTypeIndexId = indexAddressEvent(indexData)
                Event.create({ ...action.payload, contractTypeIndexId });
            }
            break;
        case EventTypes.UPDATE_EVENT:
            Event.withId(action.payload.id).update(action.payload);
            break;
        case EventTypes.REMOVE_EVENT:
            Event.withId(action.payload.id).delete();
            break;
        case TransactionTypes.CREATE_TRANSACTION:
            transactionHash = (action.payload.transactionHash || action.payload.hash)
            if (!Transaction.idExists(transactionHash)) {
                Transaction.create({ ...action.payload, transactionHash });
            }
            break;
        case TransactionTypes.UPDATE_TRANSACTION:
            transactionHash = (action.payload.transactionHash || action.payload.hash)
            Transaction.withId(transactionHash).update({ ...action.payload, transactionHash });
            break;
        case TransactionTypes.REMOVE_TRANSACTION:
            transactionHash = (action.payload.transactionHash || action.payload.hash)
            Transaction.withId(transactionHash).delete();
            break;
        case BlockTypes.CREATE_BLOCK:
            blockNumber = (action.payload.blockNumber || action.payload.number)
            if (!Block.idExists(blockNumber)) {
                Block.create({ ...action.payload, blockNumber });
            }
            break;
        case BlockTypes.UPDATE_BLOCK:
            blockNumber = (action.payload.blockNumber || action.payload.number)
            Block.withId(blockNumber).update({ ...action.payload, blockNumber });
            break;
        case BlockTypes.REMOVE_BLOCK:
            blockNumber = (action.payload.blockNumber || action.payload.number)
            Block.withId(blockNumber).delete();
            break;
        case EventTypes.CREATE_EVENT_CT_INDEX:
            const contractTypeIndexId = indexAddressEvent(action.payload)
            EventByContractTypeIndex.create({ ...action.payload, contractTypeIndexId });
            break;
        case EventTypes.UPDATE_EVENT_CT_INDEX:
            EventByContractTypeIndex.withId(action.payload.contractTypeIndexId).update(action.payload);
            break;
        case EventTypes.REMOVE_EVENT_CT_INDEX:
            EventByContractTypeIndex.withId(action.payload.contractTypeIndexId).delete();
            break;
        case ContractTypes.CREATE_CONTRACT:
            Contract.create(action.payload);
            break;
        case ContractTypes.UPDATE_CONTRACT:
            Contract.withId(action.payload.address).update(action.payload);
            break;
        case ContractTypes.REMOVE_CONTRACT:
            Contract.withId(action.payload.address).delete();
            break;

    }

    return sess.state;
}