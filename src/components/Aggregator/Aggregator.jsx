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
import { withRenderCount } from 'react-render-counter';


import AggregatorChart from "./AggregatorChart"
import AggregatorTable from "./AggregatorTable"
import AggregatorHead from "./AggregatorHead"

import EtherScan from "./EtherScan"
import { web3ForNetworkId } from '../../web3global'


import {
    eventSelector,
    eventFilterSelector,
    graphDataSelector,
    contractByNameSelector,
    emptyArray,
    eventByContractTypeIndexSelector,
    eventIndexedFilterSelector,
    eventIndexedFilterSelector2,
    makeEventIndexedFilterSelector
} from "../../selectors"

const { ContractData } = newContextComponents

const Aggregator = ({
    networkId = '1',
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
    graphData = [],
    count }) => {
    console.debug(`[RENDER] AggregatorMain ${count}`)

    const [latestRoundKey, setLatestRoundKey] = useState()
    const [latestAnswerKey, setLatestAnswerKey] = useState()
    const [latestTimestampKey, setLatestTimestampKey] = useState()
    const [roundId, setRoundId] = useState()

    useEffect(() => {
        const latestRoundKey = drizzle.contracts[contract].methods.latestRound.cacheCall()
        const latestAnswerKey = drizzle.contracts[contract].methods.latestAnswer.cacheCall()
        const latestTimestampKey = drizzle.contracts[contract].methods.latestTimestamp.cacheCall()
        setLatestRoundKey(latestRoundKey)
        setLatestAnswerKey(latestAnswerKey)
        setLatestTimestampKey(latestTimestampKey)
    }, []);

    useEffect(() => {
        if (latestRoundKey) {
            const latestRound = contractState?.latestRound
            if (latestRound) {
                const newRound = latestRound[latestRoundKey]?.value;
                if (newRound != roundId) {
                    setRoundId(newRound)
                }
            }
        }
    })

    useEffect(() => {
        const web3Contract = drizzle.contracts[contract]
        //console.debug(networkId)
        console.debug(drizzle.web3.currentProvider)
        console.debug(web3ForNetworkId(networkId).currentProvider)
        const web3 = drizzle.web3.givenProvider.networkVersion === networkId ? drizzle.web3 : web3ForNetworkId(networkId)
        //drizzle.web3 = web3

        if (roundId) {
            fetchEvent({
                event: web3Contract.events.ResponseReceived,
                name: contract,
                options: {
                    fromBlock: 0,
                    toBlock: 'latest',
                    filter: { answerId: roundId }
                },
                web3,
                max: 100
            })

            const pastRounds = []
            for (let i = roundId - historyRange; i <= roundId; i++) {
                pastRounds.push(i)
            }

            pastRounds.forEach((roundId) => {
                fetchEvent({
                    event: web3Contract.events.AnswerUpdated,
                    name: contract,
                    options: {
                        fromBlock: 0,
                        toBlock: 'latest',
                        filter: { roundId: roundId }
                    },
                    web3,
                    max: 1
                })
            })
        }
    }, [roundId])

    const latestRound = contractState?.latestRound[latestRoundKey]?.value
    const latestAnswer = contractState?.latestAnswer[latestAnswerKey]?.value
    const latestTimestamp = contractState?.latestTimestamp[latestTimestampKey]?.value

    return (
        <div>
            <Card>
                <CardHeader>{title}</CardHeader>
                <CardBody>
                    <AggregatorHead
                        address={contract}
                        latestRound={latestRound}
                        latestAnswer={latestAnswer}
                        latestTimestamp={latestTimestamp}
                        answerRender={answerRender} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>History</CardHeader>
                <CardBody>
                    <AggregatorChart data={graphData} historyRange={historyRange} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Oracles data</CardHeader>
                <CardBody>
                    <AggregatorTable
                        responses={responses}
                        answerRender={answerRender}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

const ResponseReceivedSelector = makeEventIndexedFilterSelector()

const mapStateToProps = (state, props) => {
    const ResponseReceivedIndexData = { address: props.contract, event: 'ResponseReceived' }
    const ResponseReceivedIndexId = indexAddressEvent(ResponseReceivedIndexData)
    const AnswerUpdatedIndexData = { address: props.contract, event: 'AnswerUpdated' }
    const AnswerUpdatedIndexId = indexAddressEvent(AnswerUpdatedIndexData)

    return {
        contractState: contractByNameSelector(state, props.contract),
        responses: ResponseReceivedSelector(state, ResponseReceivedIndexId),
        graphData: graphDataSelector(state, AnswerUpdatedIndexId)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchEvent: ({ event, web3, name, options, max }) => dispatch({ type: FETCH_EVENT, name, event, options, max, web3 }),
    }
}

const ConnectedAggregator = connect(mapStateToProps, mapDispatchToProps)(memo(withRenderCount(Aggregator)))

const WrappedAggregator = (props) => {

    return (<div>
        <DrizzleContext.Consumer>
            {drizzleContext => {
                const { drizzle, initialized } = drizzleContext;

                if (!initialized) {
                    return "Loading..."
                }

                return (
                    <ConnectedAggregator historyRange={50} drizzle={drizzle} {...props} />
                )
            }}
        </DrizzleContext.Consumer></div>)
}

export default WrappedAggregator;