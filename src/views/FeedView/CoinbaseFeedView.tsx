import React from 'react';
import { compose, flattenProp, withProps } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';

import FeedView from './FeedView'
import { FeedSelectors } from '../../store/selectors'
import { CoinbaseFeed } from '../../store/feed/types'
import { renderAnswer } from '../../store/feed/actions'
import { withSetContractFavorite, withSetCacheKey, withFeed, withDrizzleContext } from '../../hoc'

interface Props {
    setCacheKey: any,
    feed: CoinbaseFeed
}

const CoinbaseFeedView = ({
    feed }: Props) => {
    const {
        answerRenderOptions,
        title,
        address
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
    const feedByCoinbaseId = FeedSelectors.feedByFilterSelector(state, { protocol: ownProps.protocol, tellorId: ownProps.id }, state)
    const feedByName = FeedSelectors.feedByFilterSelector(state, { protocol: ownProps.protocol, name: ownProps.id }, state)
    if (!feedByCoinbaseId && !feedByName) {
        return {}
    }

    if (feedByCoinbaseId && !feedByName) {
        ownProps.history.replace(`/feeds/${ownProps.protocol}/${feedByCoinbaseId.name}`)
        return {
            id: feedByCoinbaseId.id
        }
    }

    return {
        id: feedByName.id
    }
}

CoinbaseFeedView.defaultProps = {
    feed: {}
}

export default compose(
    withSetContractFavorite,
    withSetCacheKey,
    flattenProp('match'),
    flattenProp('params'),
    withProps({ protocol: 'coinbase' }),
    connect(mapStateToProps),
    withFeed,
    withDrizzleContext,
    //@ts-ignore
)(CoinbaseFeedView);