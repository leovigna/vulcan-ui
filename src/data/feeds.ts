
import { FeedTypes } from '../store/types'

export const tellorContracts: Array<FeedTypes.Feed> = [
    {
        "id": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58-1-1",
        "networkId": "1",
        "protocol": "tellor",
        "address": "0xCaC3937932621F62D94aCdE77bBB2a091FD26f58",
        "name": "eth-usd-gdax",
        "title": "ETH/USD - Coinbase Pro",
        "tellorId": "1",
        "granularity": 1000,
        "sampleAPI": "json(https://api.pro.coinbase.com/products/ETH-USD/ticker).price",
    }
]