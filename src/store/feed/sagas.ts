import { RefreshMKRDaoFeedAction, REFRESH_MKRDAO_FEED, REFRESH_FEED, RefreshChainlinkFeedAction, RefreshFeedAction, REFRESH_CHAINLINK_FEED, REFRESH_FEED_LIST, RefreshFeedListAction, UPDATE_FEED } from "./types"
import { FETCH_EVENT, FetchEventAction } from "../event/types"
import { put, takeEvery, all, fork, spawn } from "redux-saga/effects"
import { fetchEvent } from "../event/actions"
import { fetchBlock } from "../block/actions"

function* refreshChainlinkFeed(action: RefreshChainlinkFeedAction) {
    yield put({
        type: UPDATE_FEED,
        payload: {
            id: action.payload.feed.id,
            refreshed: true
        }
    })
}

function* refreshMKRDaoFeed(action: RefreshMKRDaoFeedAction) {
    const web3Contract = action.payload.drizzle.contracts[action.payload.feed.address]
    const currentBlock = action.payload.currentBlock
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
        const lastBlocks = 6 * 60 * 24
        yield spawn(yield put, fetchEvent({
            event: 'LogValue',
            options: { fromBlock: currentBlock.number - lastBlocks, toBlock: 'latest' },
            max: 25, web3Contract,
            fetchTransaction: false, fetchBlock: false
        }))
    }
}

function* refreshFeed(action: RefreshFeedAction) {
    if (action.payload.feed.refreshed) return;

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
                type: UPDATE_FEED,
                payload: {
                    id: action.payload.feed.id,
                    refreshed: true
                }
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
}