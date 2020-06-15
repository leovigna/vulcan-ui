/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component } from 'react';
import {
    CCol as Col,
    CRow as Row,
} from '@coreui/react';

//Drizzle
import qs from 'qs';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import Aggregator from "../../components/Aggregator/Aggregator"
import { contractsSelector } from "../../store/selectors"
import { ContractActions } from "../../store/actions"
import { ContractTypes } from "../../store/types"

class AggregatorView extends Component {
    static contextType = DrizzleContext.Context;

    constructor(props) {
        super(props);
    }

    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    /*
    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }
    */

    render() {
        const queryParams = qs.parse(this.props.location.search, { ignoreQueryPrefix: true });
        const matchParams = this.props.match.params;
        const category = matchParams.category || queryParams.category;
        const name = matchParams.name || queryParams.name;

        const { drizzle, initialized } = this.context;

        if (!initialized) return null;
        if (!drizzle.web3) return null;

        let searchContract;
        if (category && name) {
            const searchPath = `${category}/${name}`
            searchContract = Object.values(this.props.contracts).find((c) => c.path === searchPath)
        }
        if (!searchContract) {
            return <div>Loading...</div>;
        }

        const networkId = searchContract?.networkId || '1'
        const address = searchContract?.address || matchParams.address || queryParams.address;
        const answerRender = searchContract?.answerRender || ((value) => value);
        const answerTransform = searchContract?.answerTransform || ((value) => value);
        const historyRange = searchContract?.historyRange || 50

        const titleString = searchContract?.title || 'Aggregator'
        const title = `${titleString} at ${address}`;

        if (!drizzle.contracts[address]) {
            /*
            const web3Contract = new drizzle.web3.eth.Contract(AggregatorABI.compilerOutput.abi, address)

            const contractConfig = {
                contractName: address,
                web3Contract
            }
            const events = ["AnswerUpdated", "ResponseReceived"]
            // Or using the Drizzle context object
            drizzle.addContract(contractConfig, events);
            */


            return <div>Loading...</div>;
        }

        if (!searchContract.updated) {
            this.props.updateContractEvents({ address, web3Contract: drizzle.contracts[address], networkId })
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Aggregator historyRange={historyRange} drizzle={drizzle} networkId={networkId} contract={address} answerTransform={answerTransform} answerRender={answerRender} title={title} />
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        contracts: contractsSelector(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateContractEvents: (data: ContractTypes.UpdateContractEventsActionInput) => dispatch(ContractActions.updateContractEvents(data)),
        setupContract: (data: ContractTypes.SetupContractActionInput) => dispatch(ContractActions.setupContract(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AggregatorView);
