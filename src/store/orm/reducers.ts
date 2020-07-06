import orm from './index';
import contracts, { testContracts } from '../../data/feeds'
import favorites from '../../data/favorites'
import protocols from '../../data/protocols'
import { feedReducer } from '../feed/reducers';
import { FeedAction, Feed, REFRESH_FEED, UPDATE_FEED, SET_FEED_CACHE_KEY } from '../feed/types';
import { transactionReducer } from '../transaction/reducers';
import { TransactionAction, CREATE_TRANSACTION, UPDATE_TRANSACTION, REMOVE_TRANSACTION } from '../transaction/types';
import { blockReducer } from '../block/reducers';
import { BlockAction, CREATE_BLOCK, UPDATE_BLOCK, REMOVE_BLOCK } from '../block/types';
import { eventReducer } from '../event/reducers';
import { EventAction, CREATE_EVENT, UPDATE_EVENT, REMOVE_EVENT, CREATE_EVENT_CT_INDEX, UPDATE_EVENT_CT_INDEX, REMOVE_EVENT_CT_INDEX } from '../event/types';
import { coinbaseReducer } from '../coinbase/reducers';
import { CoinbaseAction, CREATE_COINBASE_ORACLE_RESPONSE } from '../coinbase/types';
import { contractReducer } from '../contract/reducers';
import { ContractAction, CREATE_CONTRACT, UPDATE_CONTRACT, REMOVE_CONTRACT, UPDATE_CONTRACT_EVENTS } from '../contract/types';
import { contractFavoriteReducer } from '../contractFavorite/reducers';
import { ContractFavoriteAction, ContractFavorite, SET_CONTRACT_FAVORITE } from '../contractFavorite/types';

type Action = {
    type: string,
    payload: any,
    [key: string]: any
}

export const initializeState = (orm) => {
    const state = orm.getEmptyState();
    const { ContractFavorite, Feed, Protocol } = orm.mutableSession(state);

    favorites.forEach((favorite: ContractFavorite) => ContractFavorite.create(favorite))
    protocols.forEach((protocol: any) => Protocol.create(protocol))

    if (process.ENV === 'development') {
        testContracts.forEach((feed: Feed) => Feed.create({ ...feed, favoriteId: feed.id }))
    } else {
        contracts.forEach((feed: Feed) => Feed.create({ ...feed, favoriteId: feed.id }))
    }

    return state;
};

export function ormReducer(state: any, action: Action) {
    const sess = orm.session(state || initializeState(orm));

    // Session-specific Models are available
    // as properties on the Session instance.
    switch (action.type) {
        case CREATE_EVENT:
        case UPDATE_EVENT:
        case REMOVE_EVENT:
        case CREATE_EVENT_CT_INDEX:
        case UPDATE_EVENT_CT_INDEX:
        case REMOVE_EVENT_CT_INDEX:
            eventReducer(sess, action as EventAction)
            break;
        case CREATE_TRANSACTION:
        case UPDATE_TRANSACTION:
        case REMOVE_TRANSACTION:
            transactionReducer(sess, action as TransactionAction)
            break;
        case CREATE_BLOCK:
        case UPDATE_BLOCK:
        case REMOVE_BLOCK:
            blockReducer(sess, action as BlockAction)
            break;
        case CREATE_CONTRACT:
        case UPDATE_CONTRACT:
        case REMOVE_CONTRACT:
        case UPDATE_CONTRACT_EVENTS:
            contractReducer(sess, action as ContractAction)
            break;
        case SET_CONTRACT_FAVORITE:
            contractFavoriteReducer(sess, action as ContractFavoriteAction)
            break;
        case CREATE_COINBASE_ORACLE_RESPONSE:
            coinbaseReducer(sess, action as CoinbaseAction)
            break;
        case REFRESH_FEED:
        case UPDATE_FEED:
        case SET_FEED_CACHE_KEY:
            feedReducer(sess, action as FeedAction)
            break;
    }

    return sess.state;
}
