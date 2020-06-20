export interface DrizzleCacheKey {
    contractId: string,
    cacheKey?: string
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
    answerRenderOptions?: AnswerRenderOptions
}

export interface ChainlinkFeed extends FeedBase {
    latestAnswer: DrizzleCacheKey,
    latestTimestamp: DrizzleCacheKey,
    latestRound: DrizzleCacheKey
}


export interface TellorFeed extends FeedBase {
    tellorId?: string,
    granularity: number,
    sampleAPI?: string,
    getCurrentValue: DrizzleCacheKey
}

export type Feed = ChainlinkFeed | TellorFeed

export interface ChainlinkFeedState {
    latestAnswer: string,
    latestTimestamp: string,
    latestRound: string
}

export interface TellorFeedState {
    getCurrentValue: {
        value: number,
        _timestampRetrieved: string
    }
}

export type FeedState = ChainlinkFeedState | TellorFeedState

export const SET_FEED_CACHE_KEY = 'ORM/SET_FEED_CACHE_KEY'

export type SetFeedCacheKeyActionInput = {
    id: string,
    cacheName: string,
    cacheKey: string
}

export type SetFeedCacheKeyAction = {
    type: typeof SET_FEED_CACHE_KEY
    payload: SetFeedCacheKeyActionInput
}

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

