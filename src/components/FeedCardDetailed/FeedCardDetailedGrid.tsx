import React from 'react';
import {
    CCol as Col,
} from '@coreui/react'
import {
    useHistory
} from "react-router-dom"

import FeedCardDetailed from './FeedCardDetailed'
import { FeedTypes } from '../../store/types'

interface Props {
    feeds: FeedTypes.FeedBase[],
    feedValues: {
        [key: string]: FeedTypes.FeedState
    },
    setContractFavorite: any
}

const FeedCardDetailedGrid = ({ feeds, feedValues, setContractFavorite }: Props) => {
    const history = useHistory();
    return (<> {
        feeds.map(({ id, title, name, ens, protocol, protocolInfo, address, networkId, favorite }, idx) => {
            const feedValue = feedValues[id]
            const value = feedValue?.value || ''
            const lastUpdate = feedValue?.timestamp
            const url = `/feeds/${protocol}/${name}`
            const hearted = favorite?.favorite || false
            const protocolImg = protocolInfo?.img || ''

            return (<Col key={idx} lg="4" md="6" xs="12">
                <FeedCardDetailed onHeartClick={() => setContractFavorite({ id, address, networkId, favorite: !hearted })} href={url} handleClickViewButton={() => history.push(url)} address={address} protocolImg={protocolImg} feedName={title} value={value} hearted={hearted} feedENS={ens} nodeCount={0} lastUpdate={lastUpdate} />
            </Col>)
        })
    }</>)
}

export default FeedCardDetailedGrid;