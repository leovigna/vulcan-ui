
import { Feed } from '../store/feed/types'

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
                multiply: 1e-3,
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

export const tellorContracts: Array<FeedTypes.Feed> = [
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-1",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eth-usd-gdax",
        "title": "ETH/USD-GDAX",
        "tellorId": "1",
        "granularity": 1000,
        "sampleAPI": "json(https://api.pro.coinbase.com/products/ETH-USD/ticker).price"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-2",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "btc-usd-binance",
        "title": "BTC/USD-Binance",
        "tellorId": "2",
        "granularity": 1000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-3",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "bnb-usd-binancedex",
        "title": "BNB/USD-BinanceDEX",
        "tellorId": "3",
        "granularity": 1000,
        "sampleAPI": "json(https://dex.binance.org/api/v1/klines?symbol=BNB_USDSB-1AC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-4",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "btc-usd",
        "title": "BTC/USD",
        "tellorId": "4",
        "granularity": 100000,
        "sampleAPI": "json(https://api.pro.coinbase.com/products/BTC-USD/ticker).price,json(https://api.binance.com/api/v1/klines?symbol=BTCUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-5",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eth-btc-binance",
        "title": "ETH/BTC-Binance",
        "tellorId": "5",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ETHBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-6",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "bnb-btc-binance",
        "title": "BNB/BTC-Binance",
        "tellorId": "6",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=BNBBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-7",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "bnb-eth-binance",
        "title": "BNB/ETH-Binance",
        "tellorId": "7",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=BNBETH&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-8",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eth-usdt-binance",
        "title": "ETH/USDT-Binance",
        "tellorId": "8",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ETHUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-9",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "link-btc-binance",
        "title": "LINK/BTC-Binance",
        "tellorId": "9",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=LINKBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-10",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "etc-eth-binance",
        "title": "ETC/ETH-Binance",
        "tellorId": "10",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ETCETH&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-11",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "zec-eth-binance",
        "title": "ZEC/ETH-Binance",
        "tellorId": "11",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ZECETH&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-12",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "trx-eth-binance",
        "title": "TRX/ETH-Binance",
        "tellorId": "12",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=TRXETH&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-13",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "xrp-btc-binance",
        "title": "XRP/BTC-Binance",
        "tellorId": "13",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=XRPBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-14",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "xmr-eth-binance",
        "title": "XMR/ETH-Binance",
        "tellorId": "14",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=XMRETH&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-15",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "xlm-btc-binance",
        "title": "XLM/BTC-Binance",
        "tellorId": "15",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=XLMBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-16",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "ltc-usdt-binance",
        "title": "LTC/USDT-Binance",
        "tellorId": "16",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=LTCUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-17",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "waves-btc-binance",
        "title": "WAVES/BTC-Binance",
        "tellorId": "17",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=WAVESBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-18",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "rep-btc-binance",
        "title": "REP/BTC-Binance",
        "tellorId": "18",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=REPBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-19",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "tusd-eth-binance",
        "title": "TUSD/ETH-Binance",
        "tellorId": "19",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=TUSDETH&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-20",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eos-usdt-binance",
        "title": "EOS/USDT-Binance",
        "tellorId": "20",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=EOSUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-21",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "iota-usdt-binance",
        "title": "IOTA/USDT-Binance",
        "tellorId": "21",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=IOTAUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-22",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "etc-usdt-binance",
        "title": "ETC/USDT-Binance",
        "tellorId": "22",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ETCUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-23",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eth-pax-binance",
        "title": "ETH/PAX-Binance",
        "tellorId": "23",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ETHPAX&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-24",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eth-usdc-binance",
        "title": "ETH/USDC-Binance",
        "tellorId": "24",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ETHUSDC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-25",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "usdc-usdt-binance",
        "title": "USDC/USDT-Binance",
        "tellorId": "25",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=USDCUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-26",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "rcn-btc-binance",
        "title": "RCN/BTC-Binance",
        "tellorId": "26",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=RCNBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-27",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "link-usdc-binance",
        "title": "LINK/USDC-Binance",
        "tellorId": "27",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=LINKUSDC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-28",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "zrx-bnb-binance",
        "title": "ZRX/BNB-Binance",
        "tellorId": "28",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ZRXBNB&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-29",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "zec-usdc-binance",
        "title": "ZEC/USDC-Binance",
        "tellorId": "29",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ZECUSDC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-30",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "dash-bnb-binance",
        "title": "DASH/BNB-Binance",
        "tellorId": "30",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=DASHBNB&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-31",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "matic-usdt-binance",
        "title": "MATIC/USDT-Binance",
        "tellorId": "31",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=MATICUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-32",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "bat-usdc-binance",
        "title": "BAT/USDC-Binance",
        "tellorId": "32",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=BATUSDC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-33",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "algo-usdt-binance",
        "title": "ALGO/USDT-Binance",
        "tellorId": "33",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ALGOUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-34",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "zrx-usdt-binance",
        "title": "ZRX/USDT-Binance",
        "tellorId": "34",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=ZRXUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-35",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "cos-usdt-binance",
        "title": "COS/USDT-Binance",
        "tellorId": "35",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=COSUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-36",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "bch-usd-kraken",
        "title": "BCH/USD-Kraken",
        "tellorId": "36",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.kraken.com/0/public/Ticker?pair=BCHUSD).result.BCHUSD.p.0"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-37",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "rep-usd-coingecko",
        "title": "REP/USD-CoinGecko",
        "tellorId": "37",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.coingecko.com/api/v3/simple/price?ids=augur&vs_currencies=usd).augur.usd"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-38",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "gno-usd-kraken",
        "title": "GNO/USD-Kraken",
        "tellorId": "38",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.kraken.com/0/public/Ticker?pair=GNOUSD).result.GNOUSD.p.0"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-39",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "dai-usd-kraken",
        "title": "DAI/USD-Kraken",
        "tellorId": "39",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.kraken.com/0/public/Ticker?pair=DAIUSD).result.DAIUSD.p.0"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-40",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "steem-btc-binance",
        "title": "STEEM/BTC-Binance",
        "tellorId": "40",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=STEEMBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-41",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "link-usdt-binance",
        "title": "LINK/USDT-Binance",
        "tellorId": "41",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=LINKUSDT&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-42",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "wan-btc-binance",
        "title": "WAN/BTC-Binance",
        "tellorId": "42",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=WANBTC&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-43",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "gnt-eth-binance",
        "title": "GNT/ETH-Binance",
        "tellorId": "43",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.binance.com/api/v1/klines?symbol=GNTETH&interval=1d&limit=1).0.4"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-44",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "btc-usd-bitfinex",
        "title": "BTC/USD-Bitfinex",
        "tellorId": "44",
        "granularity": 1000000,
        "sampleAPI": "json(https://api-pub.bitfinex.com/v2/ticker/tBTCUSD).6"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-45",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "btc-usd-coingecko",
        "title": "BTC/USD-CoinGecko",
        "tellorId": "45",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd).bitcoin.usd"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-46",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eth-usd-coingecko",
        "title": "ETH/USD-CoinGecko",
        "tellorId": "46",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd).ethereum.usd"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-47",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "ltc-usd-coingecko",
        "title": "LTC/USD-CoinGecko",
        "tellorId": "47",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.coingecko.com/api/v3/simple/price?ids=litecoin&vs_currencies=usd).litecoin.usd"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-48",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "mkr-usd-coingecko",
        "title": "MKR/USD-CoinGecko",
        "tellorId": "48",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.coingecko.com/api/v3/simple/price?ids=maker&vs_currencies=usd).maker.usd"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-49",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eos-usd-coingecko",
        "title": "EOS/USD-CoinGecko",
        "tellorId": "49",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.coingecko.com/api/v3/simple/price?ids=eos&vs_currencies=usd).eos.usd"
    },
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-50",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "trb-usd-coingecko",
        "title": "TRB/USD-CoinGecko",
        "tellorId": "50",
        "granularity": 1000000,
        "sampleAPI": "json(https://api.coingecko.com/api/v3/simple/price?ids=tellor&vs_currencies=usd).tellor.usd"
    }
]