import { UPDATE_FEED, FeedAction, SET_FEED_CACHE_KEY } from "./types";
export function feedReducer(sess: any, action: FeedAction) {
    const { Feed } = sess;
    switch (action.type) {
        case UPDATE_FEED:
            Feed.withId(action.payload.id).update({ ...action.payload });
            break;
        case SET_FEED_CACHE_KEY:
            const feed = Feed.withId(action.payload.id)
            if (action.payload.cacheArgs) {
                const update = { contractId: action.payload.contractId, cacheKey: action.payload.cacheKey, cacheArgs: action.payload.cacheArgs }
                feed.update({ [action.payload.cacheName]: { ...feed[action.payload.cacheName], [action.payload.cacheArgs]: update } })
            } else {
                feed.update({ [action.payload.cacheName]: { contractId: action.payload.contractId, cacheKey: action.payload.cacheKey } })
            }
            break;
        default:
            break
    }

    return sess;
}
