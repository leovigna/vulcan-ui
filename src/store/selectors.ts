// selectors.js
import { createSelector as ormCreateSelector } from 'redux-orm';
import createCachedSelector from 're-reselect';
import hash from 'object-hash'
import moment from 'moment';

import orm from '../orm';
import { Contract, Event, Block, Transaction } from '../orm/models';

import { indexAddressEvent } from "../orm/models/eventByContractTypeIndex"

export const emptyArray = []
export const emptyObj = {}

//Other selectors
export const customContractsSelector = (state: object) => state.persisted.customContracts;
export const contractSelector = (state: object) => state.contracts;

const contractByAddressSelector: (state: any, address: string) => Contract = createCachedSelector(
    contractSelector,
    (_state_: any, address: string) => address,
    (contracts, address) => contracts[address],
)(
    (_state_, address) => address
);


//ORM Selectors
export const contractById = ormCreateSelector(orm.Contract)
export const eventsSelector = ormCreateSelector(orm.Event)
export const transactionsSelector = ormCreateSelector(orm.Transaction)
export const blocksSelector = ormCreateSelector(orm.Block)

export const contractByENSSelector = ormCreateSelector(
    orm,
    (_session_, ens) => ens,
    (session, ens) => {
        const item = session.Contract.filter({ path: ens }).first()
        if (!item) return emptyObj;
        return item;
    }
);
export const contractByNameSelector = ormCreateSelector(
    orm,
    (_session_, name) => name,
    (session, name) => {
        const item = session.Contract.filter({ path: name }).first()
        if (!item) return emptyObj;
        const { ref } = item;
        return ref;
    }
);


export { contractByAddressSelector };

export const objectCacheSelector = createCachedSelector(
    (...args) => args[args.length - 1],
    (argLast) => argLast)
    ((...args) => hash(args[args.length - 1]))


export const contractsSelector = ormCreateSelector(
    orm,
    (session) => {
        const indexes = session.Contract.all().toModelArray().map(item => {
            const { ref } = item;
            return {
                ...ref,
                answerRender: item.answerRender.bind(item),
                answerTransform: item.answerTransform.bind(item),
            };
        });

        if (indexes.length == 0) return emptyArray;
        return indexes;
    }
);

/*

*/

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

export const eventIndexedFilterSelector = ormCreateSelector(
    orm,
    objectCacheSelector,
    (session, indexParams) => {
        const indexId = indexAddressEvent(JSON.parse(indexParams))
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

export const makeEventIndexedFilterSelector = () => {
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

export const eventSelector = ormCreateSelector(
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

export const graphDataSelector = createCachedSelector(
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
                'y': v.returnValues.current
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