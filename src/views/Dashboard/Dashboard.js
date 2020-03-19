/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
    Badge,
    Button,
    ButtonDropdown,
    ButtonGroup,
    ButtonToolbar,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    CardTitle,
    Col,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Progress,
    Row,
    Table,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';

//Drizzle
import { newContextComponents } from "@drizzle/react-components"
import { DrizzleContext } from "@drizzle/react-plugin"

const { ContractData } = newContextComponents


class Dashboard extends Component {
    static contextType = DrizzleContext.Context;
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

        this.state = {
            dropdownOpen: false,
            radioSelected: 2,
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    }

    onRadioBtnClick(radioSelected) {
        this.setState({
            radioSelected: radioSelected,
        });
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <DrizzleContext.Consumer>
                            {function ({ drizzle, drizzleState, initialized }) {
                                return (
                                    <Card>
                                        <CardHeader>Aggregate data</CardHeader>
                                        <CardBody>
                                            <ListGroup>Min Responses
                                            {
                                                        initialized ? <ContractData
                                                            drizzle={drizzle}
                                                            drizzleState={drizzleState}
                                                            contract="AggregatorUSDBTC"
                                                            method="minimumResponses"
                                                            render={(value) => value}
                                                        /> : "Loading..."
                                                    }
                                                <ListGroupItem>BTC / USD aggregation</ListGroupItem>
                                                <ListGroupItem>$
                                                {
                                                        initialized ? <ContractData
                                                            drizzle={drizzle}
                                                            drizzleState={drizzleState}
                                                            contract="AggregatorUSDBTC"
                                                            method="latestAnswer"
                                                            render={(value) => value * 1e-8}
                                                        /> : "Loading..."
                                                    }
                                                </ListGroupItem>
                                                <ListGroupItem>1%</ListGroupItem>
                                                <ListGroupItem>Next in 57:33</ListGroupItem>
                                                <ListGroupItem>21/
        
                                                </ListGroupItem>
                                                <ListGroupItem>Last update
                                                {
                                                        initialized ? <ContractData
                                                            drizzle={drizzle}
                                                            drizzleState={drizzleState}
                                                            contract="AggregatorUSDBTC"
                                                            method="latestTimestamp"
                                                            render={(value) => value}
                                                        /> : "Loading..."
                                                    }
                                                </ListGroupItem>
                                                <ListGroupItem>Lastest Round ID
                                                {
                                                        initialized ? <ContractData
                                                            drizzle={drizzle}
                                                            drizzleState={drizzleState}
                                                            contract="AggregatorUSDBTC"
                                                            method="latestRound"
                                                            render={(value) => value}
                                                        /> : "Loading..."
                                                    }
                                                </ListGroupItem>
                                            </ListGroup>
                                        </CardBody>
                                    </Card>)
                            }
                            }
                        </DrizzleContext.Consumer>
                        <Card>
                            <CardHeader>Oracles data</CardHeader>
                            <CardBody>
                                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                                    <thead className="thead-light">
                                        <tr>
                                            <th>Oracle</th>
                                            <th>Answer</th>
                                            <th>Gas Price (Gwei)</th>
                                            <th>Date</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div>Vulcan Data</div>
                                            </td>
                                            <td>
                                                <div>1000.01</div>
                                            </td>
                                            <td>
                                                <div>10.0</div>
                                            </td>
                                            <td>
                                                <div>Thu 2:01 AM</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Dashboard;
