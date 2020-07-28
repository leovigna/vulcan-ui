
import { Feed } from '../store/feed/types'
import CoinbaseFeeds, { testcontracts as TestCoinbaseFeeds } from './feeds/coinbase'
import TellorFeeds, { testcontracts as TestTellorFeeds } from './feeds/tellor'
import ChainlinkFeeds, { testcontracts as TestChainlinkFeeds } from './feeds/chainlink'
import MKRDaoFeeds, { testcontracts as TestMKRDaoFeeds } from './feeds/mkrdao'

const contracts: Feed[] = [
    ...ChainlinkFeeds,
    ...TellorFeeds,
    ...CoinbaseFeeds,
    ...MKRDaoFeeds
]

export const getFeeds = () => {
    if (!process.env.REACT_APP_PRODUCTION_DATA) {
        return testContracts
    } else {
        return contracts
    }
}

export const testContracts: Feed[] = [
    ...TestChainlinkFeeds,
    ...TestTellorFeeds,
    ...TestCoinbaseFeeds,
    ...TestMKRDaoFeeds
]

export default contracts;