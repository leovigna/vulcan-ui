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
import { pure } from 'recompose';


import EtherScan from "./EtherScan"

const { ContractData } = newContextComponents

const AggregatorTable = ({
    roundId,
    contract,
    tx,
    blocks,
    answerRender,
    oracleCount,
    responseBySender }) => {
    const drizzleContext = useContext(DrizzleContext.Context)
    const { drizzle, drizzleState } = drizzleContext

    return (
        <Table hover responsive className="table-outline mb-0 d-sm-table">
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
                                    const event = responseBySender[address];
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
};

export default memo(AggregatorTable);