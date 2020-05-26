/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { Component, useContext } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Drizzle, IDrizzleOptions } from "@drizzle/store"
import { DrizzleContext } from "@drizzle/react-plugin"
import { ApolloProvider } from '@apollo/react-hooks';
import client from './client'

//import './App.scss';

import drizzleOptions from "./drizzleOptions"
import store, { persistor } from "./store"

const drizzle = new Drizzle(drizzleOptions as IDrizzleOptions, store)

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));
const VulcanLayout = React.lazy(() => import('./containers/VulcanLayout'));

class App extends Component {
    render() {
        return (
            <HashRouter>
                <React.Suspense fallback={loading()}>
                    <Switch>
                        <Route path="/vulcan" name="Vulcan" render={props => <VulcanLayout {...props} />} />
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
export const connectStore = (Component: React.Component) => (props) =>
    (<Provider store={store} >
        <Component {...props} />
    </Provider>)

export const connectDrizzle = (Component: React.Component) => (props: any) => {
    return (<DrizzleContext.Provider drizzle={drizzle}>
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const { drizzle, drizzleState, initialized } = drizzleContext;

                if (!initialized) {
                    return <div className="animated fadeIn pt-1 text-center">Loading...</div>;
                }

                return (<Component {...props} />)
            }}
        </DrizzleContext.Consumer>
    </DrizzleContext.Provider>)
}


export const connectApp = (App: React.Component) => (props: any) => (
    <Provider store={store} >
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
