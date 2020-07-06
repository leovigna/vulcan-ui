
import { Feed } from '../store/feed/types'
import TellorFeeds from './feeds/tellor'

const contracts: Feed[] = [
    ...TellorFeeds
]


export const testContracts: Array<Feed> = [
    {
        id: "0xF5fff180082d6017036B771bA883025c654BC935-1",
        networkId: "1",
        protocol: "chainlink",
        address: "0xF5fff180082d6017036B771bA883025c654BC935",
        name: "btc-usd",
        title: "BTC/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-8,
                decimals: 2
            },
            format: "$ %(value)s"
        },
        latestAnswer: {
            contractId: "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        latestTimestamp: {
            contractId: "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        latestRound: {
            contractId: "0xF5fff180082d6017036B771bA883025c654BC935"
        },
        getAnswer: {},
        getTimestamp: {}
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-1",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eth-usd-gdax",
        "title": "ETH/USD-GDAX",
        answerRenderOptions: {
            transform: {
                multiply: 1e-6,
                decimals: 2
            },
            format: "$ %(value)s"
        },
        "tellorId": "1",
        "granularity": 1000,
        "sampleAPI": "json(https://api.pro.coinbase.com/products/ETH-USD/ticker).price",
        getCurrentValue: {
            contractId: "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58"
        },
        getNewValueCountbyRequestId: {
            contractId: "0x0ba45a8b5d5575935b8158a88c631e9f9c95a2e5"
        },
        getTimestampbyRequestIDandIndex: {},
        retrieveData: {}
    },
    {
        id: "0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC-btc",
        networkId: "1",
        protocol: "coinbase",
        address: "0xfCEAdAFab14d46e20144F48824d0C09B1a03F2BC",
        name: "btc-usd",
        title: "BTC/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1,
                decimals: 3
            },
            format: "$ %(value)s"
        },
        symbol: 'BTC',
        index: 0
    },
    {
        id: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        networkId: "1",
        protocol: "mkrdao",
        address: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763",
        name: "eth-usd",
        title: "ETH/USD",
        answerRenderOptions: {
            transform: {
                multiply: 1e-9,
                decimals: 3
            },
            format: "$ %(value)s"
        },
        read: {
            contractId: "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763"
        }
    }
]

export default contracts;