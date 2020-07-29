/* eslint @typescript-eslint/explicit-function-return-type:0 */

import React, { Component } from 'react';
import vulcan from '../../assets/img/brand/vulcanwhite.png';
import triangledown from '../../assets/img/triangledown.svg';
import externalLink from '../../assets/img/icons/external_link.png';

import { CNav as Nav, CCol as Col, CRow as Row, CContainer as Container } from '@coreui/react';

class DefaultHeader extends Component {
    render() {
        return (
            <>
                <div style={{ color: '#FFFFFF', backgroundColor: '#002C69' }}>
                    <Container>
                        <Row>
                            <Col xs={12} sm={10} md={10} lg={10}>
                                <Nav className="navbar navbar-expand-lg navbar-dark static-top ">
                                    <a className="navbar-brand" href="#">
                                        <img src={vulcan} alt="" />
                                    </a>
                                    <button
                                        className="navbar-toggler"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#navbarResponsive"
                                        aria-controls="navbarResponsive"
                                        aria-expanded="false"
                                        aria-label="Toggle navigation"
                                    >
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarResponsive">
                                        <ul className="navbar-nav ml-auto">
                                            <li className="nav-item">
                                                <a className="nav-link" href="#">
                                                    Feeds
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a
                                                    className="nav-link"
                                                    href={process.env.REACT_APP_HOMEPAGE_URL}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                >
                                                    Vulcan.Link
                                                    <img src={externalLink} />
                                                </a>
                                            </li>
                                            {/*
                                            <li className="nav-item">
                                                <a className="nav-link" href="https://bit.ly/2wjVHtI" target="_blank">Request a Chainlink
                                        <img src={externalLink} /></a>
                                            </li> */}
                                        </ul>
                                        {/* <NetworkPicker /> */}
                                        <form className="form-inline my-lg-0">
                                            <a
                                                href={process.env.REACT_APP_CONTACT_URL}
                                                className="btn gettouch my-sm-0"
                                                type="submit"
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                                Contact Us
                                            </a>
                                        </form>
                                    </div>
                                </Nav>
                            </Col>
                        </Row>
                        <Row className="py-3">
                            <Col xs="12">
                                Explore decentralized and decentralized oracle protocols on the Ethereum blockchain.
                                Oracle feeds enable connecting smart contracts with external data that powers various
                                DeFi protocols.
                                <br />
                                <br />
                                Keep an eye out for new feeds, oracle protocols and blockchain networks that frequently
                                get added!
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div style={{ height: 0, position: 'relative', backgroundColor: '#002C69' }}>
                    <img style={{ width: '100%', height: 200 }} src={triangledown}></img>
                </div>
            </>
        );
    }
}

export default DefaultHeader;
