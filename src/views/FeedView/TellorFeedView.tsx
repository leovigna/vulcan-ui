import React from 'react';
import { compose, flattenProp, withProps } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';

import FeedView from './FeedView'
import { FeedSelectors } from '../../store/selectors'
import { TellorFeed } from '../../store/feed/types'
import { renderAnswer } from '../../store/feed/actions'
import { withSetContractFavorite, withSetCacheKey, withFeed, withDrizzleContext, withFeedCache, withFeedHistoryCache } from '../../hoc'

interface Props {
    setCacheKey: any,
    feed: TellorFeed
}

const TellorFeedView = ({
    feed }: Props) => {
    const {
        answerRenderOptions,
        title,
        address,
    } = feed || {}

    const latestAnswerValue = feed?.state?.value
    const latestTimestampValue = feed?.state?.timestamp

    const loading = !latestAnswerValue || !latestTimestampValue
    if (loading) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    let latestAnswerFormatted;
    if (!!latestAnswerValue && !!answerRenderOptions) latestAnswerFormatted = renderAnswer(answerRenderOptions, latestAnswerValue);
    else if (!!latestAnswerValue) latestAnswerFormatted = `${latestAnswerValue}`
    const lastUpdate = latestTimestampValue ? moment(latestTimestampValue, 'X').format('LLLL') : null;

    const feedViewProps = {
        title: title,
        address,
        answer: loading ? 'Loading...' : latestAnswerFormatted,
        lastUpdate: loading ? 'Loading...' : lastUpdate,
        chartData: feed?.state?.history?.map((d) => { return { x: d.timestamp, y: d.value } })
    }

    //@ts-ignore
    return (<FeedView {...feedViewProps} />);
}

const mapStateToProps = (state: any, ownProps: any) => {
    const feedByTellorId = FeedSelectors.feedByFilterSelector(state, { protocol: ownProps.protocol, tellorId: ownProps.id }, state)
    const feedByName = FeedSelectors.feedByFilterSelector(state, { protocol: ownProps.protocol, name: ownProps.id }, state)
    if (!feedByTellorId && !feedByName) {
        return {}
    }

    if (feedByTellorId && !feedByName) {
        ownProps.history.replace(`/feeds/${ownProps.protocol}/${feedByTellorId.name}`)
        return {
            id: feedByTellorId.id
        }
    }

    return {
        id: feedByName.id
    }
}

TellorFeedView.defaultProps = {
    feed: {}
}

export default compose(
    withSetContractFavorite,
    withSetCacheKey,
    flattenProp('match'),
    flattenProp('params'),
    withProps({ protocol: 'tellor' }),
    connect(mapStateToProps),
    withFeed,
    withDrizzleContext,
    withFeedCache,
    withFeedHistoryCache
    //@ts-ignore
)(TellorFeedView);