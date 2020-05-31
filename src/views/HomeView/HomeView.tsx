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
import { ProtocolTypes, FeedTypes } from '../../store/types'

interface Props {
    feeds: [FeedTypes.Feed],
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    }
}

const HomeView = ({ feeds, protocols }: Props) => {
    const [minimizeFeeds, setMinimizeFeeds] = useState(true);
    const toggleMinimizeFeeds = () => setMinimizeFeeds(!minimizeFeeds);

    const history = useHistory();
    const displayedFeeds = minimizeFeeds ? feeds.slice(0, 9) : feeds

    return (
        <Container>
            {/*
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Favorite feeds</h1>
                    </Col>
                    <Row>
                        <div className="d-flex flex-column justify-content-center" style={{ width: 0, height: '100%', position: 'relative', left: -70 }}>
                            <Button><img style={{ height: 30 }} src={ArrowLeft} alt='' /></Button>
                        </div>

                        {
                            feeds.filter(obj => obj.hearted).map(({ title: name, value, hearted, protocol }, idx) => {
                                const feedProtocol = protocols[protocol ? protocol : 'chainlink']
                                return (<Col key={idx} lg="4" md="6" xs="12">
                                    <FeedCard protocolImg={feedProtocol.img} feedName={name} value={value} hearted={hearted} />
                                </Col>)
                            })
                        }

                        <div className="d-flex flex-column justify-content-center" style={{ width: 0, height: '100%', position: 'relative', right: 0 }}>
                            <Button><img style={{ height: 30 }} src={ArrowRight} alt='' /></Button>
                        </div>

                    </Row>
                </Row>
                */}
            <Row>
                <Col xs={12}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939', height: 95 }}>Protocols</h1>
                </Col>
                {
                    Object.values(protocols).map(({ description, name, img, feedCount, nodeCount, sponsorCount }, idx) =>
                        <Col key={idx} lg="3" md="6" xs="12">
                            <ProtocolCard href={`#/protocols/${name.toLowerCase()}`} name={name} description={description} img={img} feedCount={feedCount} nodeCount={nodeCount} sponsorCount={sponsorCount} />
                        </Col>)
                }
            </Row>
            <Row>
                <Col xs={12}>
                    <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Feeds</h1>
                </Col>
                {
                    displayedFeeds.map(({ title: name, value, hearted, ens, protocol, nodeCount, lastUpdate, address }, idx) => {
                        const feedProtocol = protocols[protocol ? protocol : 'chainlink']
                        return (<Col key={idx} lg="4" md="6" xs="12">
                            <FeedCardDetailed handleClickViewButton={() => history.push(`/feeds/${address}`)} address={address} protocolImg={feedProtocol?.img} feedName={name} value={value} hearted={hearted} feedENS={ens} nodeCount={nodeCount} lastUpdate={lastUpdate} />
                        </Col>)
                    })
                }
                <Col xs={12}>
                    <div className="d-flex justify-content-center">
                        <Button onClick={toggleMinimizeFeeds} style={{ fontSize: 20, fontWeight: 'medium', color: '#002C69' }}>{minimizeFeeds ? <>View All</> : <>Hide</>}</Button>
                    </div>
                </Col>
            </Row>
        </Container >
    )
}

export default HomeView;