import React from 'react';
import {
    CContainer as Container,
    CCard as Card,
    CCardBody as CardBody,
    CRow as Row,
    CCol as Col,
    CButton as Button
} from '@coreui/react'

import externalLink from "../../assets/img/icons/external_link.svg"

import HeartFilled from '../../assets/img/icons/heart_filled.svg'
import HeartEmpty from '../../assets/img/icons/heart_empty.svg'

const FeedCardDetailed = ({ protocolImg, feedName, hearted, value, feedENS, lastUpdate, nodeCount }) => <Card style={{
    maxWidth: '350px',
    height: '320px',
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: '8px'
}} >
    <CardBody>
        <Container>
            <Row>
                <div className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <img style={{ width: 37, objectFit: 'contain' }} src={protocolImg} alt=''></img>
                    <div style={{ width: 155, textAlign: 'center', fontSize: 27, fontWeight: 'bold' }}>{feedName}</div>
                    <Button style={{ padding: 0 }}><img style={{ width: 31, objectFit: 'contain' }} src={hearted ? HeartFilled : HeartEmpty} alt=''></img></Button>
                </div>
            </Row>
            <Row>
                <Col className="py-2" sm="12"></Col>
            </Row>
            <Row>
                <Col sm="12">
                    <p style={{ fontSize: 23, fontStyle: 'italic', fontWeight: 'bold', color: '#4F4F4F', textAlign: 'center' }}>{value}</p>
                </Col>
                <Col sm="12">
                    <p style={{ color: '#002C69', fontSize: 16, textAlign: 'center' }}>{lastUpdate}</p>
                </Col>
                <Col sm="12">
                    <div className="d-flex justify-content-center">
                        <b style={{ color: '#002C69', fontSize: 16 }}>ENS:&nbsp;</b><a style={{ color: '#002C69', fontSize: 16 }} href='https://etherscan.com'>{feedENS}</a>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    <div style={{ color: '#002C69', fontSize: 16, textAlign: 'center' }}>{nodeCount} Nodes</div>
                </Col>
                <Col sm="6">
                    <a style={{ color: '#828282', fontStyle: 'italic' }} href='https://etherscan.com' target="blank">Etherscan</a>
                </Col>
                <Col className="py-3" sm="12"></Col>
            </Row>
            <Row>
                <Col sm="12" className="d-flex justify-content-center">
                    <Button style={{
                        width: 160,
                        height: 48,
                        background: "#FA4706",
                        border: "1px solid #C53400",
                        boxSizing: "border-box",
                        borderRadius: "8px",
                        fontFamily: "Poppins",
                        fontStyle: "normal",
                        fontWeight: "500",
                        fontSize: "20px",
                        textAlign: "center",
                        color: '#FFFFFF'
                    }}>
                        View
                            </Button>
                </Col>
            </Row>
        </Container>
    </CardBody>
</Card>

export default FeedCardDetailed;