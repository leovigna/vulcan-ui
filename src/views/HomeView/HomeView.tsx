import React, { useState, useEffect } from 'react';
import { CRow as Row, CCol as Col, CContainer as Container, CButton as Button } from '@coreui/react';
import { compose } from 'recompose'
import { withNetworkId, withFeeds, withProtocols, withDrizzleContext, withFavoriteFeeds, withSetContractFavorite, withSetCacheKey, withCurrentBlock, withRefreshFeedList } from '../../hoc'

import ProtocolCard from '../../components/ProtocolCard';
import FeedCardDetailedGrid from '../../components/FeedCardDetailed/FeedCardDetailedGrid';
import { Feed, RefreshFeedListActionInput, RefreshFeedListAction } from '../../store/feed/types';
import { Protocol } from '../../store/protocol/types';
import FeedCardDetailedTable from '../../components/FeedCardDetailed/FeedCardDetailedTable';
import { SetContractFavoriteActionInput, SetContractFavoriteAction } from '../../store/contractFavorite/types';
import { Block } from '../../store/block/types';

interface Props {
    feeds: Feed[];
    favoriteFeeds: Feed[];
    protocols: Protocol[];
    currentBlock: Block;
    setContractFavorite: (payload: SetContractFavoriteActionInput) => SetContractFavoriteAction;
    refreshFeedList: (payload: RefreshFeedListActionInput) => RefreshFeedListAction,
    drizzleContext: any
}

const HomeView = ({ feeds, favoriteFeeds, protocols, currentBlock, setContractFavorite, refreshFeedList, drizzleContext }: Props) => {
    const [minimizeFavoriteFeeds, setMinimizeFavoriteFeeds] = useState(true);
    const toggleMinimizeFavoriteFeeds = () => setMinimizeFavoriteFeeds(!minimizeFavoriteFeeds);

    const { drizzle, initialized } = drizzleContext;
    useEffect(() => {
        const timer = setTimeout(() => {
            if (initialized && !!feeds) {
                refreshFeedList({
                    feeds,
                    drizzle,
                    currentBlock
                })
            }
        }, 100);
        return () => clearTimeout(timer);
    })

    const favoriteFeedsMinimizeCount = 3;
    const displayedFavoriteFeeds = minimizeFavoriteFeeds
        ? favoriteFeeds.slice(0, favoriteFeedsMinimizeCount)
        : favoriteFeeds;

    return (
        <div style={{ marginTop: -200, paddingTop: 100, paddingBottom: 50, marginRight: -15, marginLeft: -15 }}>
            <Container>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939', height: 95 }}>Protocols</h1>
                    </Col>
                    {protocols.map(
                        ({ description, active, id, name, img, feedCount, nodeCount, sponsorCount }, idx) => (
                            <Col key={idx} lg="3" md="6" xs="12">
                                <ProtocolCard
                                    href={`#/protocols/${id}`}
                                    active={active}
                                    name={name}
                                    description={description}
                                    img={img}
                                    feedCount={feedCount}
                                    nodeCount={nodeCount}
                                    sponsorCount={sponsorCount}
                                />
                            </Col>
                        ),
                    )}
                </Row>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Favorite Feeds</h1>
                    </Col>
                    <FeedCardDetailedGrid setContractFavorite={setContractFavorite} feeds={displayedFavoriteFeeds} />
                    {favoriteFeeds.length > favoriteFeedsMinimizeCount ? (
                        <Col xs={12}>
                            <div className="d-flex justify-content-center">
                                <Button
                                    onClick={toggleMinimizeFavoriteFeeds}
                                    style={{ fontSize: 20, fontWeight: 'medium', color: '#002C69' }}
                                >
                                    {minimizeFavoriteFeeds ? (
                                        <>View All ({favoriteFeeds.length - favoriteFeedsMinimizeCount} more)</>
                                    ) : (
                                            <>Hide</>
                                        )}
                                </Button>
                            </div>
                        </Col>
                    ) : (
                            ''
                        )}
                </Row>
                <Row>
                    <Col xs={12}>
                        <h1 style={{ fontSize: 40, fontWeight: 'bold', color: '#393939' }}>Feeds</h1>
                    </Col>
                    <Col xs="12">
                        <FeedCardDetailedTable setContractFavorite={setContractFavorite} feeds={feeds} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

HomeView.defaultProps = {
    feeds: [],
    favoriteFeeds: [],
    protocols: [],
};


export default compose(
    withSetContractFavorite,
    withSetCacheKey,
    withRefreshFeedList,
    withNetworkId,
    withCurrentBlock,
    withProtocols,
    withFeeds,
    withFavoriteFeeds,
    withDrizzleContext,
    //@ts-ignore
)(HomeView);
