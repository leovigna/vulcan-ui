import React, { useState } from 'react';
import {
    CRow as Row,
    CCol as Col,
    CContainer as Container,
    CButton as Button
} from '@coreui/react'

import ProtocolCard from '../../components/ProtocolCard'
import { FeedCardDetailedGrid } from '../../components/FeedCardDetailed'
import FeedCard from '../../components/FeedCard'

import ArrowLeft from '../../assets/img/icons/arrow_left.svg'
import ArrowRight from '../../assets/img/icons/arrow_right.svg'
import { ProtocolTypes, FeedTypes } from '../../store/types'

interface Props {
    feeds: [FeedTypes.Feed],
    favoriteFeeds: [FeedTypes.Feed],
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    }
}

const HomeView = ({ feeds, favoriteFeeds, protocols }: Props) => {
    const [minimizeFeeds, setMinimizeFeeds] = useState(true);
    const [minimizeFavoriteFeeds, setMinimizeFavoriteFeeds] = useState(true);

    const toggleMinimizeFeeds = () => setMinimizeFeeds(!minimizeFeeds);
    const toggleMinimizeFavoriteFeeds = () => setMinimizeFavoriteFeeds(!minimizeFavoriteFeeds);

    const displayedFeeds = minimizeFeeds ? feeds.slice(0, 9) : feeds
    const displayedFavoriteFeeds = minimizeFavoriteFeeds ? favoriteFeeds.slice(0, 3) : favoriteFeeds

    return (
        <div style={{ marginTop: -200, paddingTop: 100, paddingBottom: 50, marginRight: -15, marginLeft: -15 }}>

            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939', height: 95 }}>Protocols</h1>
                    </Col>
                    {
                        Object.values(protocols).map(({ description, active, name, img, feedCount, nodeCount, sponsorCount }, idx) =>
                            <Col key={idx} lg="3" md="6" xs="12">
                                <ProtocolCard href={`#/protocols/${name.toLowerCase()}`} hearted={false} active={active} name={name} description={description} img={img} feedCount={feedCount} nodeCount={nodeCount} sponsorCount={sponsorCount} />
                            </Col>)
                    }
                </Row>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Favorite Feeds</h1>
                    </Col>
                    <FeedCardDetailedGrid feeds={displayedFavoriteFeeds} protocols={protocols} />
                    <Col xs={12}>
                        <div className="d-flex justify-content-center">
                            <Button onClick={toggleMinimizeFavoriteFeeds} style={{ fontSize: 20, fontWeight: 'medium', color: '#002C69' }}>{minimizeFavoriteFeeds ? <>View All</> : <>Hide</>}</Button>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Feeds</h1>
                    </Col>
                    <FeedCardDetailedGrid feeds={displayedFeeds} protocols={protocols} />
                    <Col xs={12}>
                        <div className="d-flex justify-content-center">
                            <Button onClick={toggleMinimizeFeeds} style={{ fontSize: 20, fontWeight: 'medium', color: '#002C69' }}>{minimizeFeeds ? <>View All</> : <>Hide</>}</Button>
                        </div>
                    </Col>
                </Row>
            </Container >
        </div>
    )
}

HomeView.defaultProps = {
    feeds: [],
    favoriteFeeds: [],
    protocols: {}
}

export default HomeView;