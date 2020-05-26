import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import {
    CRow as Row,
    CContainer as Container
} from '@coreui/react'
import VulcanLayout from '../../containers/VulcanLayout'
import HomeView from '../../views/HomeView'
import FeedView from '../../views/FeedView'

import store from "../../store"
import { Provider } from 'react-redux'

import { placeholderText, feeds } from '../data';


export default {
    title: 'Custom/VulcanLayout',
};

export const Default = () => {
    const routes = [
        {
            path: '/', name: 'VulcanLayout', component: () => <Container>
                <Row>
                    <div>{placeholderText}</div>
                </Row>
            </Container>
        }
    ];

    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/" name="VulcanLayout" render={props =>
                        <VulcanLayout routes={routes} />} />
                </Switch>
            </HashRouter>
        </Provider>)
}

export const Feeds = () => {
    const routes = [
        { path: '/', name: 'Feeds', component: HomeView }
    ];

    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/" name="Feeds" render={props =>
                        <VulcanLayout routes={routes} />} />
                </Switch>
            </HashRouter>
        </Provider>)
}

export const Feed = () => {
    const title = 'BTC / ETH Aggregator'
    const address = '0x000000000000'
    const minResponses = 5
    const maxResponses = 9
    const deviationThreshold = 1
    const answer = 'Ξ 0.01918345'
    const lastUpdate = '7:42 AM'
    const responses = feeds.btcusd.responses
    const chartData = [{
        'x': 1590449000000,
        'y': 0
    }, {
        'x': 1590450000000,
        'y': 1
    }, {
        'x': 1590451000000,
        'y': 3
    }, {
        'x': 1590452000000,
        'y': 1
    }, {
        'x': 1590460000000,
        'y': 0
    }]

    const feedViewProps = { title, address, answer, responses, chartData, minResponses, maxResponses, lastUpdate, deviationThreshold }

    const routes = [
        { path: '/', name: 'FeedView', component: () => <FeedView {...feedViewProps} /> }
    ];

    return (
        <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route path="/" name="FeedView" render={props =>
                        <VulcanLayout routes={routes} />} />
                </Switch>
            </HashRouter>
        </Provider>)
}