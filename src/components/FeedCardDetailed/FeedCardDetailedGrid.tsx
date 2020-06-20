import React from 'react';
import {
    CCol as Col,
} from '@coreui/react'
import {
    useHistory
} from "react-router-dom"

import FeedCardDetailed from './FeedCardDetailed'
import { FeedTypes, ProtocolTypes } from '../../store/types'

interface Props {
    feeds: [FeedTypes.Feed],
    feedValues: {
        [key: string]: FeedTypes.FeedState
    },
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    },
    contractStates: [any],
    networkId: string,
    setContractFavorite: any
}

const FeedCardDetailedGrid = ({ feeds, feedValues, protocols, setContractFavorite }: Props) => {
    const history = useHistory();
    return (<> {
        feeds.map(({ id, title, name, hearted, ens, protocol, address, networkId }, idx) => {
            const feedValue = feedValues[id]
            const value = feedValue?.value
            const lastUpdate = feedValue?.timestamp

            const url = `/feeds/${protocol}/${name}`
            const feedProtocol = protocols[protocol]
            return (<Col key={idx} lg="4" md="6" xs="12">
                <FeedCardDetailed onHeartClick={() => setContractFavorite({ id, address, networkId, favorite: !hearted })} href={url} handleClickViewButton={() => history.push(url)} address={address} protocolImg={feedProtocol?.img} feedName={title} value={value} hearted={hearted} feedENS={ens} nodeCount={null} lastUpdate={lastUpdate} />
            </Col>)
        })
    }</>)
}

export default FeedCardDetailedGrid;