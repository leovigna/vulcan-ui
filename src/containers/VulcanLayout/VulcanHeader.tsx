/* eslint @typescript-eslint/explicit-function-return-type:0 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
    Nav,
    NavItem
} from 'reactstrap';
import { AppNavbarBrand } from '@coreui/react';

import vulcan from "../../assets/img/brand/vulcanwhite.png"
/*
import {
    CNav as Nav,
    CNavItem as NavItem,
} from '@coreui/react';
*/

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
    render() {
        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <React.Fragment>

                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink to="/dashboard" className="nav-link"><AppNavbarBrand
                            full={{ src: vulcan, width: 353, height: 55, alt: 'Vulcan Link' }}
                            minimized={{ src: vulcan, width: 30, height: 30, alt: 'Vulcan Link' }}
                        /></NavLink>


                    </NavItem></Nav>
                <Nav className="ml-auto" navbar>
                    <NavItem className="px-3">
                        <NavLink to="/dashboard" className="nav-link">Dashboard</NavLink>
                    </NavItem>
                </Nav>
            </React.Fragment>
        );
    }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
