import { ContractFavorite } from "../contractFavorite/types"
import { Protocol } from "../protocol/types"
import { CoinbaseOracleResponse, CoinbaseOracle } from "../coinbase/types"

export interface DrizzleCacheKey {
    contractId: string,
    cacheKey?: string,
    cacheArgs?: string
}

export interface AnswerRenderOptions {
    transform: {
        multiply: number,
        decimals: number
    },
    format: string
}
export interface FeedBase {
    id: string,
    networkId: string,
    protocol: string,
    address: string,
    name: string,
    title: string,
    description?: string,
    ens?: string,
    answerRenderOptions?: AnswerRenderOptions,
    favoriteId: string,
    favorite?: ContractFavorite
    protocolInfo?: Protocol,
    state?: FeedState
}
export interface ChainlinkFeed extends FeedBase {
    latestAnswer: DrizzleCacheKey,
    latestTimestamp: DrizzleCacheKey,
    latestRound: DrizzleCacheKey,
    getAnswer: { [key: string]: DrizzleCacheKey },
    getTimestamp: { [key: string]: DrizzleCacheKey }
}


export interface TellorFeed extends FeedBase {
    tellorId?: string,
    granularity: number,
    sampleAPI?: string,
    getCurrentValue: DrizzleCacheKey,
    getNewValueCountbyRequestId: DrizzleCacheKey,
    getTimestampbyRequestIDandIndex: { [key: string]: DrizzleCacheKey },
    retrieveData: { [key: string]: DrizzleCacheKey }
}

export interface CoinbaseFeed extends FeedBase { }

export interface MKRDaoFeed extends FeedBase { }

export type Feed = ChainlinkFeed | TellorFeed | CoinbaseFeed | MKRDaoFeed

export interface ChainlinkFeedState {
    latestAnswer: string,
    latestTimestamp: string,
    latestRound: string,
    getAnswer: { [key: string]: string },
    getTimestamp: { [key: string]: string }
}

export interface TellorFeedState {
    getCurrentValue: {
        value: number,
        _timestampRetrieved: string
    },
    getNewValueCountbyRequestId: number,
    getTimestampbyRequestIDandIndex: { [key: string]: number },
    retrieveData: { [key: string]: number }
}

export interface CoinbaseFeedState extends CoinbaseOracle {
    resultByTimestamp: { [key: string]: CoinbaseOracle }
}

interface HistoryPoint {
    timestamp: string,
    value: number
}

export interface FeedState {
    //Shared
    value: number
    timestamp: string,
    history?: HistoryPoint[]
    //Chainlink
    latestAnswer?: string,
    latestTimestamp?: string,
    latestRound?: string,
    getAnswer?: { [key: string]: string },
    getTimestamp?: { [key: string]: string },
    //Tellor
    getCurrentValue?: {
        value: number,
        _timestampRetrieved: string
    },
    getNewValueCountbyRequestId?: number,
    getTimestampbyRequestIDandIndex?: { [key: string]: number },
    retrieveData?: { [key: string]: number },
    //Coinbase
    message?: string,
    signature?: string,
    price?: string
    resultByTimestamp?: { [key: string]: CoinbaseOracle }
}

export const SET_FEED_CACHE_KEY = 'ORM/SET_FEED_CACHE_KEY'

export type SetFeedCacheKeyActionInput = {
    id: string,
    cacheName: string,
    cacheKey: string,
    cacheArgs?: string
}

export type SetFeedCacheKeyAction = {
    type: typeof SET_FEED_CACHE_KEY
    payload: SetFeedCacheKeyActionInput
}


//
export interface FeedOld {
    tellorId?: string,
    networkId: string,
    name: string,
    address: string,
    title: string,
    description?: string,
    granularity: number,
    sampleAPI?: string,
    protocol: string,
    ens?: string,
    value: string,
    hearted: boolean,
    nodeCount: number,
    lastUpdate: string,
    latestRound?: number,
    latestAnswer?: number,
    latestTimestamp?: number,
    responses: [Response],
    answer: string,
    minResponses: number,
    maxResponses: number,
    deviationThreshold: number,
    answerRenderOptions?: AnswerRenderOptions
}

export interface Response {
    transactionHash: string,
    address: string,
    answer: string | number,
    timestamp: number,
    gasPrice: string | number
}

