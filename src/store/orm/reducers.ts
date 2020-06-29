import orm from './index';
import {
    EventTypes,
    TransactionTypes,
    BlockTypes,
    ContractTypes,
    ContractFavoriteTypes,
    FeedTypes,
    CoinbaseTypes
} from "../types"
import { indexAddressEvent } from "./models/eventByContractTypeIndex"
import { tellorContracts, testContracts } from '../../data/feeds'
import favorites from '../../data/favorites'
import protocols from '../../data/protocols'
import { feedReducer } from '../feed/reducers';
import { FeedAction } from '../feed/types';

type Action = {
    type: string,
    payload: any,
    [key: string]: any
}

export const initializeState = (orm) => {
    const state = orm.getEmptyState();
    const { ContractFavorite, Feed, Protocol } = orm.mutableSession(state);

    favorites.forEach((favorite: ContractFavoriteTypes.ContractFavorite) => ContractFavorite.create(favorite))
    protocols.forEach((protocol: any) => Protocol.create(protocol))

    if (process.ENV !== 'production') {
        testContracts.forEach((feed: FeedTypes.Feed) => Feed.create({ ...feed, favoriteId: feed.id }))
    } else {
        tellorContracts.forEach((feed: FeedTypes.Feed) => Feed.create({ ...feed, favoriteId: feed.id }))
    }

    return state;
};

export function ormReducer(state: any, action: Action) {
    const sess = orm.session(state || initializeState(orm));

    // Session-specific Models are available
    // as properties on the Session instance.
    const { Transaction, Block, Event, EventByContractTypeIndex, Contract, ContractFavorite, Feed, CoinbaseOracleResponse } = sess;
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
        case ContractTypes.UPDATE_CONTRACT_EVENTS:
            Contract.withId(action.payload.address).updated = true
            break;
        case ContractFavoriteTypes.SET_CONTRACT_FAVORITE:
            ContractFavorite.upsert(action.payload)
            break;
        case CoinbaseTypes.CREATE_COINBASE_ORACLE_RESPONSE:
            CoinbaseOracleResponse.upsert(action.payload)
            break;
        case FeedTypes.REFRESH_FEED:
        case FeedTypes.UPDATE_FEED:
        case FeedTypes.SET_FEED_CACHE_KEY:
            feedReducer(sess, action as FeedAction)
            break;
    }

    return sess.state;
}
