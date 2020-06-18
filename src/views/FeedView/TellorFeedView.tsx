import React, { useEffect, useState } from 'react';
import { compose, flattenProp, lifecycle, withStateHandlers } from 'recompose'
import FeedView from './FeedView'
import TellorClient from 'tellor-js'
import web3 from '../../web3global'

const client = new TellorClient(web3)

interface Props {
    tellorId: string
}

const withTellorNameToId = (Component: any) => (props: any) => {
    const idOrName = props.idOrName
    let tellorId = idOrName

    return (<Component tellorId={tellorId} {...props} />)
}

const TellorFeedView = ({
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
    let latestTimestamp = tellorData?.requestValue?.timestampRetrieved;

    const feedViewProps = {
        title: `Tellor Oracle`,
        address: tellorId,
        answer: latestAnswer || 'Loading...',
        lastUpdate: latestTimestamp || 'Loading...',
    }

    return (<FeedView {...feedViewProps} />);
}


export default compose(
    flattenProp('match'),
    flattenProp('params'),
    withTellorNameToId
)(TellorFeedView);