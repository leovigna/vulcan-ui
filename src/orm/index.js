// orm.js
import { ORM } from 'redux-orm';
import { Event, Transaction, Block, EventByContractTypeIndex } from './models';


const orm = new ORM({
    stateSelector: state => state.orm,
});
orm.register(Event, Transaction, Block, EventByContractTypeIndex);

export default orm;
