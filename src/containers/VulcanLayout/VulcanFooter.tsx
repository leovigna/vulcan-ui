/* eslint @typescript-eslint/explicit-function-return-type:0 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import triangleup from "../../assets/img/triangleup.svg"
import vulcan from "../../assets/img/brand/vulcanwhite.svg"
import telegram from "../../assets/img/icons/telegram.png"
import discord from "../../assets/img/icons/discord.png"
import arrow from "../../assets/img/icons/arrow.png"

import {
    CCol as Col,
    CRow as Row,
    CContainer as Container
} from '@coreui/react';

const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class DefaultFooter extends Component {
    render() {
        // eslint-disable-next-line
        const { children, ...attributes } = this.props;

        return (
            <>
                <div style={{ height: 0, position: 'relative', zIndex: 1, top: -200, backgroundColor: '#002C69' }} >
                    <img style={{ width: '100%', height: 200 }} src={triangleup}></img>
                </div>
                <div style={{ color: '#FFFFFF', backgroundColor: '#002C69' }} >
                    <Container>
                        <Row>
                            <Col xs={12} sm={6} md={5} lg={5}>
                                <div className="Useful-link">
                                    <img src={vulcan} style={{ width: 264 }} className="img-fluid footer-logo" alt="" />
                                    <p>EU-based Experienced Chainlink Node Provider.<br /></p>
                                    <h6>Follow Us</h6>
                                    <br />
                                    <span className="link-footer"><a href={process.env.REACT_APP_TELEGRAM_URL} target="_blank"><img
                                        src={telegram} className="img-fluid" alt="" /></a>
                                        <a href={process.env.REACT_APP_DISCORD_URL} target="_blank"><img src={discord}
                                            className="img-fluid" alt="" /></a></span>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={3} lg={3}>
                                <div className="Useful-link">
                                    <h6>Useful links</h6>
                                    <ul>
                                        <li><a href={process.env.REACT_APP_CONTACT_URL} target="_blank">Contact Us</a></li>
                                        <li><a href={`${process.env.REACT_APP_HOMEPAGE_URL}/#why-choose-us`} target="_blank">About Us</a></li>
                                        <li><a href={`${process.env.REACT_APP_HOMEPAGE_URL}/#services-home`} target="_blank">Services</a></li>
                                        <li><a href={process.env.REACT_APP_HOMEPAGE_URL} target="_blank">Vulcan.Link</a></li>
                                        <li><a href={process.env.REACT_APP_FORM_URL} target="_blank">Request a Chainlink</a></li>
                                    </ul>
                                </div>
                            </Col>
                            <Col xs={12} sm={6} md={4} lg={4}>
                                <div className="Useful-link form-sub">
                                    <h6>Stay Connected</h6>
                                    <p>Subscribe to our newsletter</p>
                                    <div id="mc_embed_signup">
                                        <form
                                            action={process.env.REACT_APP_MAILCHIMP_URL}
                                            method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                            className="validate" target="_blank" noValidate>
                                            <div id="mc_embed_signup_scroll">
                                                <div className="mc-field-group">
                                                    <input type="email" placeholder="Enter Email Address" value="" name="EMAIL"
                                                        className="required email" id="mce-EMAIL" />
                                                </div>
                                                <div id="mce-responses" className="clear">
                                                    <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                                                    <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
                                                </div>
                                                <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true"><input
                                                    type="text" name="b_66e21f9472d7271632b2dc06a_87420076fe" tabIndex="-1"
                                                    value="" /></div>
                                            </div>
                                            <div className="main-link">
                                                <div className="link-to-go">
                                                </div>
                                                <a href="#"
                                                    onClick={() => { document.getElementById('mc-embedded-subscribe-form').submit(); }}>Subscribe
                                        <span><img src={arrow} className="img-fluid" alt="" /></span></a>
                                            </div>
                                        </form>
                                    </div>
                                </div>

                            </Col>
                            <Col xs={12}>
                                <p className="VULCAN-fooyer">© 2020 VULCAN LINK All Rights Reserved</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        );
    }
}

DefaultFooter.propTypes = propTypes;
DefaultFooter.defaultProps = defaultProps;

export default DefaultFooter;
