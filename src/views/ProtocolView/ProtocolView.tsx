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
import { ProtocolTypes } from '../../store/types'
import { FeedCardDetailedGrid } from '../../components/FeedCardDetailed'

interface Props extends ProtocolTypes.Protocol {
    setContractFavorite: any
}

const ProtocolView = ({ name, url, img, descriptionLong, feedCount, nodeCount, feeds, protocols, setContractFavorite }: Props) => {
    const [minimizeFeeds, setMinimizeFeeds] = useState(true);
    const toggleMinimizeFeeds = () => setMinimizeFeeds(!minimizeFeeds);

    const history = useHistory();
    const displayedFeeds = minimizeFeeds ? feeds.slice(0, 9) : feeds

    return (
        <div style={{ marginTop: -200, paddingTop: 100, paddingBottom: 50, marginRight: -15, marginLeft: -15 }}>
            <Container>
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
                        <h4 style={{ fontSize: 20, fontWeight: 300, color: '#000000' }}>Website</h4>
                        <a href={url} target='blank' style={{ color: '#393939' }}>{url.replace('https://', '')}</a>
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
                    {
                        displayedFeeds.length > 0 ?
                            <>
                                <FeedCardDetailedGrid setContractFavorite={setContractFavorite} feeds={displayedFeeds} protocols={protocols} />
                                < Col xs={12}>
                                    <div className="d-flex justify-content-center">
                                        <Button onClick={toggleMinimizeFeeds} style={{ fontSize: 20, fontWeight: 'medium', color: '#002C69' }}>{minimizeFeeds ? <>View All</> : <>Hide</>}</Button>
                                    </div>
                                </Col>
                            </> :
                            <Col xs={12}>
                                <div className="d-flex justify-content-center">
                                    No known feeds. More will be added soon.
                        </div>
                            </Col>
                    }
                </Row>
            </Container >
        </div>
    )
}

ProtocolView.defaultProps = {
    feedCount: 0,
    nodeCount: 0,
    feeds: [],
    nodes: []
}

export default ProtocolView;