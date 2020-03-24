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
} from 'reactstrap';

//Drizzle
import { newContextComponents } from "@drizzle/react-components"
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import { EventActions } from "@drizzle/store"
import { EVENT_FETCH } from "../../reducers/events"

import moment from 'moment';
import Moment from 'react-moment';
import { createSelectorCreator, defaultMemoize } from 'reselect'
import { isEqual, cloneDeep } from 'lodash'


import AggregatorChart from "./AggregatorChart"
import AggregatorTable from "./AggregatorTable"
import AggregatorHead from "./AggregatorHead"

import EtherScan from "./EtherScan"



// create a "selector creator" that uses lodash.isEqual instead of ===
const createDeepEqualSelector = createSelectorCreator(
    defaultMemoize,
    isEqual
)

const { ContractData } = newContextComponents

const Aggregator = ({
    contract,
    answerRender = (v) => v,
    title,
    fetchEvent,
    responses = [],
    answers = [],
    tx = {},
    blocks = {},
    graphData = [] }) => {

    const drizzleContext = useContext(DrizzleContext.Context)
    const { initialized, drizzle, drizzleState } = drizzleContext

    const [roundIdKey, setRoundIdKey] = useState()
    const [roundId, setRoundId] = useState()
    const [responseBySender, setResponseBySender] = useState({})
    const [oracleCount, setOracleCount] = useState(1)

    useEffect(() => {
        const web3Contract = drizzle.contracts[contract]
        console.debug(web3Contract)
        //Get Past responses
        const key = drizzle.contracts[contract].methods.latestRound.cacheCall()
        setRoundIdKey(key)
    }, []);

    useEffect(() => {
        if (roundIdKey) {
            const newRound = drizzleState.contracts[contract].latestRound[roundIdKey]?.value
            if (newRound != roundId) {
                setRoundId(newRound)
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
                max: 100
            })

            const pastRounds = []
            for (let i = roundId - 50; i <= roundId; i++) {
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
                max: 1000
            })
        }
    }, [roundId])

    useEffect(() => {
        // Set Responses
        const roundResponses = responses.filter((e) => e.returnValues.answerId === roundId)
        const reponsesObj = {}
        roundResponses.forEach((e) => reponsesObj[e.returnValues.sender] = e);
        setResponseBySender(reponsesObj);
    }, [responses])

    useEffect(() => {
        const responsesLength = Object.keys(responseBySender).length;
        if (responsesLength > oracleCount) {
            //console.debug(responsesLength)
            setOracleCount(responsesLength);
        }
    }, [responseBySender])


    //if (!initialized) return null;

    //const dataMin = Math.min(...graphData.data)
    //const dataMax = Math.max(...graphData.data)
    //console.debug('render')

    return (
        <div>
            <Card>
                <CardHeader>{title}</CardHeader>
                <CardBody>
                    <AggregatorHead contract={contract} answerRender={answerRender} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>24h History</CardHeader>
                <CardBody>
                    <AggregatorChart data={graphData} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Oracles data</CardHeader>
                <CardBody>
                    <AggregatorTable
                        contract={contract}
                        answerRender={answerRender}
                        roundId={roundId}
                        tx={tx}
                        blocks={blocks}
                        oracleCount={oracleCount}
                        responseBySender={responseBySender}
                    />
                </CardBody>
            </Card>
        </div>
    )
}

const txSelector = state => state.tx
const blocksSelector = state => state.blocks
const eventsSelector = (state, { contract }) => state.events[contract]
const makeResponsesSelector = () => {
    return createDeepEqualSelector(eventsSelector, events => events?.ResponseReceived || [])
}
const makeAnswersSelector = () => {
    return createDeepEqualSelector(eventsSelector, events => events?.AnswerUpdated || [])
}
const makeGraphDataSelector = () => {
    return createDeepEqualSelector(makeAnswersSelector(), answers => {
        // Filter 1 per round
        const answersPerRound = {}
        answers.forEach(e => {
            answersPerRound[e.returnValues.roundId] = e
        });

        return Object.values(answersPerRound).map(v => {
            return ({
                'x': moment.unix(v.returnValues.timestamp),
                'y': v.returnValues.current * 1e-8
            })
        })
    })
}

const makeMapStateToProps = () => {
    const mapStateToProps = (state, props) => {
        return {
            tx: txSelector(state),
            blocks: blocksSelector(state),
            answers: makeAnswersSelector()(state, props),
            responses: makeResponsesSelector()(state, props),
            graphData: makeGraphDataSelector()(state, props)
        }
    }
    return mapStateToProps
}

function mapDipatchToProps(dispatch) {
    return {
        fetchEvent: ({ event, name, options, max }) => dispatch({ type: EVENT_FETCH, name, event, options, max }),
    }
}

export default connect(makeMapStateToProps, mapDipatchToProps)(memo(Aggregator));