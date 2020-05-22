/* eslint-disable @typescript-eslint/explicit-function-return-type */

import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';

import {
    CContainer as Container
} from '@coreui/react';

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
            <div className="c-app">
                <div className='c-header'>
                    <Suspense fallback={this.loading()}>
                        <VulcanHeader onLogout={e => this.signOut(e)} />
                    </Suspense>
                </div>
                <div className="c-body">
                    <main className="c-main">
                        <Container fluid>
                            TEST
                        </Container>
                    </main>
                </div>
                <div className='c-footer'>
                    <Suspense fallback={this.loading()}>
                        <VulcanFooter />
                    </Suspense>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
    }
}

export default connect(mapStateToProps)(VulcanLayout);
