import { RefreshMKRDaoFeedAction, REFRESH_MKRDAO_FEED, REFRESH_FEED, RefreshChainlinkFeedAction, RefreshFeedAction, REFRESH_CHAINLINK_FEED, REFRESH_FEED_LIST, RefreshFeedListAction, UPDATE_FEED, RefreshTellorFeedAction, REFRESH_TELLOR_FEED } from "./types"
import { put, takeEvery, all, fork, spawn } from "redux-saga/effects"
import { fetchEvent } from "../event/actions"
import { fetchBlock } from "../block/actions"
import { delay } from "redux-saga"

function* refreshChainlinkFeed(action: RefreshChainlinkFeedAction) {
    const web3Contract = action.payload.drizzle.contracts[action.payload.feed.address]
    if (action.payload.feed.refreshed) return;

    if (action.payload.feed.state?.latestRound) {
        yield put({
            type: UPDATE_FEED,
            payload: {
                id: action.payload.feed.id,
                refreshed: true
            }
        })

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
}

function* refreshTellorFeed(action: RefreshTellorFeedAction) {
    const web3Contract = action.payload.drizzle.contracts[action.payload.feed.address]

    if (action.payload.feed.refreshed) return;
    yield put({
        type: UPDATE_FEED,
        payload: {
            id: action.payload.feed.id,
            refreshed: true
        }
    })

    /*
    yield spawn(yield put, fetchEvent({
        event: 'NewValue',
        options: {
            fromBlock: 0,
            toBlock: 'latest',
            filter: { _requestId: action.payload.feed.tellorId }
        },
        max: 25, web3Contract,
        fetchTransaction: false, fetchBlock: false
    }))
    */

}

function* refreshMKRDaoFeed(action: RefreshMKRDaoFeedAction) {
    const web3Contract = action.payload.drizzle.contracts[action.payload.feed.address]
    const currentBlock = action.payload.currentBlock
    if (action.payload.feed.refreshed) {
        if (action.payload.feed.state?.latestLogValue) {
            // console.debug(action.payload.feed.state?.latestLogValue)
            yield put(fetchBlock({ number: action.payload.feed.state?.latestLogValue.blockNumber, networkId: action.payload.feed.networkId }))
        }
        return
    };

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

        //6*60*48
        const lastBlocks = 6 * 60 * 12 //Last 12 hours
        yield spawn(yield put, fetchEvent({
            event: 'LogValue',
            options: { fromBlock: currentBlock.number - lastBlocks, toBlock: 'latest' },
            max: 25, web3Contract,
            fetchTransaction: false, fetchBlock: false
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