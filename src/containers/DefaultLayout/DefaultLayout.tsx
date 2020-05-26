/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import {
    AppFooter,
    AppHeader,
    AppSidebar,
    AppSidebarFooter,
    AppSidebarForm,
    AppSidebarHeader,
    AppSidebarMinimizer,
    AppBreadcrumb2 as AppBreadcrumb,
    AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react2';

import {
    CContainer as Container
} from '@coreui/react';

// sidebar nav config
import navCreate from '../../_nav';
// routes config
import routes from '../../routes';
import { connect } from "react-redux"

import { categories } from '../../data/contracts';
import { contractsSelector, customContractsSelector } from '../../store/selectors'

//const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {
    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        //Custom
        const { contracts, categories, customcontracts } = this.props;

        const navigation = navCreate({
            contracts: (contracts || []),
            categories: (categories || {}),
            customcontracts: (customcontracts || [])
        });

        return (
            <div className="app">
                <div className='app-header'>
                    <AppHeader fixed>
                        <Suspense fallback={this.loading()}>
                            <DefaultHeader />
                        </Suspense>
                    </AppHeader>
                </div>
                <div className="app-body">
                    <AppSidebar fixed display="lg">
                        <AppSidebarHeader />
                        <AppSidebarForm />
                        <Suspense fallback={this.loading()}>
                            <AppSidebarNav navConfig={navigation} {...this.props} router={router} />
                        </Suspense>
                        <AppSidebarFooter />
                        <AppSidebarMinimizer />
                    </AppSidebar>
                    <main className="main">
                        <AppBreadcrumb appRoutes={routes} router={router} />
                        <Container fluid>
                            <Suspense fallback={this.loading()}>
                                <Switch>
                                    {routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                name={route.name}
                                                render={props => <route.component {...props} />}
                                            />
                                        ) : null;
                                    })}
                                    <Redirect from="/" to="/dashboard" />
                                </Switch>
                            </Suspense>
                        </Container>
                    </main>
                    {/*
                    <AppSidebar className="c-sidebar-right" fixed>
                        <Suspense fallback={this.loading()}>
                            <DefaultAside />
                        </Suspense>
                    </AppSidebar>
                    */
                    }
                </div>
                <AppFooter>
                    <Suspense fallback={this.loading()}>
                        <DefaultFooter />
                    </Suspense>
                </AppFooter>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        categories,
        contracts: contractsSelector(state),
        customcontracts: customContractsSelector(state)
    }
}

export default connect(mapStateToProps)(DefaultLayout);
