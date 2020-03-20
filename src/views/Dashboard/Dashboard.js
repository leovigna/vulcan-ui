/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component } from 'react';
import {
    Col,
    Row,
    Card,
    CardBody,
    CardHeader,
    Button
} from 'reactstrap';

import { contracts, contractAliases } from "../../data/contracts"

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        const parent = this;
        return (
            <div className="animated fadeIn">
                <Row>
                    {Object.entries(contracts).map(([k, v]) => {
                        return (
                            <Col xs="12" sm="6" md="4">
                                <Card>
                                    <CardHeader>{k} Aggregation</CardHeader>
                                    <CardBody>
                                        {v.address}<br />{v.count} oracles
                                        <Button block href={`#/aggregator/${v.address}`} color="secondary">View</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        );
    }
}

export default Dashboard;
