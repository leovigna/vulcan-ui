import React from 'react';
import {
    CCard as Card,
    CCardBody as CardBody,
    CRow as Row,
    CCol as Col,
    CButton as Button
} from '@coreui/react'

import HeartFilled from '../../assets/img/icons/heart_filled.svg'
import HeartEmpty from '../../assets/img/icons/heart_empty.svg'

interface Props {
    protocolImg: string,
    feedName: string,
    hearted: boolean,
    value: string,
}

const FeedCard = ({ protocolImg, feedName, hearted, value }: Props) => <Card style={{
    width: '350px',
    height: '220px',
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: '8px'
}} >
    <CardBody>
        <Row>
            <div className="d-flex justify-content-center" style={{ marginLeft: 56, marginRight: 56 }}>
                <img style={{ width: 37, objectFit: 'contain' }} src={protocolImg} alt=''></img>
                <div style={{ width: 155, textAlign: 'center', fontSize: 27, fontWeight: 'bold' }}>{feedName}</div>
                <Button><img style={{ width: 31, objectFit: 'contain' }} src={hearted ? HeartFilled : HeartEmpty} alt=''></img></Button>
            </div>
        </Row>
        <Row>
            <Col className="py-2" sm="12">

            </Col>
        </Row>
        <Row>
            <Col sm="12">
                <p style={{ fontSize: 23, fontStyle: 'italic', fontWeight: 'bold', color: '#4F4F4F', textAlign: 'center' }}>{value}</p>
            </Col>
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
    </CardBody>
</Card>

export default FeedCard;