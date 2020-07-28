// orm.js
import { ORM } from 'redux-orm';
import {
    EventModel,
    TransactionModel,
    BlockModel,
    EventByContractTypeIndexModel,
    FeedModel,
    ContractFavoriteModel,
    ProtocolModel
} from './models';
import CoinbaseOracleResponseModel from '../coinbase/model';

const orm: any = new ORM({
    //@ts-ignore
    stateSelector: state => state.persisted.orm
});
orm.register(EventModel, TransactionModel, BlockModel, EventByContractTypeIndexModel, ContractFavoriteModel, FeedModel, ProtocolModel, CoinbaseOracleResponseModel);

export default orm;