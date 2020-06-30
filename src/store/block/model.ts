import { attr, Attribute } from 'redux-orm';
import { Model } from 'redux-orm';


class Block extends Model {
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'number',
    };
}

Block.modelName = 'Block';

// Declare your related fields.
Block.fields = {
    networkId: attr(),
    difficulty: attr(),
    extraData: attr(),
    gasLimit: attr(),
    gasUsed: attr(),
    hash: attr(),
    logsBloom: attr(),
    miner: attr(),
    mixHash: attr(),
    nonce: attr(),
    number: attr(),
    parentHash: attr(),
    receiptsRoot: attr(),
    sha3Uncles: attr(),
    size: attr(),
    stateRoot: attr(),
    timestamp: attr(),
    totalDifficulty: attr(),
    transactions: attr(),
    transactionsRoot: attr(),
    uncles: attr()
};

export default Block;