import React from 'react';
import {
    CCol as Col,
} from '@coreui/react'
import {
    useHistory
} from "react-router-dom"

import FeedCardDetailed from './FeedCardDetailed'
import { FeedTypes, ProtocolTypes } from '../../store/types'

export interface FeedDetailed extends FeedTypes.FeedBase {
    hearted: boolean,
    protocolImg: string,
    nodeCount: number
}
export interface FeedStateDetailed {
    value: string,
    timestamp: string
}
interface Props {
    feeds: FeedDetailed[],
    feedValues: {
        [key: string]: FeedStateDetailed
    },
    setContractFavorite: any
}

const FeedCardDetailedGrid = ({ feeds, feedValues, setContractFavorite }: Props) => {
    const history = useHistory();
    return (<> {
        feeds.map(({ id, title, name, hearted, ens, protocol, address, networkId, protocolImg, nodeCount }, idx) => {
            const feedValue = feedValues[id]
            const value = feedValue?.value
            const lastUpdate = feedValue?.timestamp
            const url = `/feeds/${protocol}/${name}`

            return (<Col key={idx} lg="4" md="6" xs="12">
                <FeedCardDetailed onHeartClick={() => setContractFavorite({ id, address, networkId, favorite: !hearted })} href={url} handleClickViewButton={() => history.push(url)} address={address} protocolImg={protocolImg} feedName={title} value={value} hearted={hearted} feedENS={ens} nodeCount={nodeCount} lastUpdate={lastUpdate} />
            </Col>)
        })
    }</>)
}

export default FeedCardDetailedGrid;