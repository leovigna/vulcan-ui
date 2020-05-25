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
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { placeholderText, protocols, feeds } from '../data';

import ChainlinkBadge from '../../assets/img/protocols/ChainlinkBadge.svg'
import TellorBadge from '../../assets/img/protocols/TellorBadge.svg'
import CoinbaseBadge from '../../assets/img/protocols/CoinbaseBadge.png'
import MKRBadge from '../../assets/img/protocols/MKRBadge.png'
import HeartFilled from '../../assets/img/icons/heart_filled.svg'
import HeartEmpty from '../../assets/img/icons/heart_empty.svg'
import ArrowLeft from '../../assets/img/icons/arrow_left.svg'
import ArrowRight from '../../assets/img/icons/arrow_right.svg'

import FeedCard from '../../components/FeedCard'
import FeedCardDetailed from '../../components/FeedCardDetailed'

export default {
    title: 'Custom/FeedCard',
};


const feedOptions = Object.keys(feeds)
const feedDefault = Object.keys(feeds)[0];
const groupId = 'GROUP-ID1';

export const Default = () => {
    const feedName = select('feed', feedOptions, feedDefault, groupId);
    const { name, protocol, ens, hearted, value } = feeds[feedName]
    const feedProtocol = protocols[protocol]

    return (<Container>
        <Row>
            <Col md="4" sm="6">
                <FeedCard protocolImg={feedProtocol.img} feedName={name} value={value} hearted={hearted} />
            </Col>
        </Row>
    </Container>)
}

export const Detailed = () => {
    const feedName = select('feed', feedOptions, feedDefault, groupId);
    const { name, protocol, ens, hearted, value } = feeds[feedName]
    const feedProtocol = protocols[protocol]

    return (<Container>
        <Row>
            <Col md="4" sm="6">
                <FeedCardDetailed protocolImg={feedProtocol.img} feedName={name} value={value} hearted={hearted} feedENS={ens} nodeCount='6' lastUpdate='Jan 1, 1972 00:00 AM' />
            </Col>
        </Row>
    </Container>)
}

export const DetailedGrid = () => {
    const feedName = select('feed', feedOptions, feedDefault, groupId);
    const { name, protocol, ens, hearted, value } = feeds[feedName]
    const feedProtocol = protocols[protocol]

    return (<Container>
        <Row>
            <Col xs="1">
                <div className="d-flex flex-column justify-content-center" style={{ width: '100%', height: '100%' }}>
                    <Button><img style={{ height: 30 }} src={ArrowLeft} alt='' /></Button>
                </div>
            </Col>
            <Col xs="10">
                <Row>
                    <Col lg="4" md="6" xs="12">
                        <FeedCardDetailed protocolImg={feedProtocol.img} feedName={name} value={value} hearted={hearted} feedENS={ens} nodeCount='6' lastUpdate='Jan 1, 1972 00:00 AM' />
                    </Col>
                    <Col lg="4" md="6" xs="12">
                        <FeedCardDetailed protocolImg={feedProtocol.img} feedName={name} value={value} hearted={hearted} feedENS={ens} nodeCount='6' lastUpdate='Jan 1, 1972 00:00 AM' />
                    </Col>
                    <Col lg="4" md="6" xs="12">
                        <FeedCardDetailed protocolImg={feedProtocol.img} feedName={name} value={value} hearted={hearted} feedENS={ens} nodeCount='6' lastUpdate='Jan 1, 1972 00:00 AM' />
                    </Col>
                </Row>
            </Col>
            <Col xs="1">
                <div className="d-flex flex-column justify-content-center" style={{ width: '100%', height: '100%' }}>
                    <Button><img style={{ height: 30 }} src={ArrowRight} alt='' /></Button>
                </div>
            </Col>
        </Row>
    </Container>)
}