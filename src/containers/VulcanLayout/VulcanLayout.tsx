/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';

import {
    CContainer as Container
} from '@coreui/react';
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

// routes config
import { connect } from "react-redux"

const VulcanFooter = React.lazy(() => import('./VulcanFooter'));
const VulcanHeader = React.lazy(() => import('./VulcanHeader'));

class VulcanLayout extends Component {
    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        const { routes } = this.props;

        return (
            <div className="app">
                <Suspense fallback={this.loading()}>
                    <VulcanHeader />
                </Suspense>
                <div className="c-body">
                    <Container style={{ minHeight: 500, paddingTop: 200, paddingBottom: 200 }} fluid>
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
                            </Switch>
                        </Suspense>
                    </Container>
                </div>
                <Suspense fallback={this.loading()}>
                    <VulcanFooter />
                </Suspense>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(VulcanLayout);
