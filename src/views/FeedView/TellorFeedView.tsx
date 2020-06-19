import React, { useEffect, useState } from 'react';
import { compose, flattenProp, lifecycle, withStateHandlers } from 'recompose'
import { connect } from 'react-redux'
import moment from 'moment';

import FeedView from './FeedView'
import TellorClient from 'tellor-js'
import web3 from '../../web3global'
import { feedByFilterSelector } from '../../store/selectors'
import { Feed } from '../../store/feed/types'

const client = new TellorClient(web3)

interface Props extends Feed {
    tellorId: string
}

const TellorFeedView = ({
    address,
    title,
    granularity,
    tellorId }: Props) => {
    const [loading, setLoading] = useState(false)
    const [tellorData, setTellorData] = useState({})

    useEffect(() => {
        const infoPromise = client.getInfo()
        const requestInfoPromise = client.getRequestInfo(tellorId)
        const requestValuePromise = client.getRequestValue(tellorId)
        Promise.all([infoPromise, requestInfoPromise, requestValuePromise]).then(([info, requestInfo, requestValue]) => {
            setLoading(false)
            setTellorData({ info, requestInfo, requestValue })
        })
    }, [tellorId])

    console.debug(tellorData)
    const latestAnswer = tellorData?.requestValue?.value;
    const latestTimestamp = tellorData?.requestValue?.timestampRetrieved;

    const lastUpdate = latestTimestamp ? moment(latestTimestamp, 'X').format('LLLL') : null;

    const feedViewProps = {
        title: title,
        address: `${address} - ${tellorId}`,
        answer: loading ? 'Loading...' : '$ ' + (latestAnswer / granularity).toFixed(2),
        lastUpdate: loading ? 'Loading...' : lastUpdate
    }

    return (<FeedView {...feedViewProps} />);
}

const mapStateToProps = (state: any, ownProps: any) => {
    const feedById = feedByFilterSelector(state, { protocol: 'tellor', tellorId: ownProps.tellorId })
    const feedByName = feedByFilterSelector(state, { protocol: 'tellor', name: ownProps.tellorId })

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

export default compose(
    flattenProp('match'),
    flattenProp('params'),
    connect(mapStateToProps)
)(TellorFeedView);