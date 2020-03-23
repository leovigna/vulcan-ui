/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { useState, useContext, useEffect } from 'react';
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

import moment from 'moment';
import Moment from 'react-moment';
import { TX_RECEIVED, TX_FETCH } from "../../reducers/txcache"
import { TODOS_RECEIVED, TODOS_FETCH } from "../../reducers/todos"
import { BLOCK_RECEIVED, BLOCK_FETCH } from "../../reducers/blocks"

const { ContractData } = newContextComponents

const EtherScan = ({ address, tx }) => {
    if (address)
        return (<a href={"https://etherscan.io/address/" + address}>{address}</a>)
    if (tx)
        return (<a href={"https://etherscan.io/tx/" + tx}>{tx.slice(0, 10) + "..."}</a>)

    return null;
}


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

function mapStateToProps(state, ownProps) {
    const { contract } = ownProps;
    const { tx, blocks, contracts } = state
    const events = contracts[contract]?.events || [];

    return { tx, blocks, events }
}

function mapDipatchToProps(dispatch) {
    return {
        reponseReceived: ({ event, name }) => dispatch({ type: 'EVENT_FIRED', name, event }),
    }
}

const AggregatorTable = connect(mapStateToProps, mapDipatchToProps)(({ contract, tx, blocks, answerRender, reponseReceived, events }) => {
    const drizzleContext = useContext(DrizzleContext.Context)
    const { drizzle, drizzleState } = drizzleContext

    const [roundIdKey, setRoundIdKey] = useState()
    const [roundId, setRoundId] = useState()
    const [answers, setAnswers] = useState({})
    const [oracleCount, setOracleCount] = useState(5)

    useEffect(() => {
        const key = drizzle.contracts[contract].methods.latestRound.cacheCall()
        setRoundIdKey(key)
    }, []);

    useEffect(() => {
        const events = {};
        const web3Contract = drizzle.contracts[contract]
        if (roundId) {
            web3Contract.events.ResponseReceived({
                fromBlock: 0,
                toBlock: 'latest',
                filter: { answerId: roundId }
            }).on('data', (event) => {
                reponseReceived({ event, name: contract })
            })
        }
    }, [roundId])

    useEffect(() => {
        const eventsFiltered = events.filter((e) => e.returnValues.answerId === roundId)
        let a = {}
        eventsFiltered.forEach((e) => a[e.returnValues.sender] = e);
        setAnswers(a);
    }, [events])


    useEffect(() => {
        const answersLength = Object.keys(answers).length;
        if (answersLength > oracleCount) {
            //console.debug(answersLength)
            setOracleCount(answersLength);
        }
    }, [answers])

    const newRound = drizzleState.contracts[contract].latestRound[roundIdKey]?.value
    if (newRound != roundId) setRoundId(newRound)

    return (
        <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
            <thead className="thead-light">
                <tr>
                    <th>Oracle</th>
                    <th>Answer</th>
                    <th>Gas Price (Gwei)</th>
                    <th>Transaction</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    [...Array(oracleCount).keys()].map((i) => {
                        return (
                            <ContractData
                                key={i}
                                drizzle={drizzle}
                                drizzleState={drizzleState}
                                contract={contract}
                                method={"oracles"}
                                methodArgs={[i]}
                                render={(address) => {
                                    const event = answers[address];
                                    const { returnValues, transactionHash } = event || {};
                                    const answer = (returnValues?.response || 0)
                                    const txData = tx[transactionHash] || {}
                                    const gasPrice = ((txData.gasPrice || 0) * 1e-9).toFixed(2);
                                    const blockData = blocks[txData.blockNumber] || {}
                                    const timestamp = blockData.timestamp
                                    return (<tr>
                                        <td>
                                            <div><EtherScan address={address} /></div>
                                        </td>
                                        <td>
                                            <div>{answerRender(answer)}</div>
                                        </td>
                                        <td>
                                            <div>{gasPrice} Gwei</div>
                                        </td>
                                        <td>
                                            <div><EtherScan tx={transactionHash} /></div>
                                        </td>
                                        <td>
                                            <div>
                                                {timestamp ?
                                                    <Moment unix format="LLLL">
                                                        {timestamp}
                                                    </Moment> : "loading..."}
                                            </div>
                                        </td>
                                    </tr>)
                                }
                                } />
                        )
                    })
                }
            </tbody>
        </Table>
    );
})

const Aggregator = ({ contract, answerRender, title }) => {
    const drizzleContext = useContext(DrizzleContext.Context)
    const { initialized } = drizzleContext

    if (!initialized) return null;
    let ansRend = answerRender;
    if (!ansRend) ansRend = (v) => v;

    return (
        <div>
            <Card>
                <CardHeader>{title}</CardHeader>
                <CardBody>
                    <AggregatorHead contract={contract} answerRender={ansRend} />
                </CardBody>
            </Card>
            <Card>
                <CardHeader>Oracles data</CardHeader>
                <CardBody>
                    <AggregatorTable contract={contract} answerRender={ansRend} />
                </CardBody>
            </Card>
        </div>
    )


}


export default Aggregator;