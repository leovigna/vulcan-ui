import { sprintf } from 'sprintf-js';

import {
    SetFeedCacheKeyAction,
    SetFeedCacheKeyActionInput,
    SET_FEED_CACHE_KEY,
    AnswerRenderOptions
} from './types'

export function setFeedCacheKey(data: SetFeedCacheKeyActionInput): SetFeedCacheKeyAction {
    return {
        type: SET_FEED_CACHE_KEY,
        payload: data
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