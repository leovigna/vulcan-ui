import React, { useEffect } from 'react';
import { compose, flattenProp, withProps } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';


import FeedView from './FeedView'
import { FeedSelectors } from '../../store/selectors'
import { ChainlinkFeed, ChainlinkAnswer, RefreshFeedActionInput, RefreshFeedAction } from '../../store/feed/types'
import { renderAnswer } from '../../store/feed/actions'
import { withFeed, withDrizzleContext, withSetContractFavorite, withSetCacheKey, withRefreshFeed, withNetworkId, withCurrentBlock } from '../../hoc'
import { Block } from '../../store/block/types';
import { SetContractFavoriteActionInput, SetContractFavoriteAction } from '../../store/contractFavorite/types';

interface Props {
    feed: ChainlinkFeed
    currentBlock: Block;
    setContractFavorite: (payload: SetContractFavoriteActionInput) => SetContractFavoriteAction;
    refreshFeed: (payload: RefreshFeedActionInput) => RefreshFeedAction,
    drizzleContext: any
}

const ChainlinkFeedView = ({
    feed,
    currentBlock,
    drizzleContext,
    refreshFeed
}: Props) => {
    const {
        answerRenderOptions,
        address,
        title
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
    const latestRoundValue = feed?.state?.latestRound

    const loading = !latestAnswerValue || !latestTimestampValue || !latestRoundValue
    if (loading) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;




    let latestAnswerFormatted;
    if (!!latestAnswerValue && !!answerRenderOptions) latestAnswerFormatted = renderAnswer(answerRenderOptions, latestAnswerValue);
    else if (!!latestAnswerValue) latestAnswerFormatted = `${latestAnswerValue}`

    const lastUpdate = latestTimestampValue ? moment(latestTimestampValue, 'X').format('LLLL') : null;
    const responses: ChainlinkAnswer[] = feed?.state ? feed?.state?.ResponseReceived.map((e) => {
        return {
            address: e.returnValues.sender,
            value: e.returnValues.response,
            transactionHash: e.transactionHash,
            gasPrice: e.transaction?.gasPrice || '',
            timestamp: e.block?.timestamp || 0
        }
    }) : []

    const feedViewProps = {
        title: title,
        address,
        answer: loading ? 'Loading...' : latestAnswerFormatted,
        lastUpdate: loading ? 'Loading...' : lastUpdate,
        chartData: feed?.state?.history?.map((d) => { return { x: d.timestamp, y: d.value } }),
        responses
    }

    //@ts-ignore
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

ChainlinkFeedView.defaultProps = {
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
    withProps({ protocol: 'chainlink' }),
    connect(mapStateToProps),
    withFeed,
    withDrizzleContext,
    //@ts-ignore
)(ChainlinkFeedView);