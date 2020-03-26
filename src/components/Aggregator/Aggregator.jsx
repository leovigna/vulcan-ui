/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { useState, useContext, useEffect, memo } from 'react';
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Table,
    ListGroup,
    ListGroupItem,
    Button
} from 'reactstrap';

//Drizzle
import { newContextComponents } from "@drizzle/react-components"
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import { EventActions } from "@drizzle/store"
import { FETCH_EVENT } from "../../actions"

import moment from 'moment';
import Moment from 'react-moment';
import { createSelectorCreator, createSelector, defaultMemoize } from 'reselect'
import { isEqual, cloneDeep } from 'lodash'
import { indexAddressEvent } from "../../orm/models/eventByContractTypeIndex"


import AggregatorChart from "./AggregatorChart"
import AggregatorTable from "./AggregatorTable"
import AggregatorHead from "./AggregatorHead"

import EtherScan from "./EtherScan"

import {
    eventSelector,
    eventFilterSelector,
    graphDataSelector,
    contractByNameSelector,
    emptyArray,
    eventByContractTypeIndexSelector,
    eventIndexedFilterSelector,
    eventIndexedFilterSelector2
} from "../../selectors"

const { ContractData } = newContextComponents

const Aggregator = ({
    historyRange = 10,
    drizzle,
    contract,
    contractState = {},
    answerRender = (v) => v,
    title,
    fetchEvent,
    responses = [],
    answers = [],
    tx = {},
    blocks = {},
    graphData = [] }) => {

    const [roundIdKey, setRoundIdKey] = useState()
    const [roundId, setRoundId] = useState()

    useEffect(() => {
        const key = drizzle.contracts[contract].methods.latestRound.cacheCall()
        setRoundIdKey(key)
    }, []);

    useEffect(() => {
        if (roundIdKey) {
            const latestRound = contractState?.latestRound
            if (latestRound) {
                const newRound = latestRound[roundIdKey]?.value;
                if (newRound != roundId) {
                    setRoundId(newRound)
                }
            }
        }
    })

    useEffect(() => {
        const web3Contract = drizzle.contracts[contract]
        if (roundId) {
            fetchEvent({
                event: web3Contract.events.ResponseReceived,
                name: contract,
                options: {
                    fromBlock: 0,
                    toBlock: 'latest',
                    filter: { answerId: roundId }
                },
                //web3: drizzleState.web3,
                max: 100
            })

            const pastRounds = []
            for (let i = roundId - historyRange; i <= roundId; i++) {
                pastRounds.push(i)
            }
            console.debug(pastRounds)

            fetchEvent({
                event: web3Contract.events.AnswerUpdated,
                name: contract,
                options: {
                    fromBlock: 0,
                    toBlock: 'latest',
                    filter: { roundId: pastRounds }
                },
                max: 1000000
            })
        }
    }, [roundId])

    return (
        <div>
            <Card>
                <CardHeader>{title}</CardHeader>
                <CardBody>
                    <AggregatorHead contract={contract} answerRender={answerRender} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>History</CardHeader>
                <CardBody>
                    <AggregatorChart contract={contract} historyRange={historyRange} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Oracles data</CardHeader>
                <CardBody>
                    <AggregatorTable
                        contract={contract}
                        answerRender={answerRender}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

const mapStateToProps = (state, props) => {
    return {
        contractState: contractByNameSelector(state, props.contract),
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchEvent: ({ event, web3, name, options, max }) => dispatch({ type: FETCH_EVENT, name, event, options, max }),
    }
}

const ConnectedAggregator = memo(connect(mapStateToProps, mapDispatchToProps)(Aggregator))

const WrappedAggregator = (props) => {

    return (<div>
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const { drizzle, initialized } = drizzleContext;

                if (!initialized) {
                    return "Loading..."
                }

                return (
                    <ConnectedAggregator historyRange={24} drizzle={drizzle} {...props} />
                )
            }}
        </DrizzleContext.Consumer></div>)
}

export default WrappedAggregator;