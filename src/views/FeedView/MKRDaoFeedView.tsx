import React from 'react';
import { compose, flattenProp, withProps } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';

import FeedView from './FeedView'
import { FeedSelectors } from '../../store/selectors'
import { MKRDaoFeed } from '../../store/feed/types'
import { renderAnswer } from '../../store/feed/actions'
import { withSetContractFavorite, withSetCacheKey, withFeed, withDrizzleContext, withFeedCache, withFeedHistoryCache } from '../../hoc'

interface Props {
    setCacheKey: any,
    feed: MKRDaoFeed
}

const MKRDaoFeedView = ({
    feed }: Props) => {
    const {
        id,
        answerRenderOptions,
        title,
        address
    } = feed || {}

    const latestAnswerValue = feed?.state?.value
    const latestTimestampValue = feed?.state?.timestamp

    const loading = !latestAnswerValue || !latestTimestampValue
    if (loading) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    const latestAnswerFormatted = latestAnswerValue ? renderAnswer(answerRenderOptions, latestAnswerValue) : null;
    const lastUpdate = latestTimestampValue ? moment(latestTimestampValue, 'X').format('LLLL') : null;

    const feedViewProps = {
        title: title,
        address,
        answer: loading ? 'Loading...' : latestAnswerFormatted,
        lastUpdate: loading ? 'Loading...' : lastUpdate,
        chartData: feed?.state?.history?.map((d) => { return { x: d.timestamp, y: d.value } })
    }

    return (<FeedView {...feedViewProps} />);
}

const mapStateToProps = (state: any, ownProps: any) => {
    const feedByMKRDaoId = FeedSelectors.feedByFilterSelector(state, { protocol: ownProps.protocol, tellorId: ownProps.id }, state)
    const feedByName = FeedSelectors.feedByFilterSelector(state, { protocol: ownProps.protocol, name: ownProps.id }, state)
    if (!feedByMKRDaoId && !feedByName) {
        return {}
    }

    if (feedByMKRDaoId && !feedByName) {
        ownProps.history.replace(`/feeds/${ownProps.protocol}/${feedByMKRDaoId.name}`)
        return {
            id: feedByMKRDaoId.id
        }
    }

    return {
        id: feedByName.id
    }
}

MKRDaoFeedView.defaultProps = {
    feed: {}
}

export default compose(
    withSetContractFavorite,
    withSetCacheKey,
    flattenProp('match'),
    flattenProp('params'),
    withProps({ protocol: 'mkrdao' }),
    connect(mapStateToProps),
    withFeed,
    withDrizzleContext,
    withFeedCache,
    withFeedHistoryCache
)(MKRDaoFeedView);