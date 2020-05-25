import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

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
import VulcanLayout from '../../containers/VulcanLayout'
import HomeView from '../../views/HomeView'
import store, { persistor } from "../../store"
import { Provider } from 'react-redux'

import { placeholderText } from '../data';


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
                    <Route path="/" name="VulcanLayout" render={props =>
                        <VulcanLayout routes={routes} />} />
                </Switch>
            </HashRouter>
        </Provider>)
}