import { RefreshMKRDaoFeedAction, REFRESH_MKRDAO_FEED, REFRESH_FEED, RefreshChainlinkFeedAction, RefreshFeedAction, REFRESH_CHAINLINK_FEED, REFRESH_FEED_LIST, RefreshFeedListAction, UPDATE_FEED } from "./types"
import { FETCH_EVENT, FetchEventAction } from "../event/types"
import { put, takeEvery, all, fork } from "redux-saga/effects"

function* refreshChainlinkFeed(action: RefreshChainlinkFeedAction) {
}

function* refreshMKRDaoFeed(action: RefreshMKRDaoFeedAction) {
    const web3Contract = action.payload.drizzle.contracts[action.payload.feed.address]

    yield put({
        type: FETCH_EVENT,
        payload: { event: 'LogValue', options: { fromBlock: 0, toBlock: 'latest' }, max: 25, web3Contract, fetchTransaction: true, fetchBlock: true }
    } as FetchEventAction)
}

function* refreshFeed(action: RefreshFeedAction) {
    if (action.payload.feed.refreshed) return;
    yield put({
        type: UPDATE_FEED,
        payload: {
            id: action.payload.feed.id,
            refreshed: true
        }
    })

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