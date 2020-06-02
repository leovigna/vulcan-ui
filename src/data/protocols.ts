import ChainlinkBadge from '../assets/img/protocols/ChainlinkBadge.png'
import TellorBadge from '../assets/img/protocols/TellorBadge.png'
import CoinbaseBadge from '../assets/img/protocols/CoinbaseBadge.png'
import MKRBadge from '../assets/img/protocols/MKRBadge.png'
import { ProtocolTypes } from '../store/types'

const protocols: { [key: string]: ProtocolTypes.Protocol } = {
    'chainlink': {
        active: true,
        name: 'Chainlink',
        url: 'https://chain.link',
        img: ChainlinkBadge,
        description: 'Decentralized Oracle Network using LINK token.',
        feedCount: 28,
        nodeCount: 30,
        sponsorCount: 17,
        descriptionLong: 'The Chainlink Network provides the largest collection of secure and decentralized on-chain price reference data available. Composed of security reviewed, sybil resistant and fully independent nodes which are run by leading blockchain devops and security teams. Creating a shared global resource which is sponsored by a growing list of top DeFi Dapps.',
    },
    'tellor.io': {
        active: false,
        name: 'Tellor.io',
        url: 'https://chain.link',
        img: TellorBadge,
        description: 'Decentralized Oracle Network combining Proof-of-Work and TRB token.',
        feedCount: 5,
        nodeCount: 5,
        sponsorCount: 5,
        descriptionLong: 'Decentralized Oracle Network combining Proof-of-Work and TRB token.',

    },
    'coinbase': {
        active: false,
        name: 'Coinbase',
        url: 'https://chain.link',
        img: CoinbaseBadge,
        description: 'On-chain market data signed by Coinbase.',
        feedCount: 5,
        nodeCount: 5,
        sponsorCount: 5,
        descriptionLong: 'On-chain market data signed by Coinbase.',

    },
    'mkrdao': {
        active: false,
        name: 'MKRDao',
        url: 'https://chain.link',
        img: MKRBadge,
        description: 'Anonymous data feeds backing the DAI stablecoin.',
        feedCount: 5,
        nodeCount: 5,
        sponsorCount: 5,
        descriptionLong: 'Anonymous data feeds backing the DAI stablecoin.',

    }
}

export default protocols;