// selectors.js
import * as FeedSelectors from './feed/selectors';
import * as ContractFavoriteSelectors from './contractFavorite/selectors';
import * as NetworkSelectors from './network/selectors';
import * as ProtocolSelectors from './protocol/selectors';
import * as EventSelectors from './event/selectors';
import * as DrizzleSelectors from './drizzle/selectors';
import * as BlockSelectors from './block/selectors';

export {
    FeedSelectors,
    ContractFavoriteSelectors,
    NetworkSelectors,
    ProtocolSelectors,
    EventSelectors,
    DrizzleSelectors,
    BlockSelectors
}

//const emptyArray = []


//ORM Selectors
/*
export const graphDataSelector: (state: any) => [Point<moment.Moment, number>] = createCachedSelector(
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

*/