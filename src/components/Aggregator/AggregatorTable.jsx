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
import { isEqual } from 'lodash';
import { connect } from "react-redux"
import { withRenderCount } from 'react-render-counter';


import EtherScan from "./EtherScan"

const { ContractData } = newContextComponents

const AggregatorTable = ({
    count,
    contract,
    responses = [],
    answerRender }) => {

    console.debug(`AggregatorTable ${count}`)

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
                    responses.map((e) => {
                        const { returnValues, transactionHash, transaction, block } = e;
                        const answer = (returnValues?.response || 0);
                        const gasPrice = ((transaction?.gasPrice || 0) * 1e-9).toFixed(2);
                        const timestamp = block?.timestamp;

                        return (<tr key={transactionHash}>
                            <td>
                                <div><EtherScan address={returnValues?.sender} /></div>
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
                        </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    );
};


export default memo(withRenderCount(AggregatorTable));