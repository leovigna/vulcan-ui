import { RefreshMKRDaoFeedAction, REFRESH_MKRDAO_FEED, REFRESH_FEED, RefreshChainlinkFeedAction, RefreshFeedAction, REFRESH_CHAINLINK_FEED, REFRESH_FEED_LIST, RefreshFeedListAction, UPDATE_FEED, RefreshTellorFeedAction, REFRESH_TELLOR_FEED, SET_FEED_CACHE_KEY } from "./types"
import { put, takeEvery, all, spawn } from "redux-saga/effects"
import { fetchEvent } from "../event/actions"
import { fetchBlock } from "../block/actions"
import { setFeedCacheKey } from "./actions"

function* refreshChainlinkFeed(action: RefreshChainlinkFeedAction) {
    const { drizzle, feed } = action.payload

    if (action.payload.refreshHistory && feed.state?.latestRound) {
        const latestRound = Number(feed.state.latestRound)
        const contract = drizzle.contracts[feed.latestRound.contractId]
        for (let i = latestRound; i > Math.max(latestRound - 50, 0); i--) {
            if (!feed.getAnswer[i]) {
                const cacheKeyAnswer = contract.methods.getAnswer.cacheCall(i)
                yield put(setFeedCacheKey({ id: feed.id, cacheName: 'getAnswer', cacheArgs: i, contractId: feed.latestRound.contractId, cacheKey: cacheKeyAnswer }))
            }
            if (!feed.getTimestamp[i]) {
                const cacheKeyTimestamp = contract.methods.getTimestamp.cacheCall(i)
                yield put(setFeedCacheKey({ id: feed.id, cacheName: 'getTimestamp', cacheArgs: i, contractId: feed.latestRound.contractId, cacheKey: cacheKeyTimestamp }))
            }
        }

        const web3Contract = action.payload.drizzle.contracts[action.payload.feed.address]
        yield spawn(yield put, fetchEvent({
            event: 'ResponseReceived',
            options: {
                fromBlock: 0,
                toBlock: 'latest',
                filter: { answerId: action.payload.feed.state?.latestRound }
            },
            max: 25, web3Contract,
            fetchTransaction: true, fetchBlock: true
        }))
    }

    if (action.payload.feed.refreshed) return;

    if (action.payload.feed.state?.latestRound) {
        yield put({
            type: UPDATE_FEED,
            payload: {
                id: action.payload.feed.id,
                refreshed: true
            }
        })
    }

    if (!feed.latestAnswer?.cacheKey) {
        const contract = drizzle.contracts[feed.latestAnswer.contractId]
        const cacheKey = contract.methods.latestAnswer.cacheCall()
        yield put(setFeedCacheKey({ id: feed.id, cacheName: 'latestAnswer', contractId: feed.latestAnswer.contractId, cacheKey }))
    }
    if (!feed.latestRound?.cacheKey) {
        const contract = drizzle.contracts[feed.latestRound.contractId]
        const cacheKey = contract.methods.latestRound.cacheCall()
        yield put(setFeedCacheKey({ id: feed.id, cacheName: 'latestRound', contractId: feed.latestRound.contractId, cacheKey }))
    }
    if (!feed.latestTimestamp?.cacheKey) {
        const contract = drizzle.contracts[feed.latestTimestamp.contractId]
        const cacheKey = contract.methods.latestTimestamp.cacheCall()
        yield put(setFeedCacheKey({ id: feed.id, cacheName: 'latestTimestamp', contractId: feed.latestTimestamp.contractId, cacheKey }))
    }
}

