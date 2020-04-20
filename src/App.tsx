/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider, connect } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Drizzle, IDrizzleOptions } from "@drizzle/store"
import { DrizzleContext } from "@drizzle/react-plugin"
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client'

import './App.scss';

import drizzleOptions from "./drizzleOptions"
import store, { persistor } from "./store"

const drizzle = new Drizzle(drizzleOptions as IDrizzleOptions, store)

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages
const Login = React.lazy(() => import('./views/Pages/Login'));
const Register = React.lazy(() => import('./views/Pages/Register'));
const Page404 = React.lazy(() => import('./views/Pages/Page404'));
const Page500 = React.lazy(() => import('./views/Pages/Page500'));

class App extends Component {
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <Route exact path="/login" name="Login Page" render={props => <Login {...props} />} />
                        <Route exact path="/register" name="Register Page" render={props => <Register {...props} />} />
                        <Route exact path="/404" name="Page 404" render={props => <Page404 {...props} />} />
                        <Route exact path="/500" name="Page 500" render={props => <Page500 {...props} />} />
                        <Route path="/" name="Home" render={props => <DefaultLayout {...props} />} />
                    </Switch>
                </React.Suspense>
            </HashRouter>
        );
    }

    componentDidMount() {
    }
}

//Environment variable optional use GraphQL API
const WrappedApp = (props) => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            {process.env.REACT_APP_GRAPHQL_API ?
                <ApolloProvider client={client}>
                    <DrizzleContext.Provider drizzle={drizzle}>
                        <App {...props} />
                    </DrizzleContext.Provider>
                </ApolloProvider> :
                <DrizzleContext.Provider drizzle={drizzle}>
                    <App {...props} />
                </DrizzleContext.Provider>
            }
        </PersistGate>
    </Provider >
)

export default WrappedApp;
