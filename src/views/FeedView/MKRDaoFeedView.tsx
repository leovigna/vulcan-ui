import React, { useEffect } from 'react';
import { compose, flattenProp, withProps } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';

import FeedView from './FeedView'
import { FeedSelectors } from '../../store/selectors'
import { MKRDaoFeed, RefreshFeedActionInput, RefreshFeedAction } from '../../store/feed/types'
import { renderAnswer } from '../../store/feed/actions'
import { withSetContractFavorite, withSetCacheKey, withFeed, withDrizzleContext, withFeedHistoryCache, withRefreshFeed, withNetworkId, withCurrentBlock } from '../../hoc'
import { Block } from '../../store/block/types';
import { SetContractFavoriteActionInput, SetContractFavoriteAction } from '../../store/contractFavorite/types';

interface Props {
    feed: MKRDaoFeed;
    currentBlock: Block;
    setContractFavorite: (payload: SetContractFavoriteActionInput) => SetContractFavoriteAction;
    refreshFeed: (payload: RefreshFeedActionInput) => RefreshFeedAction,
    drizzleContext: any
}

const MKRDaoFeedView = ({
    feed,
    currentBlock,
    drizzleContext,
    refreshFeed }: Props) => {
    const {
        answerRenderOptions,
        title,
        address
    } = feed || {}
    const { drizzle } = drizzleContext;
    useEffect(() => {
        const timer = setTimeout(() => {
            refreshFeed({
                feed,
                drizzle,
                currentBlock,
                refreshHistory: true
            })
        }, 100);
        return () => clearTimeout(timer);
    })

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
    withRefreshFeed,
    withNetworkId,
    withCurrentBlock,
    flattenProp('match'),
    flattenProp('params'),
    withProps({ protocol: 'mkrdao' }),
    connect(mapStateToProps),
    withFeed,
    withDrizzleContext,
    //@ts-ignore
)(MKRDaoFeedView);