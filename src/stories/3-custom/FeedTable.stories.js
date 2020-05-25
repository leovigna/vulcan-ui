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
import FeedTable from '../../components/FeedTable'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { placeholderText, protocols, feeds } from '../data';

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
