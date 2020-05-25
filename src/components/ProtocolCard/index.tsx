import React from 'react';
import {
    CCard as Card,
    CCardBody as CardBody,
    CRow as Row,
    CCol as Col,
    CButton as Button
} from '@coreui/react'

const ProtocolCard = ({ protocolName, protocolDescription, protocolImg, protocolFeedCount, protocolNodeCount, protocolSponsorCount }) => <Card style={{
    width: '260px',
    height: '290px',
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: '8px'
}} >
    <CardBody>
        <a href="#" className="stretched-link"></a>
        <Row>
            <Col className="py-2" sm="12">
                <div className="d-flex justify-content-center">
                    <img style={{ height: 75 }} src={protocolImg} alt='' />
                </div>
            </Col>
            <Col className="py-0" sm="12">
                <div style={{ textAlign: 'center', fontSize: 20, fontWeight: 'normal', color: '#000000' }}>{protocolName}</div>
            </Col>
            <Col className="py-0" sm="12">
                <div className="d-flex justify-content-center">
                    <p style={{ maxWidth: 160, height: 55, fontSize: 12, textAlign: 'center', marginBottom: 5 }}>{protocolDescription}</p>
                </div>
            </Col>
            <Col sm="12">
                <div className="d-flex justify-content-center">
                    <p style={{ maxWidth: 160, fontSize: 16, textAlign: 'center', color: '#000000' }}>
                        {protocolFeedCount} Feeds<br />
                        {protocolNodeCount} Nodes<br />
                        {protocolSponsorCount} Sponsors
                    </p>
                </div>
            </Col>
        </Row>
    </CardBody>
</Card>

export default ProtocolCard;