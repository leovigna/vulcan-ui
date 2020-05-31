import React, { useState } from 'react';
import {
    CRow as Row,
    CCol as Col,
    CContainer as Container,
    CButton as Button
} from '@coreui/react'
import { ProtocolTypes } from '../../store/types'
import { node } from 'prop-types';

interface Props extends ProtocolTypes.Protocol {
}

const ProtocolView = ({ name, img, descriptionLong, feedCount, nodeCount }: Props) => {
    const [minimizeFeeds, setMinimizeFeeds] = useState(true);
    const toggleMinimizeFeeds = () => setMinimizeFeeds(!minimizeFeeds);
    return (<Container>
        <Row className='py-0'>
            <Col className="py-2" sm="12">
                <div className="d-flex justify-content-left">
                    <img style={{ height: 200 }} src={img} alt='' />
                </div>
            </Col>
            <Col xs={12}>
                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Name</h4>
                <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>{name}</h1>
            </Col>
            <Col xs={4}>
                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Feeds</h4>
                <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>{feedCount}</h1>
            </Col>
            <Col xs={4}>
                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Nodes</h4>
                <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>{nodeCount}</h1>
            </Col>
        </Row>
        <Row className='py-4'>
            <Col xs={12}>
                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Description</h4>
                <p style={{ color: '#393939' }}>{descriptionLong}</p>
            </Col>
        </Row>
        <Row className='py-4'>
            <Col xs={12}>
                <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Feeds</h4>
                <p style={{ color: '#393939' }}></p>
            </Col>
        </Row>
    </Container>
    )
}

ProtocolView.defaultProps = {
    feedCount: 0,
    nodeCount: 0
}

export default ProtocolView;