/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component } from 'react';
import {
    Col,
    Row,
} from 'reactstrap';
//Drizzle
import qs from 'qs';
import { DrizzleContext } from "@drizzle/react-plugin"
import { connect } from "react-redux"
import { NETWORK_ID_CHANGED } from "../../reducers/web3"
import { CREATE_CONTRACT } from "../../actions"

import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'

import Aggregator from "../../components/Aggregator/Aggregator"
import { contracts as contractsDefault } from "../../data/contracts"
import { web3ForNetworkId } from "../../web3global"
import { contractsSelector } from "../../selectors"

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

    componentDidMount() {
        const { drizzle } = this.context;

        Object.values(contractsDefault).forEach((c) => {
            const { networkId, address } = c
            const web3 = web3ForNetworkId(networkId)
            const web3Contract = new web3.eth.Contract(AggregatorABI.compilerOutput.abi, address)
            const events = ["AnswerUpdated", "ResponseReceived"]
            /*
            const contractConfig = {
                contractName: address,
                web3Contract
            }
            
            drizzle.addContract(contractConfig, events);
            */

            this.props.createContract({ ...c, web3Contract, events })
        })
    }

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

        const networkId = searchContract?.networkId || '1'
        const address = searchContract?.address || matchParams.address || queryParams.address;
        const answerRender = searchContract?.answerRender || ((value) => value);
        const answerTransform = searchContract?.answerTransform || ((value) => value);

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

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Aggregator historyRange={50} drizzle={drizzle} networkId={networkId} contract={address} answerTransform={answerTransform} answerRender={answerRender} title={title} />
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { web3 } = state
    return {
        networkId: web3?.networkId,
        contracts: contractsSelector(state)
    }
}

function mapDipatchToProps(dispatch) {
    return {
        changeNetworkId: (networkId) => dispatch({ type: NETWORK_ID_CHANGED, networkId }),
        createContract: (payload) => dispatch({ type: CREATE_CONTRACT, payload }),
    }
}


export default connect(mapStateToProps, mapDipatchToProps)(AggregatorView);
