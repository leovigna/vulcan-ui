import { createSelector } from 'redux-orm'
import Web3 from 'web3'
import orm from '../orm'
import { Feed, ChainlinkFeed, ChainlinkFeedState, TellorFeed, TellorFeedState, FeedState, CoinbaseFeed, CoinbaseFeedState, MKRDaoFeed, MKRDaoFeedState } from './types'
import { DrizzleSelectors } from '../selectors'
import { transformAnswer } from './actions'
import { coinbaseOracleResponsesSelector } from '../coinbase/selectors'

const emptyArray: Feed[] = []

export const feedResolve = (state: any, feed: Feed) => {
    const feedState = feed.ref ? feedStateSelector(state, feed.ref) : null
    const feedInfo = {
        ...feed.ref,
        protocolInfo: feed.protocolInfo?.ref,
        favorite: feed.favorite?.ref,
        state: feedState
    }

    return feedInfo
};

export const feedByIdSelector: (ormState: any, id: string, state: any) => Feed = createSelector(
    orm,
    (_session_, id) => id,
    (_session_, _id_, state) => state,
    (session, id, state) => {
        const feed = session.Feed.withId(id)
        if (!feed) return null;
        console.debug(state)
        return feedResolve(state, feed)
    }
);

export const feedsByFilterSelector: (ormState: any, filter: any, state: any) => Feed[] = createSelector(
    orm,
    (_session_, filter) => filter,
    (_session_, _filter_, state) => state,
    (session, filter, state) => {
        const feeds = session.Feed.filter(filter).toModelArray().map((item: Feed) => {
            return feedResolve(state, item)
        });

        if (feeds.length == 0) return emptyArray;
        return feeds;
    }
);

export const feedByFilterSelector: (ormState: any, filter: any, state: any) => Feed = createSelector(
    orm,
    (_session_, filter) => filter,
    (_session_, _filter_, state) => state,
    (session, filter, state) => {
        const item = session.Feed.filter(filter).first()
        if (!item) return null;
        return feedResolve(state, item)
    }
);

