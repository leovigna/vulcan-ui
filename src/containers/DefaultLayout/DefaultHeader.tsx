/* eslint @typescript-eslint/explicit-function-return-type:0 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import vulcan from "../../assets/img/brand/vulcan.png"
import {
    CNav as Nav,
    CNavItem as NavItem,
} from '@coreui/react';

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
                        <NavLink to="/dashboard" className="nav-link">
                            <img style={{ height: "55px", width: "100%", objectFit: 'contain' }} src={vulcan} alt="Vulcan Link" />
                        </NavLink>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                </Nav>
            </React.Fragment>
        );
    }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
