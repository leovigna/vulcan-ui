// models.js
import { Model, fk, many, attr } from 'redux-orm';
import { sprintf } from 'sprintf-js';

class Contract extends Model {
    toString() {
        return `Contract: ${this.name}`;
    }

    answerTransformFunction() {
        const options = this.answerRenderOptions
        return (answer) => {
            if (!options) return answer;

            const { transform } = this.answerRenderOptions;
            let value;
            if (transform) {
                return (answer * (transform.multiply || 1))
            }

            return answer

        }

    }

    answerRenderFunction() {
        const options = this.answerRenderOptions
        return (answer) => {
            if (!options) return `${answer}`;

            const { format, transform } = this.answerRenderOptions;
            let value;
            if (transform) {
                value = (answer * (transform.multiply || 1)).toFixed(transform.decimals || 2)
            } else {
                value = answer
            }

            return sprintf(format, { value })
        }

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
    networkId: attr()
};


export default Contract;