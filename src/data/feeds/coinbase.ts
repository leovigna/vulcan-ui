//@ts-nocheck

import { CoinbaseFeed } from "../../store/feed/types";

export const testcontracts: CoinbaseFeed[] = [
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
    }
]

const contracts: CoinbaseFeed[] = [
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
    }

]

export default contracts;