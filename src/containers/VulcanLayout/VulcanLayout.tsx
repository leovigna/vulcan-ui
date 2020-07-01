/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { Component, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import {
    CContainer as Container
} from '@coreui/react';

// routes config
import VulcanFooter from './VulcanFooter'
import VulcanHeader from './VulcanHeader'

class VulcanLayout extends Component {
    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        const { routes } = this.props;

        return (
            <div className="app">
                <VulcanHeader />
                <div className="c-body">
                    <Container style={{ minHeight: 500, paddingTop: 200, paddingBottom: 200 }} fluid>
                        <Suspense fallback={this.loading()}>
                            <Switch>
                                {
                                    routes.map((route, idx) => {
                                        return route.component ? (
                                            <Route
                                                key={idx}
                                                path={route.path}
                                                exact={route.exact}
                                                render={props => <route.component {...props} />}
                                            />
                                        ) : null;
                                    })
                                }
                            </Switch>
                        </Suspense>
                    </Container>
                </div>
                <VulcanFooter />
            </div>
        );
    }
}

export default VulcanLayout;
