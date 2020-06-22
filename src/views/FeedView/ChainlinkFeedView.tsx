import React, { useContext } from 'react';
import { compose, flattenProp } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';
import { DrizzleContext } from "@drizzle/react-plugin"

import FeedView from './FeedView'
import { FeedSelectors } from '../../store/selectors'
import { SetFeedCacheKeyActionInput, ChainlinkFeed } from '../../store/feed/types'
import { setFeedCacheKey, renderAnswer } from '../../store/feed/actions'
import { useDrizzleCache } from '../../hoc'

interface Props extends ChainlinkFeed {
    setCacheKey: any
}

const ChainlinkFeedView = ({
    id,
    answerRenderOptions,
    address,
    title,
    latestAnswer,
    latestTimestamp,
    latestRound,
    setCacheKey }: Props) => {

    const context = useContext(DrizzleContext.Context)
    const latestAnswerValue = useDrizzleCache(context, { id, cacheName: 'latestAnswer' }, latestAnswer, setCacheKey)
    const latestTimestampValue = useDrizzleCache(context, { id, cacheName: 'latestTimestamp' }, latestTimestamp, setCacheKey)
    const latestRoundValue = useDrizzleCache(context, { id, cacheName: 'latestRound' }, latestRound, setCacheKey)

    const loading = !latestAnswerValue || !latestTimestampValue || !latestRoundValue
    if (loading) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    const latestAnswerFormatted = latestAnswerValue ? renderAnswer(answerRenderOptions, latestAnswerValue) : null;
    const lastUpdate = latestTimestampValue ? moment(latestTimestampValue, 'X').format('LLLL') : null;

    const feedViewProps = {
        title: title,
        address,
        answer: loading ? 'Loading...' : latestAnswerFormatted,
        lastUpdate: loading ? 'Loading...' : lastUpdate
    }

    return (<FeedView {...feedViewProps} />);
}

const mapStateToProps = (state: any, ownProps: any) => {
    const feedById = FeedSelectors.feedByFilterSelector(state, { protocol: 'chainlink', address: ownProps.address })
    const feedByName = FeedSelectors.feedByFilterSelector(state, { protocol: 'chainlink', name: ownProps.address })
    let feedState;

    if (!feedById && !feedByName) {
        return {
        }
    }

    if (feedById && !feedByName) {
        ownProps.history.replace(`/feeds/chainlink/${feedById.name}`)
        feedState = FeedSelectors.feedStateSelector(state, feedById)
        return {
            feedState,
            ...feedById
        }
    }

    feedState = FeedSelectors.feedStateSelector(state, feedByName)
    return {
        feedState,
        ...feedByName
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCacheKey: (payload: SetFeedCacheKeyActionInput) => dispatch(setFeedCacheKey(payload))
    }
}

export default compose(
    flattenProp('match'),
    flattenProp('params'),
    connect(mapStateToProps, mapDispatchToProps)
)(ChainlinkFeedView);