import React from 'react';
import {
    CRow as Row,
    CCol as Col,
    CContainer as Container,
} from '@coreui/react'

import FeedTable from '../../components/FeedTable'
import FeedChart, { Point } from '../../components/FeedChart'
import { FeedBase, ChainlinkAnswer } from '../../store/feed/types';
interface Props extends FeedBase {
    address: string,
    answer: string,
    chartData: Point[],
    responses: ChainlinkAnswer[]
    minResponses: number,
    maxResponses: number,
    lastUpdate: Date,
    deviationThreshold: number
}

const FeedView = ({ title, address, answer, responses, chartData, minResponses, maxResponses, lastUpdate, deviationThreshold }: Props) => {
    return (
        <>
            <div style={{ backgroundColor: '#F2F2F2', marginTop: -200, paddingTop: 100, paddingBottom: 50, marginRight: -15, marginLeft: -15 }}>
                <Container>
                    <Row className='py-5'>
                        <Col xs={12}>
                            <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>{address}</h4>
                            <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>{title}</h1>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={6}>
                            <div className='py-4'>
                                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Latest trusted answer</h4>
                                <h1 style={{ fontSize: 30, fontWeight: 'bold', color: '#000000' }}>{answer}</h1>
                            </div>
                            {deviationThreshold > 0 ? <>
                                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Primary Aggregation Parameter</h4>
                                <h1 style={{ fontSize: 30, fontWeight: 'bold', color: '#000000', height: 95 }}>Deviation Threshold: {deviationThreshold}%</h1>
                            </>
                                : ''}
                        </Col>
                        <Col xs={6}>
                            {
                                responses.length > 0 ?
                                    <div className='py-4'>
                                        <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Oracle responses {minResponses >= 0 ? <>(minimum {minResponses})</> : ''}</h4>
                                        <h1 style={{ fontSize: 30, fontWeight: 'bold', color: '#000000' }}>{responses.length}{minResponses >= 0 ? <>/{maxResponses}</> : ''}</h1 >
                                    </div>
                                    : ''
                            }
                            <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Last Update</h4>
                            <h1 style={{ fontSize: 30, fontWeight: 'bold', color: '#000000', height: 95 }}>{lastUpdate}</h1>
                        </Col>
                    </Row >
                    {
                        chartData.length > 0 ?
                            <Row className='py-5'>
                                <FeedChart data={chartData} />
                            </Row> :
                            ''
                    }
                </Container >
            </div>
            {
                responses.length > 0 ?
                    <div style={{ backgroundColor: '#FFF', paddingTop: 50, paddingBottom: 100, marginRight: -15, marginLeft: -15 }}>
                        <Container>
                            <Row>
                                <FeedTable responses={responses} />
                            </Row>
                        </Container >
                    </div>
                    : <div style={{ backgroundColor: '#F2F2F2', paddingTop: 50, paddingBottom: 100, marginRight: -15, marginLeft: -15 }} />
            }
        </>
    )
}

FeedView.defaultProps = {
    maxResponses: -1,
    minResponses: -1,
    responses: [],
    chartData: [],
    lastUpdate: '',
    deviationThreshold: -1
}

export default FeedView;