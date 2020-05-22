import React from 'react';
import { CCard, CCardHeader, CCardBody, CRow, CCol, CContainer, CBadge } from '@coreui/react'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { placeholderText } from '../data';

import ChainlinkBadge from '../../assets/img/protocols/ChainlinkBadge.png'
import TellorBadge from '../../assets/img/protocols/TellorBadge.png'
import CoinbaseBadge from '../../assets/img/protocols/CoinbaseBadge.png'
import MKRBadge from '../../assets/img/protocols/MKRBadge.png'
import HeartFilled from '../../assets/img/icons/heart_filled.svg'
import HeartEmpty from '../../assets/img/icons/heart_empty.svg'


export default {
    title: 'Custom/FeedCard',
};
const feeds = {
    'btcusd': {
        name: 'BTC / USD',
        protocol: 'chainlink',
        ens: 'btcusd.feeds.eth',
        hearted: false,
        value: '$ XX.XX'
    },
    'ethusd': {
        name: 'ETH / USD',
        protocol: 'tellor',
        ens: 'ethusd.feeds.eth',
        hearted: true,
        value: '$ XX.XX'
    }
}

const protocols = {
    'chainlink': {
        name: 'Chainlink',
        img: ChainlinkBadge,
        description: 'Decentralized Oracle Network using LINK token.'
    },
    'tellor': {
        name: 'Tellor.io',
        img: TellorBadge,
        description: 'Decentralized Oracle Network combining Proof-of-Work and TRB token.'
    },
    'coinbase': {
        name: 'Coinbase',
        img: CoinbaseBadge,
        description: 'On-chain market data signed by Coinbase.'
    },
    'mkrdao': {
        name: 'MKRDao',
        img: MKRBadge,
        description: 'Anonymous data feeds backing the DAI stablecoin.'
    }
}

const feedOptions = Object.keys(feeds)
const feedDefault = Object.keys(feeds)[0];
const groupId = 'GROUP-ID1';

export const FeedCard = () => {
    const color = 'primary'
    const textColor = 'light'
    const borderColor = ''
    const accentColor = ''
    const feedName = select('feed', feedOptions, feedDefault, groupId);
    const { name, protocol, ens, hearted, value } = feeds[feedName]
    const feedProtocol = protocols[protocol]

    return (<CContainer>
        <CRow>
            <CCol md="4" sm="6">
                <CCard style={{ width: '200px', height: '230px' }} color={color} borderColor={borderColor} textColor={textColor} accentColor={accentColor} >
                    <CCardBody>
                        <CRow>
                            <CCol className="p-2" sm="3">
                                <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={feedProtocol.img} alt=''></img>
                            </CCol>

                            <CCol className="p-0 py-2" sm="6">
                                <div style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{name}</div>
                            </CCol>
                            <CCol className="p-2" sm="3">
                                <img style={{ height: '80%', width: '100%', objectFit: 'contain' }} src={hearted ? HeartFilled : HeartEmpty} alt=''></img>
                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol className="py-2" sm="12">

                            </CCol>
                        </CRow>
                        <CRow>
                            <CCol sm="12">
                                <p style={{ fontSize: 18, fontStyle: 'italic', fontWeight: 'bold', color: '#F2F2F2', textAlign: 'center' }}>{value}</p>
                            </CCol>
                            <CCol sm="6">
                                X Nodes
                            </CCol>
                            <CCol sm="6">
                                X Feeds
                            </CCol>
                            <CCol sm="12">
                                <a style={{ color: 'white', fontStyle: 'italic' }} href='https://etherscan.com'>{ens}</a>
                            </CCol>
                            <CCol sm="12">
                                X Sponsors
                            </CCol>
                            <CCol sm="12">
                                <a style={{ color: 'white', fontStyle: 'italic' }} href='https://etherscan.com'>Etherscan</a>
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </CContainer>)
}

FeedCard.story = {
    parameters: {
        notes: 'Select Oracle Feeds.',
    },
};