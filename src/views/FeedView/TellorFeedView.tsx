import React, { useEffect } from 'react';
import { compose, flattenProp, lifecycle } from 'recompose'
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

const withDidMountStateMessages = lifecycle({
    componentDidUpdate() {
        const infoPromise = client.getInfo()
        const requestInfoPromise = client.getRequestInfo(this.props.tellorId)
        const requestValuePromise = client.getRequestValue(this.props.tellorId)
        Promise.all([infoPromise, requestInfoPromise, requestValuePromise]).then(([info, requestInfo, requestValue]) => {
            console.debug(info)
            console.debug(requestInfo)
            console.debug(requestValue)
        })
        //this.setState({ loading: false, messages });
    }
});

const TellorFeedView = ({
    tellorId }: Props) => {

    let latestAnswer;
    let latestTimestamp;

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
    withTellorNameToId,
    withDidMountStateMessages
)(TellorFeedView);