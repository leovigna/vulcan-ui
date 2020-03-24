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

import AggregatorABI from '@chainlink/contracts/abi/v0.4/Aggregator.json'

import Aggregator from "../../components/Aggregator/Aggregator"
import { contracts } from "../../data/contracts"
import { ropstenWeb3, mainnetWeb3 } from "../../web3global"

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
            const searchResult = Object.entries(contracts).filter(([_, c]) => c.path === searchPath)
            searchContract = searchResult[0][1]
        }

        if (searchContract?.networkId) {
            const networkId = this.props.networkId
            if (searchContract.networkId != networkId) {
                if (searchContract.networkId === '1') {
                    drizzle.web3 = mainnetWeb3
                    this.props.changeNetworkId(1)
                } else if (searchContract.networkId === '3') {
                    drizzle.web3 = ropstenWeb3
                    this.props.changeNetworkId(3)
                }
            }
        }

        const address = searchContract?.address || matchParams.address || queryParams.address;
        const answerRender = searchContract?.answerRender || ((value) => value);

        const titleString = searchContract?.title || 'Aggregator'
        const title = `${titleString} at ${address}`;


        if (!drizzle.contracts[address]) {
            const web3Contract = new drizzle.web3.eth.Contract(AggregatorABI.compilerOutput.abi, address)

            const contractConfig = {
                contractName: address,
                web3Contract
            }
            const events = ["AnswerUpdated", "ResponseReceived"]
            // Or using the Drizzle context object
            drizzle.addContract(contractConfig, events);

            return <div>Loading...</div>;
        }

        return (
            <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Aggregator contract={address} answerRender={answerRender} title={title} />
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    const { web3 } = state
    return { networkId: web3?.networkId }
}

function mapDipatchToProps(dispatch) {
    return {
        changeNetworkId: (networkId) => dispatch({ type: NETWORK_ID_CHANGED, networkId }),
    }
}


export default connect(mapStateToProps, mapDipatchToProps)(AggregatorView);
