import { createSelector } from 'redux-orm'
import Web3 from 'web3'
import orm from '../orm'
import { Feed, ChainlinkFeed, ChainlinkFeedState, TellorFeed, TellorFeedState, FeedState, CoinbaseFeed, MKRDaoFeed, MKRDaoFeedState, LogValue, AnswerUpdated, ResponseReceived, NewValue, DataRequested } from './types'
import { DrizzleSelectors } from '../selectors'
import { transformAnswer } from './actions'
import { coinbaseOracleResponsesSelector } from '../coinbase/selectors'
import { eventByContractTypeIndexByIdSelector } from '../event/selectors'
import { indexAddressEvent } from '../event/eventByContractTypeIndex'
import { CoinbaseOracleResponse, CoinbaseOracle, CoinbaseTicker } from '../coinbase/types'
import { FeedRef } from '../ref/types'

const emptyArray: Feed[] = []

//@ts-ignore
export const feedResolve: (state: any, feed: FeedRef) => Feed = (state, feed) => {
    const feedState = feedStateSelector(state, feed.ref)
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
    //@ts-ignore
    (_session_: any, id: string) => id,
    (_session_: any, _id_: string, state: any) => state,
    (session: any, id: string, state: any) => {
        const feed = session.Feed.withId(id)
        if (!feed) return null;
        console.debug(state)
        return feedResolve(state, feed)
    }
);

export const feedsByFilterSelector: (ormState: any, filter: any, state: any) => Feed[] = createSelector(
    orm,
    //@ts-ignore
    (_session_: any, filter: any) => filter,
    (_session_: any, _filter_: any, state: any) => state,
    (session: any, filter: any, state: any) => {
        const feeds = session.Feed.filter(filter).toModelArray().map((item: FeedRef) => {
            return feedResolve(state, item)
        });

        if (feeds.length === 0) return emptyArray;
        return feeds;
    }
);

export const feedByFilterSelector: (ormState: any, filter: any, state: any) => Feed = createSelector(
    orm,
    //@ts-ignore
    (_session_: any, filter: any) => filter,
    (_session_: any, _filter_: any, state: any) => state,
    (session: any, filter: any, state: any) => {
        const item = session.Feed.filter(filter).first()
        if (!item) return null;
        return feedResolve(state, item)
    }
);

//Feed State
const chainlinkFeedStateSelector: (state: any, feed: ChainlinkFeed) => ChainlinkFeedState = (state, feed) => {
    let latestAnswer;
    let latestRound;
    let latestTimestamp;
    let getAnswer = {};
    let getTimestamp = {};
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
            return null;
        }) as Iterable<[string, any]>)
    }
    if (feed.getTimestamp) {
        getTimestamp = Object.fromEntries(Object.values(feed.getTimestamp).map((cache) => {
            if (!!cache.cacheKey && !!cache.cacheArgs) {
                const value = DrizzleSelectors.drizzleStateValueSelector(state, cache.contractId, 'getTimestamp', cache.cacheKey)
                return [cache.cacheArgs!, value]
            }
            return null;
        }) as Iterable<[string, any]>)
    }

    const AnswerUpdatedIndex = eventByContractTypeIndexByIdSelector(state, indexAddressEvent({ address: feed.address, event: 'AnswerUpdated' }))
    const ResponseReceivedIndex = eventByContractTypeIndexByIdSelector(state, indexAddressEvent({ address: feed.address, event: 'ResponseReceived' }))

    return {
        latestAnswer,
        latestRound,
        latestTimestamp,
        getAnswer,
        getTimestamp,
        AnswerUpdated: AnswerUpdatedIndex?.events as AnswerUpdated[] || [],
        ResponseReceived: ResponseReceivedIndex?.events as ResponseReceived[] || []
    }
}

const tellorFeedStateSelector: (state: any, feed: TellorFeed) => TellorFeedState = (state, feed) => {
    let getCurrentValue;
    let getNewValueCountbyRequestId;
    let getTimestampbyRequestIDandIndex = {};
    let retrieveData = {};
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
            return null;
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

    const NewValueIndex = eventByContractTypeIndexByIdSelector(state, indexAddressEvent({ address: feed.address, event: 'NewValue' }))
    const DataRequestedIndex = eventByContractTypeIndexByIdSelector(state, indexAddressEvent({ address: feed.address, event: 'DataRequested' }))

    return {
        getCurrentValue,
        getNewValueCountbyRequestId,
        getTimestampbyRequestIDandIndex,
        retrieveData,
        NewValue: NewValueIndex?.events as NewValue[] || [],
        DataRequested: DataRequestedIndex?.events as DataRequested[] || []
    }
}

const coinbaseFeedStateSelector: (state: any, feed: CoinbaseFeed) => CoinbaseOracle | null = (state, feed) => {
    const coinbaseOracleResponses: CoinbaseOracleResponse[] = coinbaseOracleResponsesSelector(state)
    const latestResponse = coinbaseOracleResponses[coinbaseOracleResponses.length - 1] as CoinbaseOracleResponse
    if (!latestResponse) return null;

    const timestamp = latestResponse.timestamp;
    const message = latestResponse.messages[feed.index]!;
    const signature = latestResponse.signatures[feed.index]!;
    const price = latestResponse.prices[feed.symbol as CoinbaseTicker];

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
    }

    let latestLogValue;
    const LogValueIndex = eventByContractTypeIndexByIdSelector(state, indexAddressEvent({ address: feed.address, event: 'LogValue' }))
    if (LogValueIndex) {
        LogValueIndex.events.sort((a, b) => b.blockNumber - a.blockNumber)
        latestLogValue = LogValueIndex.events[0]!
    }

    return { read, LogValue: LogValueIndex?.events as LogValue[] || [], latestLogValue: latestLogValue as LogValue }
}


//@ts-ignore
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
                ...feedState,
                timestamp: feedState.latestTimestamp,
                value: feedState.latestAnswer,
                history
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
                ...feedState,
                timestamp: feedState.getCurrentValue?._timestampRetrieved,
                value: feedState.getCurrentValue?.value,
                history
            }
        }
    } else if (feed.protocol === 'coinbase') {
        const feedState = coinbaseFeedStateSelector(state, feed as CoinbaseFeed)
        return {
            ...feedState,
            value: feedState?.price
        }
    } else if (feed.protocol === 'mkrdao') {
        const feedState = mkrdaoFeedStateSelector(state, feed as MKRDaoFeed)
        let value;
        let timestamp;
        try {
            //Short-term hack, slice bytes to 32-bit
            const rawHex = feedState.latestLogValue?.returnValues.val
            if (rawHex) value = Web3.utils.toBN(rawHex).div(Web3.utils.toBN('1000000000')).toNumber()
            timestamp = feedState.latestLogValue?.block?.timestamp
        } catch (error) {
            console.error(error)
        }

        const history = feedState.LogValue.map((e) => {
            const value = Web3.utils.toBN(e.returnValues.val).div(Web3.utils.toBN('1000000000')).toNumber()
            const timestamp = e.block?.timestamp
            return {
                value: transformAnswer(feed.answerRenderOptions!, value),
                timestamp: timestamp ? new Date(Number(timestamp) * 1000) : 0,
            }
        }).filter((d) => !!d.timestamp && !!d.value)

        return {
            ...feedState,
            value,
            timestamp,
            history
        }
    }
    return null;
}