import React, { useContext, useEffect, useState, useRef } from 'react';
import { connect } from "react-redux"
import { DrizzleContext } from "@drizzle/react-plugin"
import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'
import moment from 'moment';

import {
    contractByFilterSelector,
    contractStateByAddressSelector,
    graphDataSelector,
    makeEventIndexedFilterSelector
} from "../../store/selectors"
import { indexAddressEvent } from "../../orm/models/eventByContractTypeIndex"

import FeedView from './FeedView'
import { ContractActions } from "../../store/actions"
import { ContractTypes } from "../../store/types"
import Event from "../../orm/models/event"
import { protocols } from '../../data/data';
import { Contract } from '../../orm/models';
import { timeStamp } from 'console';

interface ContractState {
    latestRound?: any,
    latestAnswer?: any,
    latestTimestamp?: any,
    [key: string]: any
}

interface Props {
    contract: Contract,
    responses: [Event],
    contractState: ContractState,
    chartData: any,
    createContract(data: ContractTypes.CreateContractActionInput): any
    updateContractEvents(data: ContractTypes.UpdateContractEventsActionInput): any
}

const NamedFeedView = ({
    contract,
    responses,
    contractState,
    chartData,
    updateContractEvents }: Props) => {
    const drizzleContext = useContext(DrizzleContext.Context)

    const render = useRef(0)
    console.debug("Render: ", render.current++)
    const [cacheKeys, setCacheKeys] = useState({ roundKey: '0x0', answerKey: '0x0', timestampKey: '0x0' })

    const { drizzle } = drizzleContext;
    const address = contract ? contract.address : null

    useEffect(() => {
        console.debug('Initialize contract')
        if (drizzle.contracts[address]) {
            const web3Contract = new drizzle.web3.eth.Contract(AggregatorABI.compilerOutput.abi, address)
            updateContractEvents({ address, networkId: '1', web3Contract })

            const roundKey = drizzle.contracts[address].methods.latestRound.cacheCall()
            const answerKey = drizzle.contracts[address].methods.latestAnswer.cacheCall()
            const timestampKey = drizzle.contracts[address].methods.latestTimestamp.cacheCall()
            setCacheKeys({ roundKey, answerKey, timestampKey })
        }
    }, [address, !!drizzle.contracts[address]]);

    const latestAnswer = contractState?.latestAnswer[cacheKeys.answerKey]?.value
    const latestTimestamp = contractState?.latestTimestamp[cacheKeys.timestampKey]?.value

    const answerRender = contract?.answerRender || ((value: any) => value);
    const answerTransform = contract?.answerTransform || ((value: any) => value);
    const answer = answerRender(latestAnswer)
    console.debug(answer)
    const lastUpdate = latestTimestamp ? moment(latestTimestamp, 'X').format('LLLL') : '';

    const feedViewResponses: [Response] = responses.map((r): Response => {
        const { returnValues, block, transactionHash, transaction } = r
        return {
            transactionHash,
            address: returnValues?.sender,
            answer: answerRender(returnValues?.response),
            timestamp: block?.timestamp,
            gasPrice: transaction?.gasPrice
        }
    })

    const feedViewChartData = chartData.map((r) => {
        return { x: r.x, y: answerTransform(r.y) }
    })
    const feedViewProps = {
        title: `Oracle Aggregator`,
        address,
        answer,
        responses: feedViewResponses,
        chartData: feedViewChartData,
        lastUpdate
    }

    return (<FeedView {...feedViewProps} />);
}

const ResponseReceivedSelector = makeEventIndexedFilterSelector()

const mapStateToProps = (state: any, { category, name }: Props) => {
    const contract = contractByFilterSelector(state, { protocol: category, name })
    console.debug(contract)
    if (contract) {
        const address = contract.address
        const ResponseReceivedIndexData = { address: address, event: 'ResponseReceived' }
        const ResponseReceivedIndexId = indexAddressEvent(ResponseReceivedIndexData)
        const AnswerUpdatedIndexData = { address: address, event: 'AnswerUpdated' }
        const AnswerUpdatedIndexId = indexAddressEvent(AnswerUpdatedIndexData)
        return {
            contract,
            contractState: contractStateByAddressSelector(state, address),
            responses: ResponseReceivedSelector(state, ResponseReceivedIndexId),
            chartData: graphDataSelector(state, AnswerUpdatedIndexId)
        }
    }

    return {
        contract
    }
}

NamedFeedView.defaultProps = {
    chartData: [],
    responses: []
}
function mapDispatchToProps(dispatch) {
    return {
        updateContractEvents: (data: ContractTypes.UpdateContractEventsActionInput) => dispatch(ContractActions.updateContractEvents(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NamedFeedView)