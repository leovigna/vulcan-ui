import React, { useEffect, useState, useContext } from 'react';
import { compose, flattenProp, lifecycle, withStateHandlers } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';
import { DrizzleContext } from "@drizzle/react-plugin"

import FeedView from './FeedView'
import { FeedSelectors } from '../../store/selectors'
import { TellorFeed, SetFeedCacheKeyActionInput } from '../../store/feed/types'
import { setFeedCacheKey, renderAnswer } from '../../store/feed/actions'
import { useDrizzleCache } from '../../hoc'

interface Props extends TellorFeed {
    setCacheKey: any
}

const TellorFeedView = ({
    id,
    answerRenderOptions,
    title,
    address,
    tellorId,
    getCurrentValue,
    setCacheKey }: Props) => {
    const currentValue = useDrizzleCache(DrizzleContext.Context, { id, cacheName: 'getCurrentValue', cacheArgs: [tellorId] }, getCurrentValue, setCacheKey)

    const loading = !currentValue
    if (loading) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    const latestAnswer = currentValue.value ? renderAnswer(answerRenderOptions, currentValue.value) : null;
    const latestTimestamp = currentValue._timestampRetrieved;
    const lastUpdate = latestTimestamp ? moment(latestTimestamp, 'X').format('LLLL') : null;

    const feedViewProps = {
        title: title,
        address: `${address} - ${tellorId}`,
        answer: loading ? 'Loading...' : latestAnswer,
        lastUpdate: loading ? 'Loading...' : lastUpdate
    }

    return (<FeedView {...feedViewProps} />);
}

const mapStateToProps = (state: any, ownProps: any) => {
    const feedById = FeedSelectors.feedByFilterSelector(state, { protocol: 'tellor', tellorId: ownProps.tellorId })
    const feedByName = FeedSelectors.feedByFilterSelector(state, { protocol: 'tellor', name: ownProps.tellorId })

    if (!feedById && !feedByName) {
        return {
            address: TellorClient.defaultUserContractAddress,
            granularity: 1
        }
    }

    if (feedById && !feedByName) {
        ownProps.history.replace(`/feeds/tellor/${feedById.name}`)
        return {
            ...feedById
        }
    }

    return {
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
)(TellorFeedView);