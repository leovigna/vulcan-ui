import { attr } from 'redux-orm';
import { Model } from 'redux-orm';
import { sprintf } from 'sprintf-js';

interface Contract {
    networkId: string,
    blockHash: string,
    blockNumber: number,
    title: string,
    count: number,
    address: string,
    path: string,
    answerRenderFormat: any,
    events: any,
}

class Contract extends Model {
    toString() {
        return `Contract: ${this.blockNumber}`;
    }

    answerTransform(answer: number) {
        const options = this.answerRenderOptions
        if (!options) return answer;

        const { transform } = this.answerRenderOptions;
        if (transform) {
            return ((answer || 0) * (transform.multiply || 1))
        }

        return answer

    }

    answerRender(answer) {
        const options = this.answerRenderOptions
        if (!options) return `${answer}`;

        const { format, transform } = this.answerRenderOptions;
        let value;
        if (transform) {
            value = this.answerTransform(answer).toFixed(transform.decimals || 2)
        } else {
            value = answer
        }

        return sprintf(format, { value })

    }
    // Declare any static or instance methods you need.
    static options = {
        idAttribute: 'address',
    };
}
Contract.modelName = 'Contract';

// Declare your related fields.
Contract.fields = {
    title: attr(),
    count: attr(),
    address: attr(),
    path: attr(),
    answerRenderFormat: attr(),
    networkId: attr(),
    web3Contract: attr(),
    events: attr()
};



export default Contract;