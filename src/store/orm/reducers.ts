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
import { indexAddressEvent } from "../event/eventByContractTypeIndex"
import { tellorContracts, testContracts } from '../../data/feeds'
import favorites from '../../data/favorites'
import protocols from '../../data/protocols'
import { feedReducer } from '../feed/reducers';
import { FeedAction } from '../feed/types';
import { transactionReducer } from '../transaction/reducers';
import { TransactionAction } from '../transaction/types';
import { blockReducer } from '../block/reducers';
import { BlockAction } from '../block/types';
import { eventReducer } from '../event/reducers';
import { EventAction } from '../event/types';
import { coinbaseReducer } from '../coinbase/reducers';
import { CoinbaseAction } from '../coinbase/types';
import { contractReducer } from '../contract/reducers';
import { ContractAction } from '../contract/types';

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
    const { ContractFavorite } = sess;
    switch (action.type) {
        case EventTypes.CREATE_EVENT:
        case EventTypes.UPDATE_EVENT:
        case EventTypes.REMOVE_EVENT:
        case EventTypes.CREATE_EVENT_CT_INDEX:
        case EventTypes.UPDATE_EVENT_CT_INDEX:
        case EventTypes.REMOVE_EVENT_CT_INDEX:
            eventReducer(sess, action as EventAction)
            break;
        case TransactionTypes.CREATE_TRANSACTION:
        case TransactionTypes.UPDATE_TRANSACTION:
        case TransactionTypes.REMOVE_TRANSACTION:
            transactionReducer(sess, action as TransactionAction)
            break;
        case BlockTypes.CREATE_BLOCK:
        case BlockTypes.UPDATE_BLOCK:
        case BlockTypes.REMOVE_BLOCK:
            blockReducer(sess, action as BlockAction)
            break;
        case ContractTypes.CREATE_CONTRACT:
        case ContractTypes.UPDATE_CONTRACT:
        case ContractTypes.REMOVE_CONTRACT:
        case ContractTypes.UPDATE_CONTRACT_EVENTS:
            contractReducer(sess, action as ContractAction)
            break;
        case ContractFavoriteTypes.SET_CONTRACT_FAVORITE:
            ContractFavorite.upsert(action.payload)
            break;
        case CoinbaseTypes.CREATE_COINBASE_ORACLE_RESPONSE:
            coinbaseReducer(sess, action as CoinbaseAction)
            break;
        case FeedTypes.REFRESH_FEED:
        case FeedTypes.UPDATE_FEED:
        case FeedTypes.SET_FEED_CACHE_KEY:
            feedReducer(sess, action as FeedAction)
            break;
    }

    return sess.state;
}
