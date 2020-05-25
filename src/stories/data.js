import ChainlinkBadge from '../assets/img/protocols/ChainlinkBadge.png'
import TellorBadge from '../assets/img/protocols/TellorBadge.png'
import CoinbaseBadge from '../assets/img/protocols/CoinbaseBadge.png'
import MKRBadge from '../assets/img/protocols/MKRBadge.png'

export const placeholderText = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.'

export const users = {
    columns: [
        {
            key: 'name',
            title: 'Username'
        },
        {
            key: 'date',
            title: 'Date registered'
        }, {
            key: 'role',
            title: 'Role'
        }, {
            key: 'status',
            title: 'Status'
        }
    ],
    rows: [
        {
            name: 'Samppa Nori',
            date: '2012/01/01',
            role: 'Member',
            status: 'Active'
        },
        {
            name: 'Estavan Lykos',
            date: '2012/01/01',
            role: 'Member',
            status: 'Banned'
        },
        {
            name: 'Chetan Mohamed',
            date: '2012/01/01',
            role: 'Member',
            status: 'Inactive'
        },
        {
            name: 'Derick Maximinus',
            date: '2012/01/01',
            role: 'Member',
            status: 'Pending'
        },
        {
            name: 'Friderik Dávid',
            date: '2012/01/01',
            role: 'Staff',
            status: 'Active'
        }
    ]
}

export const listData = [
    'Cras justo odio',
    'Dapibus ac facilisis in',
    'Morbi leo risus',
    'Porta ac consectetur ac',
    'Vestibulum at eros'
]

export const protocols = {
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

export const feeds = {
    'btcusd': {
        name: 'BTC / USD',
        protocol: 'chainlink',
        ens: 'btcusd.feeds.eth',
        hearted: false,
        value: '$ XX.XX',
        responses: [
            {
                answer: '$ XXXX.XX',
                address: '0x4565300C576431e5228e8aA32642D5739CF9247d',
                transactionHash: '0xa58a1317...',
                timestamp: 1590449006,
                gasPrice: '15.0'
            },
            {
                answer: '$ XXXX.XX',
                address: '0x4565300C576431e5228e8aA32642D5739CF9247d',
                transactionHash: '0xa58a1317...',
                timestamp: 1590449006,
                gasPrice: '15.0'
            },
            {
                answer: '$ XXXX.XX',
                address: '0x4565300C576431e5228e8aA32642D5739CF9247d',
                transactionHash: '0xa58a1317...',
                timestamp: 1590449006,
                gasPrice: '15.0'
            },
            {
                answer: '$ XXXX.XX',
                address: '0x4565300C576431e5228e8aA32642D5739CF9247d',
                transactionHash: '0xa58a1317...',
                timestamp: 1590449006,
                gasPrice: '15.0'
            },
            {
                answer: '$ XXXX.XX',
                address: '0x4565300C576431e5228e8aA32642D5739CF9247d',
                transactionHash: '0xa58a1317...',
                timestamp: 1590449006,
                gasPrice: '15.0'
            },
            {
                answer: '$ XXXX.XX',
                address: '0x4565300C576431e5228e8aA32642D5739CF9247d',
                transactionHash: '0xa58a1317...',
                timestamp: 1590449006,
                gasPrice: '15.0'
            }
        ]
    },
    'ethusd': {
        name: 'ETH / USD',
        protocol: 'tellor',
        ens: 'ethusd.feeds.eth',
        hearted: true,
        value: '$ XX.XX',
        responses: []
    },
    'linkusd': {
        name: 'LINK / USD',
        protocol: 'chainlink',
        ens: 'linkusd.feeds.eth',
        hearted: false,
        value: '$ XX.XX',
        responses: []
    },
    'eurusd': {
        name: 'EUR / USD',
        protocol: 'chainlink',
        ens: 'eurusd.feeds.eth',
        hearted: true,
        value: '$ XX.XX',
        responses: []
    },
    'gpusd': {
        name: 'GBP / USD',
        protocol: 'chainlink',
        ens: 'gbpusd.feeds.eth',
        hearted: false,
        value: '$ XX.XX',
        responses: []
    },
    'bchusd': {
        name: 'BCH / USD',
        protocol: 'chainlink',
        ens: 'bchusd.feeds.eth',
        hearted: true,
        value: '$ XX.XX',
        responses: []
    },
    'ltcusd': {
        name: 'LTC / USD',
        protocol: 'chainlink',
        ens: 'ltcusd.feeds.eth',
        hearted: false,
        value: '$ XX.XX',
        responses: []
    }
}