import React from 'react';
import {
    CContainer as Container,
    CCard as Card,
    CCardBody as CardBody,
    CRow as Row,
    CCol as Col,
    CButton as Button
} from '@coreui/react'

import HeartFilled from '../../assets/img/icons/heart_filled.svg'
import HeartEmpty from '../../assets/img/icons/heart_empty.svg'

interface Props {
    address: string,
    protocolImg: string,
    feedName: string,
    hearted: boolean,
    onHeartClick: any,
    value: string,
    feedENS?: string,
    lastUpdate?: string,
    nodeCount?: number
    handleClickViewButton: any
}

const FeedCardDetailed = ({ handleClickViewButton, protocolImg, feedName, hearted, onHeartClick, value, feedENS, lastUpdate, nodeCount, address }: Props) => <Card style={{
    maxWidth: '300px',
    height: '270px',
    boxShadow: "1px 1px 5px rgba(0, 0, 0, 0.5)",
    borderRadius: '8px'
}} >
    <CardBody className="px-0">
        <Container>
            <Row>
                <div className="d-flex justify-content-center" style={{ width: '100%' }}>
                    <img style={{ width: 37, objectFit: 'contain' }} src={protocolImg} alt=''></img>
                    <div className="d-flex justify-content-center flex-column">
                        <span style={{ width: 155, textAlign: 'center', lineHeight: '18px', fontSize: 16, fontWeight: 'bold' }}>{feedName}</span>
                    </div>
                    <Button onClick={onHeartClick} style={{ padding: 0 }}><img style={{ width: 31, objectFit: 'contain' }} src={hearted ? HeartFilled : HeartEmpty} alt=''></img></Button>
                </div>
            </Row>
            <Row>
                <Col className="py-2" sm="12"></Col>
            </Row>
            <Row>
                <Col sm="12">
                    <p style={{ fontSize: 23, fontStyle: 'italic', fontWeight: 'bold', color: '#4F4F4F', textAlign: 'center' }}>{value || "loading..."}</p>
                </Col>
                <Col sm="12">
                    <p style={{ color: '#002C69', fontSize: 16, textAlign: 'center' }}>{lastUpdate}</p>
                </Col>
                <Col sm="12">
                    {
                        feedENS ? <div className="d-flex justify-content-center">
                            <b style={{ color: '#002C69', fontSize: 16 }}>ENS:&nbsp;</b><a style={{ color: '#002C69', fontSize: 16 }} href='https://etherscan.com'>{feedENS}</a>
                        </div> : ''
                    }

                </Col>
            </Row>
            <Row>
                <Col sm="6">
                    {
                        nodeCount ? <div style={{ color: '#002C69', fontSize: 16, textAlign: 'center' }}>{nodeCount} Nodes</div> : ''
                    }
                </Col>
                <Col sm="12" className="d-flex justify-content-center">
                    <Button onClick={handleClickViewButton} style={{
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
                <Col sm="12" className="d-flex py-2 justify-content-center">
                    {
                        address ? <a style={{ color: '#828282', fontStyle: 'italic' }} href={`https://etherscan.com/address/${address}`} target="_blank">Etherscan Contract</a> : ''
                    }
                </Col>
            </Row>
        </Container>
    </CardBody>
</Card>

export default FeedCardDetailed;