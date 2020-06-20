// selectors.js
import createCachedSelector from 're-reselect';
import moment from 'moment';
import * as FeedSelectors from './feed/selectors';
import * as ContractFavoriteSelectors from './contractFavorite/selectors';
import * as NetworkSelectors from './network/selectors';
import * as ProtocolSelectors from './protocol/selectors';
import * as EventSelectors from './event/selectors';

import { Point } from '../store/types'

export {
    FeedSelectors,
    ContractFavoriteSelectors,
    NetworkSelectors,
    ProtocolSelectors,
    EventSelectors
}

interface State {
    contracts: {
        [key: string]: any
    }
}
export const emptyArray = []
export const emptyObj = {}

// Drizzle State Selectors
export const contractStateSelector = (state: State) => state.contracts;
export const contractStateByAddressSelector: (state: State, address: string) => any = createCachedSelector(
    contractStateSelector,
    (_state_: State, address: string) => address,
    (contracts, address) => contracts[address],
)(
    (_state_, address) => address
);

//ORM Selectors
export const graphDataSelector: (state: State) => [Point<moment.Moment, number>] = createCachedSelector(
    EventSelectors.makeEventIndexedFilterSelector(),
    (events, _indexId_: string) => {
        if (events.length == 0) return emptyArray;

        // Filter 1 per round
        const answersPerRound = {}
        events.forEach(e => {
            answersPerRound[e.returnValues.roundId] = e
        });

        return Object.values(answersPerRound).map(v => {
            return ({
                'x': moment.unix(v.returnValues.timestamp),
                'y': parseInt(v.returnValues.current)
            })
        })

    })((_state_, indexId) => indexId)