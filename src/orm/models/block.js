// models.js
import { Model, fk, many, attr } from 'redux-orm';

class Block extends Model {
    toString() {
        return `Block: ${this.name}`;
    }
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'blockNumber',
    };
}
Block.modelName = 'Block';

// Declare your related fields.
Block.fields = {
    blockHash: attr(),
    // foreign key field
    blockNumber: attr(),
};


export default Block;