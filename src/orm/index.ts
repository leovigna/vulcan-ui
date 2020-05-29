// orm.js
import { ORM } from 'redux-orm';
import { Event, Transaction, Block, EventByContractTypeIndex, Contract } from './models';
import { EnumValueDefinitionNode } from 'graphql';

interface VulcanORM extends ORM {
    Event: Event
}

const orm: VulcanORM = new ORM({
    stateSelector: state => state.persisted.orm,
});
orm.register(Event, Transaction, Block, EventByContractTypeIndex, Contract);

export default orm;
