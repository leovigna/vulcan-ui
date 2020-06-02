// orm.js
import { ORM } from 'redux-orm';
import { Event, Transaction, Block, EventByContractTypeIndex, Contract, Feed } from './models';
import { EnumValueDefinitionNode } from 'graphql';

interface VulcanORM extends ORM {
    Event: Event,
    Transaction: Transaction,
    Block: Block,
    EventByContractTypeIndex: EventByContractTypeIndex,
    Contract: Contract,
    Feed: Feed
}

const orm: VulcanORM = new ORM({
    stateSelector: state => state.persisted.orm,
});
orm.register(Event, Transaction, Block, EventByContractTypeIndex, Contract, Feed);

export default orm;
