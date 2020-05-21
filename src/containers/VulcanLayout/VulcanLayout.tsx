/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import {
    Container,
} from 'reactstrap';

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
} from '@coreui/react';

/*
import {
    CContainer as Container,
    //CAside as AppAside,
    CFooter as AppFooter,
    CHeader as AppHeader,
    CSidebar as AppSidebar,
    CSidebarFooter as AppSidebarFooter,
    CSidebarForm as AppSidebarForm,
    CSidebarHeader as AppSidebarHeader,
    CSidebarMinimizer as AppSidebarMinimizer,
    CBreadcrumb as AppBreadcrumb,
    CSidebarNav as AppSidebarNav
} from '@coreui/react';
*/

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
        return (
            <div className="app">
                <div className='app-header'>
                    <AppHeader fixed>
                        <Suspense fallback={this.loading()}>
                            <VulcanHeader onLogout={e => this.signOut(e)} />
                        </Suspense>
                    </AppHeader>
                </div>
                <div className="app-body">
                    <main className="main">
                        <Container fluid>
                            TEST
                        </Container>
                    </main>
                </div>
                <AppFooter>
                    <Suspense fallback={this.loading()}>
                        <VulcanFooter />
                    </Suspense>
                </AppFooter>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(VulcanLayout);
