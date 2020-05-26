import React, { useContext, useEffect, useState } from 'react';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'

import { contractByAddressSelector } from "../../store/selectors"

import FeedView from './FeedView'

interface ContractState {
    latestRound?: any,
    latestAnswer?: any,
    latestTimestamp?: any,
    [key: string]: any
}

interface Props {
    address: string,
    contractState: ContractState
}

const AddressFeedView = ({ address, contractState, ...props }: Props) => {
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
            const contractConfig = {
                contractName: address,
                web3Contract
            }
            const events = ["AnswerUpdated", "ResponseReceived"]
            drizzle.addContract(contractConfig, events);
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

    const latestRound = contractState?.latestRound[latestRoundKey]?.value
    const latestAnswer = contractState?.latestAnswer[latestAnswerKey]?.value
    const latestTimestamp = contractState?.latestTimestamp[latestTimestampKey]?.value

    const feedViewProps = {
        title: `Oracle Aggregator`,
        address,
        answer: latestAnswer || 'Loading...',
        responses: [],
        chartData: [],
        minResponses: 0,
        maxResponses: 0,
        lastUpdate: latestTimestamp || 'Loading...',
        deviationThreshold: 0
    }

    return (<FeedView {...feedViewProps} {...props} />);
}

function mapStateToProps(state: any, { address }: Props) {
    return {
        contractState: contractByAddressSelector(state, address)
    }
}

export default connect(mapStateToProps)(AddressFeedView);