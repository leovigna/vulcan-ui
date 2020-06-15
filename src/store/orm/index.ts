// orm.js
import { ORM } from 'redux-orm';
import { defaultUpdater } from 'redux-orm/lib/redux';

import {
    Event,
    Transaction,
    Block,
    EventByContractTypeIndex,
    Contract,
    Feed,
    ContractFavorite
} from './models';

interface VulcanORM extends ORM {
    Event: Event,
    Transaction: Transaction,
    Block: Block,
    EventByContractTypeIndex: EventByContractTypeIndex,
    Contract: Contract,
    ContractFavorite: ContractFavorite,
    Feed: Feed
}

const orm: VulcanORM = new ORM({
    stateSelector: state => state.persisted.orm
});
orm.register(Event, Transaction, Block, EventByContractTypeIndex, Contract, ContractFavorite, Feed);

export default orm;