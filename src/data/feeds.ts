
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


export const testContracts: Feed[] = [
    ...TellorFeeds
    /*
    ...TestChainlinkFeeds,
    ...TestTellorFeeds,
    ...TestCoinbaseFeeds,
    ...TestMKRDaoFeeds
    */
]

export default contracts;