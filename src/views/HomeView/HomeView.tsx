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

import ProtocolCard from '../../components/ProtocolCard'
import FeedCardDetailed from '../../components/FeedCardDetailed'
import FeedCard from '../../components/FeedCard'

import ArrowLeft from '../../assets/img/icons/arrow_left.svg'
import ArrowRight from '../../assets/img/icons/arrow_right.svg'

import { placeholderText, protocols, feeds } from '../../stories/data';


const HomeView = () => {

    return (
        <Container>
            <Row>
                <Col xs={12}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Favorite feeds</h1>
                </Col>
                <Row>
                    <div className="d-flex flex-column justify-content-center" style={{ width: 0, height: '100%', position: 'relative', left: -70 }}>
                        <Button><img style={{ height: 30 }} src={ArrowLeft} alt='' /></Button>
                    </div>

                    {
                        Object.values(feeds).filter(obj => obj.hearted).map(({ name, value, hearted, ens, protocol }, idx) => {
                            const feedProtocol = protocols[protocol]
                            return (<Col key={idx} lg="4" md="6" xs="12">
                                <FeedCard protocolImg={feedProtocol.img} feedName={name} value={value} hearted={hearted} feedENS={ens} nodeCount='6' lastUpdate='Jan 1, 1972 00:00 AM' />
                            </Col>)
                        })
                    }

                    <div className="d-flex flex-column justify-content-center" style={{ width: 0, height: '100%', position: 'relative', right: 0 }}>
                        <Button><img style={{ height: 30 }} src={ArrowRight} alt='' /></Button>
                    </div>

                </Row>
            </Row>
            <Row>
                <Col xs={12}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Feeds</h1>
                </Col>
                {
                    Object.values(feeds).map(({ name, value, hearted, ens, protocol }, idx) => {
                        const feedProtocol = protocols[protocol]
                        return (<Col key={idx} lg="4" md="6" xs="12">
                            <FeedCardDetailed protocolImg={feedProtocol.img} feedName={name} value={value} hearted={hearted} feedENS={ens} nodeCount='6' lastUpdate='Jan 1, 1972 00:00 AM' />
                        </Col>)
                    })
                }
            </Row>
            <Row>
                <Col xs={12}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939', height: 95 }}>Providers</h1>
                </Col>
                {
                    Object.values(protocols).map(({ description, name, img }, idx) =>
                        <Col key={idx} lg="3" md="6" xs="12">
                            <ProtocolCard protocolName={name} protocolDescription={description} protocolImg={img} protocolFeedCount={6} protocolNodeCount={6} protocolSponsorCount={6} />
                        </Col>)
                }
            </Row>
        </Container>
    )
}

export default HomeView;