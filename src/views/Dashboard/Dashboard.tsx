/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component } from 'react';
import {
    CCol as Col,
    CRow as Row,
    CCard as Card,
    CCardBody as CardBody,
    CCardHeader as CardHeader,
    CButton as Button
} from '@coreui/react';

//USe Redux Data
import qs from 'qs'
import { connect } from "react-redux"
import { contractsSelector } from '../../store/selectors'


class Dashboard extends Component {
    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        const { contracts, categories } = this.props;

        const queryParams = qs.parse(this.props.location.category, { ignoreQueryPrefix: true });
        const matchParams = this.props.match.params;
        const category = matchParams.category || queryParams.category;
        if (!category) {
            //Display categories
            return (
                <div className="animated fadeIn">
                    <Row>
                        {Object.values(categories).map(c => {
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

        let displayContracts = contracts.filter((c) => c.path.split("/")[0] == category);
        return (
            <div className="animated fadeIn">
                <Row>
                    {displayContracts.map((c) => {
                        return (
                            <Col xs="12" sm="6" md="4">
                                <Card>
                                    <CardHeader>{c.title}</CardHeader>
                                    <CardBody>
                                        {c.address}<br />
                                        <Button block href={`#/dashboard/${c.path}`} color="secondary">View</Button>
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

function mapStateToProps(state) {
    return {
        categories,
        contracts: contractsSelector(state)
    }
}

export default connect(mapStateToProps)(Dashboard);