import { createSelector } from 'redux-orm'
import orm from '../orm'
import { Feed, ChainlinkFeed, ChainlinkFeedState, TellorFeed, TellorFeedState, FeedState } from './types'
import { DrizzleSelectors } from '../selectors'
import { FeedTypes } from '../types'
import { Contract } from '../orm/models'

const emptyArray: FeedTypes.Feed[] = []

export const feedResolve = (feed: FeedTypes.Feed) => {
    return {
        ...feed.ref,
        protocolInfo: feed.protocolInfo?.ref,
        favorite: feed.favorite?.ref
    }
};

export const feedsSelector: (state: any, id: string) => Feed = createSelector(orm.Feed)
export const feedsByFilterSelector: (state: any, filter: any) => FeedTypes.Feed[] = createSelector(
    orm,
    (_session_, filter) => filter,
    (session, filter) => {

        const contracts = session.Feed.filter(filter).toModelArray().map((item: FeedTypes.Feed) => {
            return feedResolve(item)
        });

        if (contracts.length == 0) return emptyArray;
        return contracts;
    }
);

export const feedByFilterSelector: (state: any, filter: any) => FeedTypes.Feed = createSelector(
    orm,
    (_session_, filter) => filter,
    (session, filter) => {
        const item = session.Feed.filter(filter).first()
        if (!item) return null;
        return feedResolve(item)
    }
);

//Feed Cache
const setChainlinkFeedStateCache = (drizzle: any, feed: ChainlinkFeed, setCacheKey: any) => {
    if (!feed.latestAnswer.cacheKey) {
        const contract = drizzle.contracts[feed.latestAnswer.contractId]
        const cacheKey = contract.methods.latestAnswer.cacheCall()
        setCacheKey({ id: feed.id, cacheName: 'latestAnswer', contractId: feed.latestAnswer.contractId, cacheKey })
    }
    if (!feed.latestRound.cacheKey) {
        const contract = drizzle.contracts[feed.latestRound.contractId]
        const cacheKey = contract.methods.latestRound.cacheCall()
        setCacheKey({ id: feed.id, cacheName: 'latestRound', contractId: feed.latestRound.contractId, cacheKey })
    }
    if (!feed.latestTimestamp.cacheKey) {
        const contract = drizzle.contracts[feed.latestTimestamp.contractId]
        const cacheKey = contract.methods.latestTimestamp.cacheCall()
        setCacheKey({ id: feed.id, cacheName: 'latestTimestamp', contractId: feed.latestTimestamp.contractId, cacheKey })
    }
}

const setChainlinkFeedRoundStateCache = (drizzle: any, feed: ChainlinkFeed, setCacheKey: any, latestRound: number) => {
    const contract = drizzle.contracts[feed.latestRound.contractId]
    for (let i = Number(latestRound); i > Math.max(latestRound - 50, 0); i--) {
        if (!feed.getAnswer[i]) {
            const cacheKeyAnswer = contract.methods.getAnswer.cacheCall(i)
            setCacheKey({ id: feed.id, cacheName: 'getAnswer', cacheArgs: i, contractId: feed.latestRound.contractId, cacheKey: cacheKeyAnswer })
        }
        if (!feed.getTimestamp[i]) {
            const cacheKeyTimestamp = contract.methods.getTimestamp.cacheCall(i)
            setCacheKey({ id: feed.id, cacheName: 'getTimestamp', cacheArgs: i, contractId: feed.latestRound.contractId, cacheKey: cacheKeyTimestamp })
        }
    }
}

const setTellorFeedStateCache = (drizzle: any, feed: TellorFeed, setCacheKey: any) => {
    if (!feed.getCurrentValue.cacheKey) {
        const contract = drizzle.contracts[feed.getCurrentValue.contractId]
        const cacheKey = contract.methods.getCurrentValue.cacheCall(feed.tellorId)
        setCacheKey({ id: feed.id, cacheName: 'getCurrentValue', contractId: feed.getCurrentValue.contractId, cacheKey })
    }
}

export const setFeedStateCache = (drizzle: any, feed: Feed, setCacheKey: any) => {
    if (feed.protocol === 'tellor') {
        setTellorFeedStateCache(drizzle, feed as FeedTypes.TellorFeed, setCacheKey)
    } else if (feed.protocol === 'chainlink') {
        setChainlinkFeedStateCache(drizzle, feed as FeedTypes.ChainlinkFeed, setCacheKey)
    }
}

//Feed State
const chainlinkFeedStateSelector: (state: any, feed: ChainlinkFeed) => ChainlinkFeedState = (state, feed) => {
    let latestAnswer;
    let latestRound;
    let latestTimestamp;
    let getAnswer;
    let getTimestamp;
    if (feed.latestAnswer.cacheKey) {
        latestAnswer = DrizzleSelectors.drizzleStateValueSelector(state, feed.latestAnswer.contractId, 'latestAnswer', feed.latestAnswer.cacheKey)
    }
    if (feed.latestRound.cacheKey) {
        latestRound = DrizzleSelectors.drizzleStateValueSelector(state, feed.latestRound.contractId, 'latestRound', feed.latestRound.cacheKey)
    }
    if (feed.latestTimestamp.cacheKey) {
        latestTimestamp = DrizzleSelectors.drizzleStateValueSelector(state, feed.latestTimestamp.contractId, 'latestTimestamp', feed.latestTimestamp.cacheKey)
    }
    if (feed.getAnswer) {
        getAnswer = Object.fromEntries(Object.values(feed.getAnswer).map((cache) => {
            if (!!cache.cacheKey && !!cache.cacheArgs) {
                const value = DrizzleSelectors.drizzleStateValueSelector(state, cache.contractId, 'getAnswer', cache.cacheKey)
                return [cache.cacheArgs!, value]
            }
        }) as Iterable<[string, any]>)
    }
    if (feed.getTimestamp) {
        getTimestamp = Object.fromEntries(Object.values(feed.getTimestamp).map((cache) => {
            if (!!cache.cacheKey && !!cache.cacheArgs) {
                const value = DrizzleSelectors.drizzleStateValueSelector(state, cache.contractId, 'getTimestamp', cache.cacheKey)
                return [cache.cacheArgs!, value]
            }
        }) as Iterable<[string, any]>)
    }

    return {
        latestAnswer,
        latestRound,
        latestTimestamp,
        getAnswer,
        getTimestamp
    }
}

const tellorFeedStateSelector: (state: any, feed: TellorFeed) => TellorFeedState = (state, feed) => {
    let getCurrentValue;
    if (feed.getCurrentValue.cacheKey) {
        getCurrentValue = DrizzleSelectors.drizzleStateValueSelector(state, feed.getCurrentValue.contractId, 'getCurrentValue', feed.getCurrentValue.cacheKey)
    }
    return { getCurrentValue }
}

export const feedStateSelector: (state: any, feed: Feed) => FeedState = (state, feed) => {
    if (feed.protocol === 'chainlink') {
        const feedState = chainlinkFeedStateSelector(state, feed as ChainlinkFeed)
        if (feedState) {
            return {
                timestamp: feedState.latestTimestamp,
                value: feedState.latestAnswer,
                ...feedState
            }
        }
    }
    if (feed.protocol === 'tellor') {
        const feedState = tellorFeedStateSelector(state, feed as TellorFeed)
        if (feedState) {
            return {
                timestamp: feedState.getCurrentValue?._timestampRetrieved,
                value: feedState.getCurrentValue?.value,
                ...feedState
            }
        }
    }
    return null;
}