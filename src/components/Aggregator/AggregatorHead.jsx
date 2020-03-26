import React, { useContext, memo } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';

import { DrizzleContext } from "@drizzle/react-plugin"
import { newContextComponents } from "@drizzle/react-components"

import moment from 'moment';
import Moment from 'react-moment';

import EtherScan from "./EtherScan"
import { withRenderCount } from 'react-render-counter';

const { ContractData } = newContextComponents

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
            <ListGroupItem>Round ID {latestRound}</ListGroupItem>
            <ListGroupItem>{answerRender(latestAnswer)}</ListGroupItem>
            <ListGroupItem>Last update&nbsp;
            {updateDate.format('LLLL')}
            </ListGroupItem>
            <ListGroupItem>Next update (every 1hr)&nbsp;
                {`${diff.hours()}:${diff.minutes()}:${diff.seconds()}`}
            </ListGroupItem>
        </ListGroup>)
}

export default memo(withRenderCount(AggregatorHead));