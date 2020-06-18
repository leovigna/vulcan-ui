// selectors.js
import { createSelector as ormCreateSelector } from 'redux-orm';
import createCachedSelector from 're-reselect';
import hash from 'object-hash'
import moment from 'moment';

import orm from './orm';
import { Contract, ContractFavorite, Event, Block, Transaction, Network } from './orm/models';
import { Point, FeedTypes } from '../store/types'
import { indexAddressEvent } from "./orm/models/eventByContractTypeIndex"

interface State {
    contracts: {
        [key: string]: Contract
    },
    networks: [Network]
    networkId: Network["id"]
}
export const emptyArray = []
export const emptyObj = {}

// Network Selectors
export const networksSelector = (state: State) => state.networks;
export const networkIdSelector = (state: State) => state.networkId;

// Drizzle State Selectors
export const contractStateSelector = (state: State) => state.contracts;
export const contractStateByAddressSelector: (state: State, address: string) => Contract = createCachedSelector(
    contractStateSelector,
    (_state_: State, address: string) => address,
    (contracts, address) => contracts[address],
)(
    (_state_, address) => address
);

//ORM Selectors
export const contractsSelector = ormCreateSelector(
    orm,
    (session) => {
        const contracts = session.Contract.all().toModelArray().map(item => {
            const { ref } = item;
            return {
                ...ref,
                answerRender: item.answerRender.bind(item),
                answerTransform: item.answerTransform.bind(item),
            };
        });

        if (contracts.length == 0) return emptyArray;
        return contracts;
    }
);


type contractFavoritesSelectorType = ((state: any) => [ContractFavorite]) |
    ((state: any, id: string) => ContractFavorite) |
    ((state: any, ids: [string]) => [ContractFavorite])

//@ts-ignore
export const contractFavoritesSelector: contractFavoritesSelectorType = ormCreateSelector(orm.ContractFavorite)
export const eventsSelector: (state: any, id: string) => Event = ormCreateSelector(orm.Event)
export const transactionsSelector: (state: any, id: string) => Transaction = ormCreateSelector(orm.Transaction)
export const blocksSelector: (state: any, id: string) => Block = ormCreateSelector(orm.Block)
export const feedsSelector: (state: any, id: string) => Feed = ormCreateSelector(orm.Feed)

export const contractsByFilterSelector: (state: any, filter: any) => [Contract] = ormCreateSelector(
    orm,
    (_session_, filter) => filter,
    (session, filter) => {
        const contracts = session.Contract.filter(filter).toModelArray().map((item: Contract) => {
            const { ref } = item;
            return {
                ...ref,
                answerRender: item.answerRender.bind(item),
                answerTransform: item.answerTransform.bind(item),
            };
        });

        if (contracts.length == 0) return emptyArray;
        return contracts;
    }
);

export const contractById: (state: any, id: string) => Contract = ormCreateSelector(orm.Contract)
export const contractByFilterSelector: (state: any, filter: any) => Contract = ormCreateSelector(
    orm,
    (_session_, filter) => filter,
    (session, filter) => {
        const item = session.Contract.filter(filter).first()
        if (!item) return null;
        const { ref } = item;
        return {
            ...ref,
            answerRender: item.answerRender.bind(item),
            answerTransform: item.answerTransform.bind(item),
        };
    }
);

export const feedsByFilterSelector: (state: any, filter: any) => [FeedTypes.Feed] = ormCreateSelector(
    orm,
    (_session_, filter) => filter,
    (session, filter) => {
        const contracts = session.Feed.filter(filter).toModelArray().map((item: Contract) => {
            const { ref } = item;
            return {
                ...ref,
            };
        });

        if (contracts.length == 0) return emptyArray;
        return contracts;
    }
);

export const feedByFilterSelector: (state: any, filter: any) => FeedTypes.Feed = ormCreateSelector(
    orm,
    (_session_, filter) => filter,
    (session, filter) => {
        const item = session.Feed.filter(filter).first()
        if (!item) return null;
        const { ref } = item;
        return {
            ...ref,
        };
    }
);

export const eventByContractTypeIndexSelector = ormCreateSelector(
    orm,
    (session) => {
        const indexes = session.EventByContractTypeIndex.all().toModelArray().map(item => {
            const { ref } = item;

            return {
                ...ref,
                events: item.events.toRefArray(),
            };
        });

        if (indexes.length == 0) return emptyArray;
        return indexes;
    }
);

export const makeEventIndexedFilterSelector: () => (state: State, indexId: string) => [Event] = () => {
    return ormCreateSelector(
        orm,
        (session, indexId) => indexId,
        (session, indexId) => {
            const item = session.EventByContractTypeIndex.withId(indexId)
            if (!item) return emptyArray;

            const { ref } = item;
            const events = item.events.toModelArray().map(item => {
                const { ref } = item;
                return {
                    ...ref,
                    block: item.block?.ref,
                    transaction: item.transaction?.ref
                };
            })

            if (events.length == 0) return emptyArray;
            return events;
        }
    );
}
export const eventIndexedFilterSelector = makeEventIndexedFilterSelector()

export const eventSelector: (state: State) => [Event] = ormCreateSelector(
    orm,
    (session) => {
        const events = session.Event.all().toModelArray().map(item => {
            const { ref } = item;
            return {
                ...ref,
                block: item.block?.ref,// || emptyObj,
                transaction: item.transaction?.ref// || emptyObj
            };
        });

        if (events.length == 0) return emptyArray;
        return events;
    }
);

export const graphDataSelector: (state: State) => [Point<moment.Moment, number>] = createCachedSelector(
    makeEventIndexedFilterSelector(),
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



export const makeEventFilterSelector = (filterArg) => {
    return ormCreateSelector(
        orm,
        session => {
            return session.Event.filter(filterArg)
        }
    );
}

export const transactionSelector = ormCreateSelector(
    orm,
    session => {
        return session.Transaction.all().toModelArray().map(item => {
            const { ref } = item;
            return {
                ...ref,
            };
        });
    }
);

export const blockSelector = ormCreateSelector(
    orm,
    session => {
        return session.Block.all().toModelArray().map(item => {
            const { ref } = item;
            return {
                ...ref,
            };
        });
    }
);