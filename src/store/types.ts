import * as BlockTypes from './block/types';
import * as ContractTypes from './contract/types';
import * as EventTypes from './event/types';
import * as TransactionTypes from './transaction/types';
import * as DrizzleTypes from './drizzle/types';
import * as ProtocolTypes from './protocol/types';
import * as FeedTypes from './feed/types';
import * as NodeTypes from './node/types';
import * as NetworkTypes from './network/types';

export interface Point<X, Y> {
    x: X,
    y: Y
}

export {
    NetworkTypes,
    NodeTypes,
    FeedTypes,
    ProtocolTypes,
    BlockTypes,
    ContractTypes,
    EventTypes,
    TransactionTypes,
    DrizzleTypes
}