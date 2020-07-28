import { sprintf } from 'sprintf-js';

import {
    SetFeedCacheKeyAction,
    SetFeedCacheKeyActionInput,
    SET_FEED_CACHE_KEY,
    AnswerRenderOptions,
    RefreshFeedAction,
    RefreshFeedActionInput,
    REFRESH_FEED,
    REFRESH_FEED_LIST,
    RefreshFeedListAction,
    RefreshFeedListActionInput
} from './types'

export function refreshFeed(payload: RefreshFeedActionInput): RefreshFeedAction {
    return {
        type: REFRESH_FEED,
        payload
    }
}

export function refreshFeedList(payload: RefreshFeedListActionInput): RefreshFeedListAction {
    return {
        type: REFRESH_FEED_LIST,
        payload
    }
}

export function setFeedCacheKey(payload: SetFeedCacheKeyActionInput): SetFeedCacheKeyAction {
    return {
        type: SET_FEED_CACHE_KEY,
        payload
    }
}

export function renderAnswer(answerRenderOptions: AnswerRenderOptions, answer: string | number): string {
    const answerNumber = Number(answer)

    return sprintf(answerRenderOptions.format, { value: (answerRenderOptions.transform.multiply * answerNumber).toFixed(answerRenderOptions.transform.decimals) })
}

export function transformAnswer(answerRenderOptions: AnswerRenderOptions, answer: string | number): number {
    const answerNumber = Number(answer)

    return Number((answerRenderOptions.transform.multiply * answerNumber).toFixed(answerRenderOptions.transform.decimals))
}