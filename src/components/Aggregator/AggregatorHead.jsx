import React, { useContext } from 'react';
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

const { ContractData } = newContextComponents

const AggregatorHead = ({ contract, answerRender }) => {
    //console.debug(contract)
    const drizzleContext = useContext(DrizzleContext.Context)
    const { drizzle, drizzleState, initialized } = drizzleContext

    if (!initialized) return null;

    return (
        <ListGroup>
            <ListGroupItem><EtherScan address={contract} /></ListGroupItem>
            <ListGroupItem>Round ID <ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={contract}
                method="latestRound"
                render={(value) => value}
            /></ListGroupItem>
            <ListGroupItem><ContractData
                drizzle={drizzle}
                drizzleState={drizzleState}
                contract={contract}
                method="latestAnswer"
                render={answerRender}
            /></ListGroupItem>
            <ListGroupItem>Last update&nbsp;
            <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={contract}
                    method="latestTimestamp"
                    render={(value) => {
                        const updateDate = moment(value, 'X');
                        return (updateDate.format('LLLL'))
                    }
                    } />
            </ListGroupItem>
            <ListGroupItem>Next update (every 1hr)&nbsp;
                        <ContractData
                    drizzle={drizzle}
                    drizzleState={drizzleState}
                    contract={contract}
                    method="latestTimestamp"
                    render={(value) => {
                        const updateDate = moment(value, 'X');
                        const nextUpdateDate = updateDate.add(1, 'hours');
                        const diff = moment.duration(nextUpdateDate.diff(moment()))
                        return `${diff.hours()}:${diff.minutes()}:${diff.seconds()}`
                    }
                    } />
            </ListGroupItem>
        </ListGroup>)
}

export default AggregatorHead;