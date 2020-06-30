import { ContractFavorite } from "../contractFavorite/types"
import { Protocol } from "../protocol/types"
import { CoinbaseOracle } from "../coinbase/types"
import { Block } from "../block/types"
import { Event } from "../event/types"

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
    protocol: 'chainlink' | 'tellor' | 'coinbase' | 'mkrdao',
    address: string,
    name: string,
    title: string,
    refreshed: boolean,
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
    getTimestamp: { [key: string]: DrizzleCacheKey },
    state?: ChainlinkFeedState
}


export interface TellorFeed extends FeedBase {
    tellorId?: string,
    granularity: number,
    sampleAPI?: string,
    getCurrentValue: DrizzleCacheKey,
    getNewValueCountbyRequestId: DrizzleCacheKey,
    getTimestampbyRequestIDandIndex: { [key: string]: DrizzleCacheKey },
    retrieveData: { [key: string]: DrizzleCacheKey },
    state?: TellorFeedState
}

export interface CoinbaseFeed extends FeedBase {
    index: number,
    symbol: string,
    state?: CoinbaseFeedState
}

export interface MKRDaoFeed extends FeedBase {
    read: DrizzleCacheKey,
    state?: MKRDaoFeedState
}

export type Feed = ChainlinkFeed | TellorFeed | CoinbaseFeed | MKRDaoFeed

interface FeedStateBase {
    value: number
    timestamp: string,
    history?: HistoryPoint[]
}
export interface ChainlinkFeedState extends FeedStateBase {
    latestAnswer: string,
    latestTimestamp: string,
    latestRound: string,
    getAnswer: { [key: string]: string },
    getTimestamp: { [key: string]: string }
}

export interface TellorFeedState extends FeedStateBase {
    getCurrentValue: {
        value: number,
        _timestampRetrieved: string
    },
    getNewValueCountbyRequestId: number,
    getTimestampbyRequestIDandIndex: { [key: string]: number },
    retrieveData: { [key: string]: number }
}

export interface CoinbaseFeedState extends FeedStateBase, CoinbaseOracle {
    resultByTimestamp: { [key: string]: CoinbaseOracle }
}

interface LogValue extends Event {
    returnValues: {
        val: string
    }
}
export interface MKRDaoFeedState extends FeedStateBase {
    read: string,
    LogValue: LogValue[]
    latestLogValue: LogValue
}

interface HistoryPoint {
    timestamp: string,
    value: number
}

export type FeedState = ChainlinkFeedState | TellorFeedState | CoinbaseFeedState | MKRDaoFeedState

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

//Actions
export const REFRESH_CHAINLINK_FEED = 'ORM/FEED/REFRESH_CHAINLINK_FEED'
export interface RefreshChainlinkFeedActionInput {
    feed: ChainlinkFeed,
    drizzle: any
}
export interface RefreshChainlinkFeedAction {
    type: typeof REFRESH_CHAINLINK_FEED
    payload: RefreshChainlinkFeedActionInput
}

export const REFRESH_MKRDAO_FEED = 'ORM/FEED/REFRESH_MKRDAO_FEED'
export interface RefreshMKRDaoFeedActionInput {
    feed: MKRDaoFeed,
    currentBlock: Block,
    drizzle: any
}
export interface RefreshMKRDaoFeedAction {
    type: typeof REFRESH_MKRDAO_FEED
    payload: RefreshMKRDaoFeedActionInput
}

export const REFRESH_FEED = 'ORM/FEED/REFRESH'
export type RefreshFeedAction = {
    type: typeof REFRESH_FEED
    payload: RefreshMKRDaoFeedActionInput | RefreshChainlinkFeedActionInput
}

export const UPDATE_FEED = 'ORM/FEED/UPDATE'
export type UpdateFeedAction = {
    type: typeof UPDATE_FEED
    payload: Feed
}

export const REFRESH_FEED_LIST = 'ORM/FEED/REFRESH_FEED_LIST'
export interface RefreshFeedListActionInput {
    feeds: Feed[],
    currentBlock: Block,
    drizzle: any
}
export interface RefreshFeedListAction {
    type: typeof REFRESH_FEED_LIST
    payload: RefreshFeedListActionInput
}

export type FeedAction = RefreshFeedAction | UpdateFeedAction | RefreshFeedListAction | SetFeedCacheKeyAction