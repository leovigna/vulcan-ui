import React from 'react';
import {
    CCol as Col,
} from '@coreui/react'
import {
    useHistory
} from "react-router-dom"

import FeedCardDetailed from './FeedCardDetailed'
import { FeedTypes } from '../../store/types'
import { renderAnswer } from '../../store/feed/actions';
import moment from 'moment';
import { SetContractFavoriteActionInput, SetContractFavoriteAction } from '../../store/contractFavorite/types';

interface Props {
    feeds: FeedTypes.Feed[],
    setContractFavorite: (payload: SetContractFavoriteActionInput) => SetContractFavoriteAction;
}

const FeedCardDetailedGrid = ({ feeds, setContractFavorite }: Props) => {
    const history = useHistory();
    return (<> {
        feeds.map(({ id, title, name, ens, protocol, protocolInfo, address, networkId, favorite, state, answerRenderOptions }, idx) => {
            const url = `/feeds/${protocol}/${name}`
            const hearted = favorite?.favorite || false
            const protocolImg = protocolInfo?.img || ''
            const valueRender = state?.value ? renderAnswer(answerRenderOptions!, state!.value) : ''
            const timestampRender = state?.timestamp ? moment(state!.timestamp, 'X').format('MMMM D - h:mm A') : '';

            return (<Col key={idx} lg="4" md="6" xs="12">
                <FeedCardDetailed onHeartClick={() => setContractFavorite({ id, address, networkId, favorite: !hearted })} handleClickViewButton={() => history.push(url)} address={address} protocolImg={protocolImg} feedName={title} value={valueRender} hearted={hearted} feedENS={ens} nodeCount={0} lastUpdate={timestampRender} />
            </Col>)
        })
    }</>)
}

export default FeedCardDetailedGrid;