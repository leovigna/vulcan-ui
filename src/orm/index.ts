// orm.js
import { ORM } from 'redux-orm';
import { Event, Transaction, Block, EventByContractTypeIndex, Contract } from './models';


const orm = new ORM({
    stateSelector: state => state.persisted.orm,
});
orm.register(Event, Transaction, Block, EventByContractTypeIndex, Contract);

export default orm;
