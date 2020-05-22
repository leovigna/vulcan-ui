/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { useState, useEffect, memo } from 'react';
import {
    CCard as Card,
    CCardHeader as CardHeader,
    CCardBody as CardBody
} from '@coreui/react';

//Drizzle
import { connect } from "react-redux"
import { withRenderCount } from 'react-render-counter';

import { web3ForNetworkId } from '../../web3global'

import { indexAddressEvent } from "../../orm/models/eventByContractTypeIndex"
import {
    graphDataSelector,
    contractByNameSelector,
    makeEventIndexedFilterSelector
} from "../../store/selectors"


import AggregatorChart from "./AggregatorChart"
import AggregatorTable from "./AggregatorTable"
import AggregatorHead from "./AggregatorHead"

interface ContractState {
    latestRound?: any,
    latestTimestamp?: any,
    latestAnswer?: any
}

interface Props {
    networkId: string,
    historyRange: number,
    drizzle: any,
    contract: string,
    contractState: ContractState,
    answerTransform: any,
    answerRender: any,
    title: string,
    fetchEvent: any,
    responses: any[],
    graphData: any[],
    count: number
}

const Aggregator = ({
    networkId = '1',
    historyRange = 10,
    drizzle,
    contract,
    contractState = {},
    answerTransform = (v: any) => v,
    answerRender = (v: any) => v,
    title,
    responses = [],
    graphData = [],
    count }: Props) => {
    console.debug(`[RENDER] AggregatorMain ${count}`)

    const [latestRoundKey, setLatestRoundKey] = useState()
    const [latestAnswerKey, setLatestAnswerKey] = useState()
    const [latestTimestampKey, setLatestTimestampKey] = useState()

    const web3 = drizzle.web3._provider.networkVersion === networkId ? drizzle.web3 : web3ForNetworkId(networkId)
    drizzle.web3 = web3

    useEffect(() => {
        //console.debug(drizzle.web3)
        const latestRoundKey = drizzle.contracts[contract].methods.latestRound.cacheCall()
        const latestAnswerKey = drizzle.contracts[contract].methods.latestAnswer.cacheCall()
        const latestTimestampKey = drizzle.contracts[contract].methods.latestTimestamp.cacheCall()
        setLatestRoundKey(latestRoundKey)
        setLatestAnswerKey(latestAnswerKey)
        setLatestTimestampKey(latestTimestampKey)
    }, [contract]);

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
                    <AggregatorChart data={graphData} historyRange={historyRange} answerTransform={answerTransform} />
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

const mapStateToProps = (state, { contract }) => {
    const ResponseReceivedIndexData = { address: contract, event: 'ResponseReceived' }
    const ResponseReceivedIndexId = indexAddressEvent(ResponseReceivedIndexData)
    const AnswerUpdatedIndexData = { address: contract, event: 'AnswerUpdated' }
    const AnswerUpdatedIndexId = indexAddressEvent(AnswerUpdatedIndexData)

    return {
        contractState: contractByNameSelector(state, contract),
        responses: ResponseReceivedSelector(state, ResponseReceivedIndexId),
        graphData: graphDataSelector(state, AnswerUpdatedIndexId)
    }
}

function mapDispatchToProps(dispatch) {
    return {
    }
}

function areEqual(prevProps, nextProps) {
    const areEqual = Object.keys(prevProps).map((k) => prevProps[k] === nextProps[k])

    areEqual.push(prevProps.drizzle.web3._provider.networkVersion === nextProps.drizzle.web3._provider.networkVersion)

    return areEqual.reduce((acc, val) => acc && val);
}

export default connect(mapStateToProps, mapDispatchToProps)(memo(withRenderCount(Aggregator), areEqual));