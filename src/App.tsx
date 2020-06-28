/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import { Drizzle, IDrizzleOptions } from "@drizzle/store"
import client from './client'
import routes from './routes'

import './App.scss';

import drizzleOptions from "./drizzleOptions"
import store, { persistor } from "./store"
import { compose } from 'recompose';
import { withReduxStoreProvider, withPersistStore, withApolloProvider, withDrizzleContextProvider, withStartPollingCoinbase } from './hoc';

const drizzle = new Drizzle(drizzleOptions as IDrizzleOptions, store)

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const VulcanLayout = React.lazy(() => import('./containers/VulcanLayout'));

class App extends Component {
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <Route path="/" name="Vulcan" render={props => <VulcanLayout routes={routes} {...props} />} />
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }

    componentDidMount() {
        this.props.startPollingCoinbase()
    }
}

export default compose(
    withReduxStoreProvider(store),
    withPersistStore(persistor),
    withDrizzleContextProvider(drizzle),
    withStartPollingCoinbase
    // withApolloProvider(client)
)(App);
