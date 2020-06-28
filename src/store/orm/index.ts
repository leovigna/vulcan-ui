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
import CoinbaseOracleResponse from '../coinbase/model';

interface VulcanORM extends ORM {
    Event: Event,
    Transaction: Transaction,
    Block: Block,
    EventByContractTypeIndex: EventByContractTypeIndex,
    Contract: Contract,
    ContractFavorite: ContractFavorite,
    Feed: Feed,
    Protocol: Protocol,
    CoinbaseOracleResponse: CoinbaseOracleResponse
}

const orm: VulcanORM = new ORM({
    stateSelector: state => state.persisted.orm
});
orm.register(Event, Transaction, Block, EventByContractTypeIndex, Contract, ContractFavorite, Feed, Protocol, CoinbaseOracleResponse);

export default orm;