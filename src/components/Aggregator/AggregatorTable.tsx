import React, { memo } from 'react';
import Moment from 'react-moment';
import { withRenderCount } from 'react-render-counter';

import EtherScan from "./EtherScan"

const AggregatorTable = ({
    count,
    responses = [],
    answerRender }) => {

    console.debug(`[RENDER] AggregatorTable ${count}`)

    return (
        <table hover responsive className="table table-outline mb-0 d-sm-table">
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
                        const gasPrice = transaction?.gasPrice ? `${(transaction?.gasPrice * 1e-9).toFixed(2)} Gwei` : 'Loading...';
                        const timestamp = block?.timestamp;

                        return (<tr key={transactionHash}>
                            <td>
                                <div><EtherScan address={returnValues?.sender} /></div>
                            </td>
                            <td>
                                <div>{answerRender(answer)}</div>
                            </td>
                            <td>
                                <div>{gasPrice}</div>
                            </td>
                            <td>
                                <div><EtherScan tx={transactionHash} /></div>
                            </td>
                            <td>
                                <div>
                                    {timestamp ?
                                        <Moment unix format="LLLL">
                                            {timestamp}
                                        </Moment> : "Loading..."}
                                </div>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    );
};


export default memo(withRenderCount(AggregatorTable));