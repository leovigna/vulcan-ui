//@ts-nocheck

import { CoinbaseFeed } from '../../store/feed/types';

export const testcontracts: CoinbaseFeed[] = [
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-btc',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'btc-usd',
        title: 'BTC/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'BTC',
        index: 0,
    },
];

const contracts: CoinbaseFeed[] = [
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-btc',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'btc-usd',
        title: 'BTC/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'BTC',
        index: 0,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-eth',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'eth-usd',
        title: 'ETH/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'ETH',
        index: 1,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-xtz',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'xtz-usd',
        title: 'XTZ/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'XTZ',
        index: 2,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-dai',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'dai-usd',
        title: 'DAI/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'DAI',
        index: 3,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-rep',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'rep-usd',
        title: 'REP/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'REP',
        index: 4,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-zrx',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'zrx-usd',
        title: 'ZRX/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'ZRX',
        index: 5,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-bat',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'bat-usd',
        title: 'BAT/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'BAT',
        index: 6,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-knc',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'knc-usd',
        title: 'KNC/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'KNC',
        index: 7,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-link',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'link-usd',
        title: 'LINK/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'LINK',
        index: 8,
    },
    {
        id: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-comp',
        networkId: '1',
        protocol: 'coinbase',
        address: '0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC',
        name: 'comp-usd',
        title: 'COMP/USD',
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3,
            },
            format: '$ %(value)s',
        },
        symbol: 'COMP',
        index: 9,
    },
];

export default contracts;
