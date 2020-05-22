import React from 'react';
import { CCard, CCardHeader, CCardBody, CRow, CCol, CContainer, CBadge } from '@coreui/react'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { placeholderText } from '../data';

import ChainlinkBadge from '../../assets/img/protocols/ChainlinkBadge.png'
import TellorBadge from '../../assets/img/protocols/TellorBadge.png'
import CoinbaseBadge from '../../assets/img/protocols/CoinbaseBadge.png'
import MKRBadge from '../../assets/img/protocols/MKRBadge.png'

export default {
    title: 'Custom/ProtocolCard',
};

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

const porotocolOptions = Object.keys(protocols)
const protocolDefault = Object.keys(protocols)[0];
const groupId = 'GROUP-ID1';

export const ProtocolCard = () => {
    const color = 'primary'
    const textColor = 'light'
    const borderColor = ''
    const accentColor = ''
    const protocolName = select('protocol', porotocolOptions, protocolDefault, groupId);
    const { name, description, img } = protocols[protocolName]

    return (<CContainer>
        <CRow>
            <CCol md="4" sm="6">
                <CCard style={{ width: '200px', height: '230px' }} color={color} borderColor={borderColor} textColor={textColor} accentColor={accentColor} >
                    <CCardBody>
                        <CRow>
                            <CCol className="py-0" sm="12">
                                <div style={{ textAlign: 'center', fontSize: 18, fontWeight: 'bold' }}>{name}</div>
                            </CCol>
                            <CCol className="py-2" sm="12">
                                <div class="d-flex justify-content-center">
                                    <div style={{ height: '50px', width: '50px', objectFit: 'contain' }}>
                                        <img style={{ height: '100%', width: '100%', objectFit: 'contain' }} src={img} alt=''></img>
                                    </div>
                                </div>
                            </CCol>
                            <CCol sm="12">
                                <p style={{ fontSize: 12, textAlign: 'center' }}>{description}</p>
                            </CCol>
                            <CCol sm="6">
                                X Nodes
                            </CCol>
                            <CCol sm="6">
                                X Feeds
                            </CCol>
                            <CCol sm="12">
                                X Sponsors
                            </CCol>
                        </CRow>
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </CContainer>)
}

ProtocolCard.story = {
    parameters: {
        notes: 'Select Oracle Protocols.',
    },
};