import React from 'react';
import {
    CRow as Row,
    CCol as Col,
    CContainer as Container
} from '@coreui/react'
import FeedTable from '../../components/FeedTable'
import { select } from "@storybook/addon-knobs";

import { feeds } from '../../data/data';

export default {
    title: 'Custom/FeedTable',
};


const feedOptions = Object.keys(feeds)
const feedDefault = Object.keys(feeds)[0];
const groupId = 'GROUP-ID1';

export const Default = () => {
    const feedName = select('feed', feedOptions, feedDefault, groupId);
    const { responses } = feeds[feedName]

    return (<Container>
        <Row>
            <Col md="4" sm="6">
                <FeedTable responses={responses} />
            </Col>
        </Row>
    </Container>)
}
