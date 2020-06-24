import React, { useContext } from 'react';
import { compose, flattenProp, withProps } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';
import { DrizzleContext } from "@drizzle/react-plugin"

import FeedView from './FeedView'
import { FeedSelectors } from '../../store/selectors'
import { SetFeedCacheKeyActionInput, ChainlinkFeed } from '../../store/feed/types'
import { setFeedCacheKey, renderAnswer } from '../../store/feed/actions'
import { useDrizzleCache, withFeed, withDrizzleContext, withFeedCache, withSetContractFavorite, withSetCacheKey, withFeedHistoryCache } from '../../hoc'

interface Props {
    protocol: string,
    feed: ChainlinkFeed
}

const ChainlinkFeedView = ({
    feed
}: Props) => {
    const {
        id,
        answerRenderOptions,
        address,
        title,
    } = feed || {}
    const latestAnswerValue = feed?.state?.value
    const latestTimestampValue = feed?.state?.timestamp
    const latestRoundValue = feed?.state?.latestRound

    const loading = !latestAnswerValue || !latestTimestampValue || !latestRoundValue
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
    const feedByAddress = FeedSelectors.feedByFilterSelector(state, { protocol: ownProps.protocol, address: ownProps.id }, state)
    const feedByName = FeedSelectors.feedByFilterSelector(state, { protocol: ownProps.protocol, name: ownProps.id }, state)
    console.debug(feedByName)

    if (!feedByAddress && !feedByName) {
        return {}
    }

    if (feedByAddress && !feedByName) {
        ownProps.history.replace(`/feeds/${ownProps.protocol}/${feedByAddress.name}`)
        return {
            id: feedByAddress.id
        }
    }

    return {
        id: feedByName.id
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

ChainlinkFeedView.defaultProps = {
    feed: {}
}


export default compose(
    withSetContractFavorite,
    withSetCacheKey,
    flattenProp('match'),
    flattenProp('params'),
    withProps({ protocol: 'chainlink' }),
    connect(mapStateToProps, mapDispatchToProps),
    withFeed,
    withDrizzleContext,
    withFeedCache,
    withFeedHistoryCache,
)(ChainlinkFeedView);