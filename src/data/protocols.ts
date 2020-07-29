//@ts-nocheck
import ChainlinkBadge from '../assets/img/protocols/ChainlinkBadge.svg';
import TellorBadge from '../assets/img/protocols/TellorBadge.svg';
import CoinbaseBadge from '../assets/img/protocols/CoinbaseBadge.png';
import MKRBadge from '../assets/img/protocols/MKRBadge.png';
import RSKBadge from '../assets/img/protocols/RSKBadge.svg';
import ELASTOSBadge from '../assets/img/protocols/ELASTOSBadge.svg';
import BandBadge from '../assets/img/protocols/BandBadge.svg';

import { ProtocolTypes } from '../store/types';

const protocols: [ProtocolTypes.Protocol] = [
    {
        id: 'chainlink',
        active: true,
        name: 'Chainlink',
        url: 'https://chain.link',
        img: ChainlinkBadge,
        description: 'Decentralized Oracle Network using LINK token.',
        descriptionLong:
            'The Chainlink Network provides the largest collection of secure and decentralized on-chain price reference data available. Composed of security reviewed, sybil resistant and fully independent nodes which are run by leading blockchain devops and security teams. Creating a shared global resource which is sponsored by a growing list of top DeFi Dapps.',
    },
    {
        id: 'tellor',
        active: true,
        name: 'Tellor.io',
        url: 'https://tellor.io',
        img: TellorBadge,
        description: 'Decentralized Oracle Network combining Proof-of-Work and TRB token.',
        descriptionLong: 'Decentralized Oracle Network combining Proof-of-Work and TRB token.',
    },
    {
        id: 'coinbase',
        active: true,
        name: 'Coinbase',
        url: 'https://docs.pro.coinbase.com/#oracle',
        img: CoinbaseBadge,
        description: 'On-chain market data signed by Coinbase.',
        descriptionLong: 'On-chain market data signed by Coinbase.',
    },
    {
        id: 'mkrdao',
        active: true,
        name: 'MKRDao',
        url: 'https://developer.makerdao.com/feeds',
        img: MKRBadge,
        description: 'Anonymous data feeds backing the DAI stablecoin.',
        descriptionLong: 'Anonymous data feeds backing the DAI stablecoin.',
    },
    ,
    {
        id: 'rsk',
        active: true,
        name: 'RSK',
        url: 'https://rsk.co',
        img: RSKBadge,
        description: 'Coming soon...',
    },
    ,
    {
        id: 'elastos',
        active: true,
        name: 'ELASTOS',
        url: 'https://www.elastos.org',
        img: ELASTOSBadge,
        description: 'Coming soon...',
    },
    ,
    {
        id: 'band',
        active: true,
        name: 'Band',
        url: 'https://bandprotocol.com',
        img: BandBadge,
        description: 'Coming soon...',
    },
];

export default protocols;
