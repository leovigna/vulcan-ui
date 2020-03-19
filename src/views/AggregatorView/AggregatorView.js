/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component } from 'react';
import {
    Col,
    Row,
} from 'reactstrap';
//Drizzle
import Aggregator from "../../components/Aggregator/Aggregator"

class AggregatorView extends Component {
    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        const parent = this;
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Aggregator contract="AggregatorUSDBTC" />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AggregatorView;
