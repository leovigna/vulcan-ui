import React from 'react';
import {
    CRow as Row,
    CCol as Col,
    CContainer as Container
} from '@coreui/react'
import { select } from "@storybook/addon-knobs";

import { protocols } from '../../data/data';
import ProtocolCard from '../../components/ProtocolCard'


export default {
    title: 'Custom/ProtocolCard',
};


const porotocolOptions = Object.keys(protocols)
const protocolDefault = Object.keys(protocols)[0];
const groupId = 'GROUP-ID1';

export const Default = () => {
    const protocolName = select('protocol', porotocolOptions, protocolDefault, groupId);
    const { name, description, img } = protocols[protocolName]

    return (<Container>
        <Row>
            <Col md="4" sm="6">
                <ProtocolCard protocolName={name} protocolDescription={description} protocolImg={img} protocolFeedCount={6} protocolNodeCount={6} protocolSponsorCount={6} />
            </Col>
        </Row>
    </Container>)
}

export const Grid = () => {
    const protocolName = select('protocol', porotocolOptions, protocolDefault, groupId);
    const { name, description, img } = protocols[protocolName]

    return (<Container>
        <Row>
            <Col lg="3" md="6" xs="12">
                <ProtocolCard protocolName={name} protocolDescription={description} protocolImg={img} protocolFeedCount={6} protocolNodeCount={6} protocolSponsorCount={6} />
            </Col>
            <Col lg="3" md="6" xs="12">
                <ProtocolCard protocolName={name} protocolDescription={description} protocolImg={img} protocolFeedCount={6} protocolNodeCount={6} protocolSponsorCount={6} />
            </Col>
            <Col lg="3" md="6" xs="12">
                <ProtocolCard protocolName={name} protocolDescription={description} protocolImg={img} protocolFeedCount={6} protocolNodeCount={6} protocolSponsorCount={6} />
            </Col>
            <Col lg="3" md="6" xs="12">
                <ProtocolCard protocolName={name} protocolDescription={description} protocolImg={img} protocolFeedCount={6} protocolNodeCount={6} protocolSponsorCount={6} />
            </Col>
        </Row>
    </Container>)
}