function* refreshTellorFeed(action: RefreshTellorFeedAction) {
    const { drizzle, feed } = action.payload
    if (action.payload.refreshHistory) {
        const valueCount = feed.state?.getNewValueCountbyRequestId
        const timestamps = feed.state?.getTimestampbyRequestIDandIndex || {}
        const contract = drizzle.contracts[feed.getNewValueCountbyRequestId.contractId]
        if (valueCount) {
            for (let i = Number(valueCount - 1); i > Math.max(valueCount - 50, 0); i--) {
                if (!feed.getTimestampbyRequestIDandIndex[i]) {
                    const cacheKey = contract.methods.getTimestampbyRequestIDandIndex.cacheCall(feed.tellorId, i)
                    yield put(setFeedCacheKey({ id: feed.id, cacheName: 'getTimestampbyRequestIDandIndex', cacheArgs: i, contractId: feed.getNewValueCountbyRequestId.contractId, cacheKey }))
                }
            }

            yield all(Object.values(timestamps).map((t) => {
                if (!!t && !feed.retrieveData[t]) {
                    const cacheKey = contract.methods.retrieveData.cacheCall(feed.tellorId, t)
                    return put(setFeedCacheKey({ id: feed.id, cacheName: 'retrieveData', cacheArgs: t, contractId: feed.getNewValueCountbyRequestId.contractId, cacheKey }))
                }
            }))
        }


    }

    if (action.payload.feed.refreshed) return;
    yield put({
        type: UPDATE_FEED,
        payload: {
            id: action.payload.feed.id,
            refreshed: true
        }
    })

    if (!feed.getCurrentValue?.cacheKey) {
        const contract = drizzle.contracts[feed.getCurrentValue.contractId]
        const cacheKey = contract.methods.getCurrentValue.cacheCall(feed.tellorId)
        yield put(setFeedCacheKey({ id: feed.id, cacheName: 'getCurrentValue', contractId: feed.getCurrentValue.contractId, cacheKey }))
    }
    if (!feed.getNewValueCountbyRequestId?.cacheKey) {
        const contract = drizzle.contracts[feed.getNewValueCountbyRequestId.contractId]
        const cacheKey = contract.methods.getNewValueCountbyRequestId.cacheCall(feed.tellorId)
        yield put(setFeedCacheKey({ id: feed.id, cacheName: 'getNewValueCountbyRequestId', contractId: feed.getNewValueCountbyRequestId.contractId, cacheKey }))
    }
}

function* refreshMKRDaoFeed(action: RefreshMKRDaoFeedAction) {
    const { drizzle, feed } = action.payload

    const web3Contract = action.payload.drizzle.contracts[action.payload.feed.address]
    const currentBlock = action.payload.currentBlock
    if (action.payload.feed.refreshed) return;

    console.debug("MKRDAO")
    console.debug(currentBlock)

    if (!currentBlock.number) {
        yield put(fetchBlock({ hash: 'latest', networkId: action.payload.feed.networkId }))
    } else {
        yield put({
            type: UPDATE_FEED,
            payload: {
                id: action.payload.feed.id,
                refreshed: true
            }
        })

        if (!feed.read?.cacheKey) {
            const contract = drizzle.contracts[feed.read.contractId]
            const cacheKey = contract.methods.read.cacheCall()
            yield put(setFeedCacheKey({ id: feed.id, cacheName: 'read', contractId: feed.read.contractId, cacheKey }))
        }

        //6*60*48

        const lastBlocks = 6 * 60 * 12 //Last 12 hours
        yield spawn(yield put, fetchEvent({
            event: 'LogValue',
            options: { fromBlock: currentBlock.number - lastBlocks, toBlock: 'latest' },
            max: 25, web3Contract,
            fetchTransaction: false, fetchBlock: true
        }))
    }
}

function* refreshFeed(action: RefreshFeedAction) {
    switch (action.payload.feed.protocol) {
        case 'chainlink':
            yield put({
                type: REFRESH_CHAINLINK_FEED,
                payload: action.payload
            })
            break
        case 'mkrdao':
            yield put({
                type: REFRESH_MKRDAO_FEED,
                payload: action.payload
            })
            break
        case 'tellor':
            yield put({
                type: REFRESH_TELLOR_FEED,
                payload: action.payload
            })
            break
    }

    return;
}

function* refreshFeedList(action: RefreshFeedListAction) {
    yield all(action.payload.feeds.map((feed) => {
        return put({
            type: REFRESH_FEED,
            payload: {
                feed,
                currentBlock: action.payload.currentBlock,
                drizzle: action.payload.drizzle
            }
        } as RefreshFeedAction)
    }))
}

// app root saga
export function* feedsRootSaga() {
    yield takeEvery(REFRESH_FEED_LIST, refreshFeedList)
    yield takeEvery(REFRESH_FEED, refreshFeed)
    yield takeEvery(REFRESH_CHAINLINK_FEED, refreshChainlinkFeed)
    yield takeEvery(REFRESH_MKRDAO_FEED, refreshMKRDaoFeed)
    yield takeEvery(REFRESH_TELLOR_FEED, refreshTellorFeed)
}