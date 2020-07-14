import React, { useState } from 'react';
import {
    CRow as Row,
    CCol as Col,
    CContainer as Container,
    CButton as Button
} from '@coreui/react'

import ProtocolCard from '../../components/ProtocolCard'
import FeedCardDetailedGrid from '../../components/FeedCardDetailed/FeedCardDetailedGrid'
import { Feed } from '../../store/feed/types';
import { Protocol } from '../../store/protocol/types';

interface Props {
    feeds: Feed[],
    favoriteFeeds: Feed[]
    protocols: Protocol[]
    setContractFavorite: any
}

const HomeView = ({ feeds, favoriteFeeds, protocols, setContractFavorite }: Props) => {
    const [minimizeFeeds, setMinimizeFeeds] = useState(true);
    const [minimizeFavoriteFeeds, setMinimizeFavoriteFeeds] = useState(true);

    const toggleMinimizeFeeds = () => setMinimizeFeeds(!minimizeFeeds);
    const toggleMinimizeFavoriteFeeds = () => setMinimizeFavoriteFeeds(!minimizeFavoriteFeeds);

    const feedsMinimizeCount = 9;
    const favoriteFeedsMinimizeCount = 3
    const displayedFeeds = minimizeFeeds ? feeds.slice(0, feedsMinimizeCount) : feeds
    const displayedFavoriteFeeds = minimizeFavoriteFeeds ? favoriteFeeds.slice(0, favoriteFeedsMinimizeCount) : favoriteFeeds

    return (
        <div style={{ marginTop: -200, paddingTop: 100, paddingBottom: 50, marginRight: -15, marginLeft: -15 }}>

            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939', height: 95 }}>Protocols</h1>
                    </Col>
                    {
                        protocols.map(({ description, active, id, name, img, feedCount, nodeCount, sponsorCount }, idx) =>
                            <Col key={idx} lg="3" md="6" xs="12">
                                <ProtocolCard href={`#/protocols/${id}`} active={active} name={name} description={description} img={img} feedCount={feedCount} nodeCount={nodeCount} sponsorCount={sponsorCount} />
                            </Col>)
                    }
                </Row>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Favorite Feeds</h1>
                    </Col>
                    <FeedCardDetailedGrid setContractFavorite={setContractFavorite} feeds={displayedFavoriteFeeds} />
                    {favoriteFeeds.length > favoriteFeedsMinimizeCount ?
                        <Col xs={12}>
                            <div className="d-flex justify-content-center">
                                <Button onClick={toggleMinimizeFavoriteFeeds} style={{ fontSize: 20, fontWeight: 'medium', color: '#002C69' }}>{minimizeFavoriteFeeds ? <>View All ({favoriteFeeds.length - favoriteFeedsMinimizeCount} more)</> : <>Hide</>}</Button>
                            </div>
                        </Col>
                        : ''
                    }
                </Row>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Feeds</h1>
                    </Col>
                    <FeedCardDetailedGrid setContractFavorite={setContractFavorite} feeds={displayedFeeds} />
                    {feeds.length > feedsMinimizeCount ?
                        <Col xs={12}>
                            <div className="d-flex justify-content-center">
                                <Button onClick={toggleMinimizeFeeds} style={{ fontSize: 20, fontWeight: 'medium', color: '#002C69' }}>{minimizeFeeds ? <>View All ({feeds.length - feedsMinimizeCount} more)</> : <>Hide</>}</Button>
                            </div>
                        </Col>
                        : ''}
                </Row>
            </Container >
        </div>
    )
}

HomeView.defaultProps = {
    feeds: [],
    favoriteFeeds: [],
    protocols: []
}

export default HomeView;