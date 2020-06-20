// orm.js
import { ORM } from 'redux-orm';
import {
    Event,
    Transaction,
    Block,
    EventByContractTypeIndex,
    Contract,
    Feed,
    ContractFavorite,
    Protocol
} from './models';

interface VulcanORM extends ORM {
    Event: Event,
    Transaction: Transaction,
    Block: Block,
    EventByContractTypeIndex: EventByContractTypeIndex,
    Contract: Contract,
    ContractFavorite: ContractFavorite,
    Feed: Feed,
    Protocol: Protocol
}

const orm: VulcanORM = new ORM({
    stateSelector: state => state.persisted.orm
});
orm.register(Event, Transaction, Block, EventByContractTypeIndex, Contract, ContractFavorite, Feed, Protocol);

export default orm;