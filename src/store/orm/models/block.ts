import { attr } from 'redux-orm';
import { Model } from 'redux-orm';

interface Block {
    blockHash: string,
    blockNumber: number
}

class Block extends Model {
    toString() {
        return `Block: ${this.blockHash}`;
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