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
/*
import {
    CCol as Col,
    CRow as Row,
    CCard as Card,
    CCardBody as CardBody,
    CCardHeader as CardHeader,
    CButton as Button
} from '@coreui/react';
*/

//USe Redux Data
import { connect } from "react-redux"
import { contractsSelector } from '../../store/selectors'


class Protocols extends Component {
    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        const { protocols } = this.props;

        return (
            <div className="animated fadeIn">
                <Row>
                    {protocols.map(c => {
                        return (
                            <Col xs="12" sm="6" md="4">
                                <Card>
                                    <CardHeader>{c.title}</CardHeader>
                                    <CardBody>
                                        <Button block href={`${c.path}`} color="secondary">View</Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        protocols: []
    }
}

export default connect(mapStateToProps)(Protocols);