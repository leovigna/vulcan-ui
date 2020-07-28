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
import { connect } from "react-redux"
import { Protocol } from '../../store/protocol/types';
import { protocolsByFilterSelector } from '../../store/protocol/selectors';

interface Props {
    protocols: Protocol[]
}

class Protocols extends Component<Props> {
    constructor(props: Props) {
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
                                    <CardHeader>{c.name}</CardHeader>
                                    <CardBody>
                                        <Button block href={`/protocols/${c.id}`} color="secondary">View</Button>
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

function mapStateToProps(state: any) {
    return {
        protocols: protocolsByFilterSelector(state, {}, state)
    }
}

export default connect(mapStateToProps)(Protocols);