//Feed Cache
const setChainlinkFeedStateCache = (drizzle: any, feed: ChainlinkFeed, setCacheKey: any) => {
    if (!feed.latestAnswer?.cacheKey) {
        const contract = drizzle.contracts[feed.latestAnswer.contractId]
        const cacheKey = contract.methods.latestAnswer.cacheCall()
        setCacheKey({ id: feed.id, cacheName: 'latestAnswer', contractId: feed.latestAnswer.contractId, cacheKey })
    }
    if (!feed.latestRound?.cacheKey) {
        const contract = drizzle.contracts[feed.latestRound.contractId]
        const cacheKey = contract.methods.latestRound.cacheCall()
        setCacheKey({ id: feed.id, cacheName: 'latestRound', contractId: feed.latestRound.contractId, cacheKey })
    }
    if (!feed.latestTimestamp?.cacheKey) {
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
    if (!feed.getCurrentValue?.cacheKey) {
        const contract = drizzle.contracts[feed.getCurrentValue.contractId]
        const cacheKey = contract.methods.getCurrentValue.cacheCall(feed.tellorId)
        setCacheKey({ id: feed.id, cacheName: 'getCurrentValue', contractId: feed.getCurrentValue.contractId, cacheKey })
    }
    if (!feed.getNewValueCountbyRequestId?.cacheKey) {
        const contract = drizzle.contracts[feed.getNewValueCountbyRequestId.contractId]
        const cacheKey = contract.methods.getNewValueCountbyRequestId.cacheCall(feed.tellorId)
        setCacheKey({ id: feed.id, cacheName: 'getNewValueCountbyRequestId', contractId: feed.getNewValueCountbyRequestId.contractId, cacheKey })
    }
}

const setTellorFeedHistoryCache = (drizzle: any, feed: TellorFeed, setCacheKey: any) => {
    const valueCount = feed.state?.getNewValueCountbyRequestId
    const timestamps = feed.state?.getTimestampbyRequestIDandIndex || {}
    const contract = drizzle.contracts[feed.getNewValueCountbyRequestId.contractId]
    if (valueCount) {
        for (let i = Number(valueCount - 1); i > Math.max(valueCount - 50, 0); i--) {
            if (!feed.getTimestampbyRequestIDandIndex[i]) {
                const cacheKey = contract.methods.getTimestampbyRequestIDandIndex.cacheCall(feed.tellorId, i)
                setCacheKey({ id: feed.id, cacheName: 'getTimestampbyRequestIDandIndex', cacheArgs: i, contractId: feed.getNewValueCountbyRequestId.contractId, cacheKey })
            }

        }

        Object.values(timestamps).forEach((t) => {
            if (!!t && !feed.retrieveData[t]) {
                const cacheKey = contract.methods.retrieveData.cacheCall(feed.tellorId, t)
                setCacheKey({ id: feed.id, cacheName: 'retrieveData', cacheArgs: t, contractId: feed.getNewValueCountbyRequestId.contractId, cacheKey })
            }
        })
    }
}

const setMKRDaoFeedStateCache = (drizzle: any, feed: MKRDaoFeed, setCacheKey: any) => {
    if (!feed.read?.cacheKey) {
        const contract = drizzle.contracts[feed.read.contractId]
        const cacheKey = contract.methods.read.cacheCall()
        setCacheKey({ id: feed.id, cacheName: 'read', contractId: feed.read.contractId, cacheKey })
    }
}

export const setFeedStateCache = (drizzle: any, feed: Feed, setCacheKey: any) => {
    if (!drizzle.contracts) return;

    if (feed.protocol === 'tellor') {
        setTellorFeedStateCache(drizzle, feed as TellorFeed, setCacheKey)
    } else if (feed.protocol === 'chainlink') {
        setChainlinkFeedStateCache(drizzle, feed as ChainlinkFeed, setCacheKey)
    } else if (feed.protocol === 'mkrdao') {
        setMKRDaoFeedStateCache(drizzle, feed as MKRDaoFeed, setCacheKey)
    }
}

export const setFeedStateFullCache = (drizzle: any, feed: Feed, setCacheKey: any, state: any) => {
    if (!drizzle.contracts) return;
    console.debug(feed)

    if (feed.protocol === 'tellor') {
        //setTellorFeedStateCache(drizzle, feed as TellorFeed, setCacheKey)
        setTellorFeedHistoryCache(drizzle, feed as TellorFeed, setCacheKey)
    } else if (feed.protocol === 'chainlink') {
        // setChainlinkFeedStateCache(drizzle, feed as ChainlinkFeed, setCacheKey)
        const feedCL = feed as ChainlinkFeed
        if (!!feedCL.latestRound.contractId && !!feedCL.latestRound.cacheKey) {
            const latestRound = DrizzleSelectors.drizzleStateValueSelector(state, feedCL.latestRound.contractId, 'latestRound', feedCL.latestRound.cacheKey)
            setChainlinkFeedRoundStateCache(drizzle, feed as ChainlinkFeed, setCacheKey, latestRound)
        }
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
    let getNewValueCountbyRequestId;
    let getTimestampbyRequestIDandIndex;
    let retrieveData;
    if (feed.getCurrentValue.cacheKey) {
        getCurrentValue = DrizzleSelectors.drizzleStateValueSelector(state, feed.getCurrentValue.contractId, 'getCurrentValue', feed.getCurrentValue.cacheKey)
    }
    if (feed.getNewValueCountbyRequestId.cacheKey) {
        getNewValueCountbyRequestId = DrizzleSelectors.drizzleStateValueSelector(state, feed.getNewValueCountbyRequestId.contractId, 'getNewValueCountbyRequestId', feed.getNewValueCountbyRequestId.cacheKey)
    }
    if (feed.getTimestampbyRequestIDandIndex) {
        getTimestampbyRequestIDandIndex = Object.fromEntries(Object.values(feed.getTimestampbyRequestIDandIndex).map((cache) => {
            if (!!cache.cacheKey && !!cache.cacheArgs) {
                const value = DrizzleSelectors.drizzleStateValueSelector(state, feed.getNewValueCountbyRequestId.contractId, 'getTimestampbyRequestIDandIndex', cache.cacheKey)
                return [cache.cacheArgs!, value]
            }
        }) as Iterable<[string, any]>)
    }
    if (feed.retrieveData) {
        retrieveData = Object.fromEntries(Object.values(feed.retrieveData).map((cache) => {
            if (!!cache.cacheKey && !!cache.cacheArgs) {
                const value = DrizzleSelectors.drizzleStateValueSelector(state, feed.getNewValueCountbyRequestId.contractId, 'retrieveData', cache.cacheKey)
                return [cache.cacheArgs!, value]
            }
        }) as Iterable<[string, any]>)
    }

    return { getCurrentValue, getNewValueCountbyRequestId, getTimestampbyRequestIDandIndex, retrieveData }
}

const coinbaseFeedStateSelector: (state: any, feed: CoinbaseFeed) => CoinbaseFeedState = (state, feed) => {
    const coinbaseOracleResponses = coinbaseOracleResponsesSelector(state)
    const latestResponse = coinbaseOracleResponses[coinbaseOracleResponses.length - 1]
    if (!latestResponse) return {}

    console.debug(latestResponse)
    const timestamp = latestResponse.timestamp;
    const message = latestResponse.messages[feed.index];
    const signature = latestResponse.signatures[feed.index];
    const price = latestResponse.prices[feed.symbol];

    return {
        timestamp,
        message,
        signature,
        price
    }
}

const mkrdaoFeedStateSelector: (state: any, feed: MKRDaoFeed) => MKRDaoFeedState = (state, feed) => {
    let read;
    if (feed.read.cacheKey) {
        read = DrizzleSelectors.drizzleStateValueSelector(state, feed.read.contractId, 'read', feed.read.cacheKey)
        if (read) {
            const readBytes = Web3.utils.hexToNumberString(read)
        }

    }
    return { read }
}


export const feedStateSelector: (state: any, feed: Feed) => FeedState = (state, feed) => {
    if (feed.protocol === 'chainlink') {
        const feedState = chainlinkFeedStateSelector(state, feed as ChainlinkFeed)
        const history = Object.keys(feedState.getTimestamp).map((k) => {
            return {
                timestamp: feedState.getTimestamp[k] ? new Date(Number(feedState.getTimestamp[k]) * 1000) : 0,
                value: feedState.getAnswer[k] ? transformAnswer(feed.answerRenderOptions!, feedState.getAnswer[k]) : 0
            }
        }).filter((d) => !!d.timestamp && !!d.value)
        if (feedState) {
            return {
                timestamp: feedState.latestTimestamp,
                value: feedState.latestAnswer,
                history,
                ...feedState
            }
        }
    }
    else if (feed.protocol === 'tellor') {
        const feedState = tellorFeedStateSelector(state, feed as TellorFeed)
        const history = Object.keys(feedState.retrieveData).map((k) => {
            return {
                timestamp: new Date(Number(k) * 1000),
                value: feedState.retrieveData[k] ? transformAnswer(feed.answerRenderOptions!, feedState.retrieveData[k]) : 0
            }
        }).filter((d) => !!d.timestamp && !!d.value)
        if (feedState) {
            return {
                timestamp: feedState.getCurrentValue?._timestampRetrieved,
                value: feedState.getCurrentValue?.value,
                history,
                ...feedState
            }
        }
    } else if (feed.protocol === 'coinbase') {
        const feedState = coinbaseFeedStateSelector(state, feed as CoinbaseFeed)
        return {
            value: feedState.price,
            ...feedState
        }
    } else if (feed.protocol === 'mkrdao') {
        const feedState = mkrdaoFeedStateSelector(state, feed as MKRDaoFeed)
        return {
            value: feedState.read,
            ...feedState
        }
    }
    return null;
}