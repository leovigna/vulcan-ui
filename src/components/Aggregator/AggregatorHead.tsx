import React, { memo } from 'react';
import moment from 'moment';
import EtherScan from "./EtherScan"
import { withRenderCount } from 'react-render-counter';
import {
    CListGroup as ListGroup,
    CListGroupItem as ListGroupItem,
} from '@coreui/react';


const AggregatorHead = ({
    address,
    latestRound,
    latestAnswer,
    latestTimestamp,
    answerRender,
    count }) => {
    console.debug(`[RENDER] AggregatorHead ${count}`)

    const updateDate = moment(latestTimestamp, 'X');
    const nextUpdateDate = updateDate.add(1, 'hours');
    const diff = moment.duration(nextUpdateDate.diff(moment()))

    return (
        <ListGroup>
            <ListGroupItem><EtherScan address={address} /></ListGroupItem>
            <ListGroupItem>Round ID {latestRound || 'Loading...'}</ListGroupItem>
            <ListGroupItem>{latestAnswer ? answerRender(latestAnswer) : 'Loading...'}</ListGroupItem>
            <ListGroupItem>Last update&nbsp;
            {latestTimestamp ? updateDate.format('LLLL') : 'Loading...'}
            </ListGroupItem>
            <ListGroupItem>Next update (every 1hr)&nbsp;
                {latestTimestamp ? `${diff.hours()}:${diff.minutes()}:${diff.seconds()}` : 'Loading...'}
            </ListGroupItem>
        </ListGroup>)
}

export default memo(withRenderCount(AggregatorHead));