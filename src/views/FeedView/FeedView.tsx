import React from 'react';
import {
    CCard as Card,
    CCardHeader as CardHeader,
    CCardBody as CardBody,
    CRow as Row,
    CCol as Col,
    CContainer as Container,
    CBadge as Badge,
    CButton as Button
} from '@coreui/react'

import FeedTable from '../../components/FeedTable'
import FeedChart from '../../components/FeedChart'

import { placeholderText, protocols, feeds } from '../../stories/data';


const FeedView = () => {
    const responses = feeds.btcusd.responses
    const data = [{
        'x': 1590449000000,
        'y': 0
    }, {
        'x': 1590450000000,
        'y': 1
    }, {
        'x': 1590451000000,
        'y': 3
    }, {
        'x': 1590452000000,
        'y': 1
    }, {
        'x': 1590460000000,
        'y': 0
    }]

    return (
        <>
            <div style={{ backgroundColor: '#F2F2F2', marginTop: -200, paddingTop: 100, paddingBottom: 50, marginRight: -15, marginLeft: -15 }}>
                <Container>
                    <Row className='py-5'>
                        <Col xs={12}>
                            <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>0x0000000000</h4>
                            <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>BTC / ETH Aggregator</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <div className='py-4'>
                                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Latest trusted answer</h4>
                                <h1 style={{ fontSize: 30, fontWeight: 'bold', color: '#000000' }}>Ξ 0.01918345</h1>
                            </div>
                            <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Primary Aggregation Parameter</h4>
                            <h1 style={{ fontSize: 30, fontWeight: 'bold', color: '#000000', height: 95 }}>Deviation Threshold: 1%</h1>
                        </Col>
                        <Col xs={6}>
                            <div className='py-4'>
                                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Oracle responses (minimum 5)</h4>
                                <h1 style={{ fontSize: 30, fontWeight: 'bold', color: '#000000' }}>9/9</h1>
                            </div>
                            <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Last Update</h4>
                            <h1 style={{ fontSize: 30, fontWeight: 'bold', color: '#000000', height: 95 }}>7:42 AM</h1>
                        </Col>
                    </Row >
                    <Row className='py-5'>
                        <FeedChart data={data} />
                    </Row>
                </Container >
            </div>
            <div style={{ backgroundColor: '#FFF', paddingTop: 50, paddingBottom: 100, marginRight: -15, marginLeft: -15 }}>
                <Container>
                    <Row>
                        <FeedTable responses={responses} />
                    </Row>
                </Container >
            </div>
        </>
    )
}

export default FeedView;