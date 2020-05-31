import React, { useContext, useEffect, useState } from 'react';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'

import {
    contractByAddressSelector,
    graphDataSelector,
    makeEventIndexedFilterSelector
} from "../../store/selectors"
import { indexAddressEvent } from "../../orm/models/eventByContractTypeIndex"

import FeedView from './FeedView'
import { ContractActions } from "../../store/actions"
import { ContractTypes, FeedTypes } from "../../store/types"
import Event from "../../orm/models/event"


interface Props {
    responses: [Event],
    contractState: FeedTypes.Feed,
    chartData: any,
    createContract(data: ContractTypes.CreateContractActionInput): any
    updateContractEvents(data: ContractTypes.UpdateContractEventsActionInput): any
}

const AddressFeedView = ({
    address,
    responses,
    contractState,
    chartData,
    createContract,
    updateContractEvents }: Props) => {
    const drizzleContext = useContext(DrizzleContext.Context)

    const [contractInitialized, setContractInitialized] = useState(false)
    const [latestRoundKey, setLatestRoundKey] = useState('')
    const [latestAnswerKey, setLatestAnswerKey] = useState('')
    const [latestTimestampKey, setLatestTimestampKey] = useState('')

    const { drizzle } = drizzleContext;

    useEffect(() => {
        console.debug('Initialize contract')
        if (!drizzle.contracts[address]) {
            const web3Contract = new drizzle.web3.eth.Contract(AggregatorABI.compilerOutput.abi, address)
            const events = ["AnswerUpdated", "ResponseReceived"]
            createContract({ address, networkId: '1', abi: AggregatorABI.compilerOutput.abi, events })
            updateContractEvents({ address, networkId: '1', web3Contract })

            setContractInitialized(true)
        } else {

            setContractInitialized(true)
        }
    }, [address]);

    useEffect(() => {
        const latestRoundKey = drizzle.contracts[address].methods.latestRound.cacheCall()
        setLatestRoundKey(latestRoundKey)
    }, [address, contractInitialized])

    useEffect(() => {
        const latestAnswerKey = drizzle.contracts[address].methods.latestAnswer.cacheCall()
        setLatestAnswerKey(latestAnswerKey)
    }, [address, contractInitialized])

    useEffect(() => {
        const latestTimestamp = drizzle.contracts[address].methods.latestTimestamp.cacheCall()
        setLatestTimestampKey(latestTimestamp)
    }, [address, contractInitialized])


    if (!drizzle.contracts[address]) return <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    const latestAnswer = contractState?.latestAnswer[latestAnswerKey]?.value
    const latestTimestamp = contractState?.latestTimestamp[latestTimestampKey]?.value
    const feedViewResponses: [Response] = responses.map((r): Response => {
        const { returnValues, block, transactionHash, transaction } = r
        return {
            transactionHash,
            address: returnValues?.sender,
            answer: returnValues?.response,
            timestamp: block?.timestamp,
            gasPrice: transaction?.gasPrice
        }
    })

    const feedViewProps = {
        title: `Oracle Aggregator`,
        address,
        answer: latestAnswer || 'Loading...',
        responses: feedViewResponses,
        chartData,
        lastUpdate: latestTimestamp || 'Loading...',
    }

    return (<FeedView {...feedViewProps} />);
}

const ResponseReceivedSelector = makeEventIndexedFilterSelector()

const mapStateToProps = (state: any, { address }: Props) => {
    const ResponseReceivedIndexData = { address: address, event: 'ResponseReceived' }
    const ResponseReceivedIndexId = indexAddressEvent(ResponseReceivedIndexData)
    const AnswerUpdatedIndexData = { address: address, event: 'AnswerUpdated' }
    const AnswerUpdatedIndexId = indexAddressEvent(AnswerUpdatedIndexData)

    return {
        contractState: contractByAddressSelector(state, address),
        responses: ResponseReceivedSelector(state, ResponseReceivedIndexId),
        chartData: graphDataSelector(state, AnswerUpdatedIndexId)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createContract: (data: ContractTypes.CreateContractActionInput) => dispatch(ContractActions.createContract(data)),
        updateContractEvents: (data: ContractTypes.UpdateContractEventsActionInput) => dispatch(ContractActions.updateContractEvents(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddressFeedView);