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

import { contracts, categories } from "../../data/contracts"
import qs from 'qs'

class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        const queryParams = qs.parse(this.props.location.category, { ignoreQueryPrefix: true });
        const matchParams = this.props.match.params;
        const category = matchParams.category || queryParams.category;
        if (!category) {
            //Display categories
            return (
                <div className="animated fadeIn">
                    <Row>
                        {categories.map(c => {
                            return (
                                <Col xs="12" sm="6" md="4">
                                    <Card>
                                        <CardHeader>{c.title}</CardHeader>
                                        <CardBody>
                                            <Button block href={`#/dashboard/${c.path}`} color="secondary">View</Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                            )
                        })}
                    </Row>
                </div>
            )
        }

        let displayContracts = contracts[category]

        return (
            <div className="animated fadeIn">
                <Row>
                    {displayContracts.map((v) => {
                        return (
                            <Col xs="12" sm="6" md="4">
                                <Card>
                                    <CardHeader>{v.title}</CardHeader>
                                    <CardBody>
                                        {v.address}<br />
                                        <Button block href={`#/dashboard/${v.path}`} color="secondary">View</Button>
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
