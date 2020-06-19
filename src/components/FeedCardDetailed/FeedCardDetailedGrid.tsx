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
    protocols: {
        [key: string]: ProtocolTypes.Protocol
    },
    contractStates: [any],
    networkId: string,
    setContractFavorite: any
}

const FeedCardDetailedGrid = ({ feeds, protocols, setContractFavorite }: Props) => {
    const history = useHistory();
    return (<> {
        feeds.map(({ id, title, name, value, hearted, ens, protocol, nodeCount, lastUpdate, address, networkId }, idx) => {
            const url = protocol && name ? `/feeds/${protocol}/${name}` : `/feeds/${address}`
            const feedProtocol = protocols[protocol]
            return (<Col key={idx} lg="4" md="6" xs="12">
                <FeedCardDetailed onHeartClick={() => setContractFavorite({ id, address, networkId, favorite: !hearted })} href={url} handleClickViewButton={() => history.push(url)} address={address} protocolImg={feedProtocol?.img} feedName={title} value={value} hearted={hearted} feedENS={ens} nodeCount={nodeCount} lastUpdate={lastUpdate} />
            </Col>)
        })
    }</>)
}

export default FeedCardDetailedGrid;