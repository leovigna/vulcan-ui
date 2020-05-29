import React, { useState } from 'react';
import {
    CRow as Row,
    CCol as Col,
    CContainer as Container,
    CButton as Button
} from '@coreui/react'
import {
    useHistory
} from "react-router-dom";

import ProtocolCard from '../../components/ProtocolCard'
import FeedCardDetailed from '../../components/FeedCardDetailed'
import FeedCard from '../../components/FeedCard'

import ArrowLeft from '../../assets/img/icons/arrow_left.svg'
import ArrowRight from '../../assets/img/icons/arrow_right.svg'

export interface Protocol {
    name: string,
    img: string,
    description: string
    feedCount: number,
    nodeCount: number,
    sponsorCount: number
}

export interface Feed {
    address: string,
    title: string,
    protocol: string,
    ens: string,
    value: string,
    hearted: boolean,
    nodeCount: number,
    lastUpdate: string
}
interface Props {
    feeds: [Feed],
    protocols: {
        [key: string]: Protocol
    }
}

const ProtocolView = ({ feeds, protocols }: Props) => {
    const [minimizeFeeds, setMinimizeFeeds] = useState(true);
    const toggleMinimizeFeeds = () => setMinimizeFeeds(!minimizeFeeds);

    return (
        <Container>
            <Row className='py-5'>
                <Col xs={12}>
                    <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Name</h4>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Chainlink</h1>
                </Col>
                <Col xs={4}>
                    <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Feeds</h4>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>20</h1>
                </Col>
                <Col xs={4}>
                    <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Nodes</h4>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>20</h1>
                </Col>
            </Row>
            <Row className='py-4'>
                <Col xs={12}>
                    <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Description</h4>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Chainlink</h1>
                </Col>
            </Row>
        </Container>
    )
}

export default ProtocolView;