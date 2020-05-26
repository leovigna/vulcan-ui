/* eslint @typescript-eslint/explicit-function-return-type:0 */

import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import vulcan from "../../assets/img/brand/vulcanwhite.png"
import triangledown from "../../assets/img/triangledown.svg"
import externalLink from "../../assets/img/icons/external_link.png"

import {
    CNav as Nav,
    CNavItem as NavItem,
    CCol as Col,
    CRow as Row,
    CContainer as Container
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
            <>
                <div style={{ color: '#FFFFFF', backgroundColor: '#002C69' }} >
                    <Container>
                        <Row>
                            <Col xs={12} sm={8} md={8} lg={8}>
                                <Nav className="navbar navbar-expand-lg navbar-dark static-top ">
                                    <a className="navbar-brand" href="index.html">
                                        <img src={vulcan} alt="" />
                                    </a>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                                        data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false"
                                        aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarResponsive">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">Feeds</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://vulcan.link" target="blank">Vulcan.Link<img
                                                    src={externalLink} /></a>
                                            </li>
                                            {/*
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://bit.ly/2wjVHtI" target="blank">Request a Chainlink
                                        <img src={externalLink} /></a>
                                            </li> */}
                                        </ul>
                                        <form className="form-inline my-lg-0">
                                            <a href="mailto:hello@vulcan.link" className="btn gettouch my-sm-0" type="submit"
                                                target="blank">Contact
                                    Us</a>
                                        </form>
                                    </div>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>

                    <Container>
                        Connecting your smart contracts with real-world off-chain data.
                        Only operator to offer free S&P500 & WHO data feeds.
                    </Container>
                </div>
                <div style={{ height: 0, position: 'relative', zIndex: 1, backgroundColor: '#002C69' }} >
                    <img style={{ width: '100%', height: 200 }} src={triangledown}></img>
                </div>
            </>
        );
    }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
