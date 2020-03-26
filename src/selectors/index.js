// selectors.js
import { createSelector as ormCreateSelector } from 'redux-orm';
import { createSelector as reselectCreateSelector } from 'reselect';
import createCachedSelector from 're-reselect';
import hash from 'object-hash'
import moment from 'moment';

import orm from '../orm';
import { indexAddressEvent } from "../orm/models/eventByContractTypeIndex"

export const emptyArray = []
export const emptyObj = {}

export const contractSelector = (state) => state.contracts;
export const contractByNameSelector = createCachedSelector(
    contractSelector,
    (_state_, name) => name,
    (contracts, name) => contracts[name],
)(
    (_state_, name) => name
);

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
                answerRender: item.answerRenderFunction(),
                answerTransform: item.answerTransformFunction(),
            };
        });

        if (indexes.length == 0) return emptyArray;
        return indexes;
    }
);

/*
export const events = ormCreateSelector(orm.Event)
//export const eventById = ormCreateSelector(orm.Event.withId)
export const transactions = ormCreateSelector(orm.Transaction)
export const blocks = ormCreateSelector(orm.Block)
export const eventIndexes = ormCreateSelector(orm.EventByContractTypeIndex)
export const eventIndexById = ormCreateSelector(orm.Event.contractTypeIndexId.map(orm.EventByContractTypeIndex.contractTypeIndexId))
//export const eventIndex = ormCreateSelector(orm.EventByContractTypeIndex.events)
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
    (events) => {
        if (events.length == 0) return emptyArray;

        // Filter 1 per round
        const answersPerRound = {}
        events.forEach(e => {
            answersPerRound[e.returnValues.roundId] = e
        });

        return Object.values(answersPerRound).map(v => {
            return ({
                'x': moment.unix(v.returnValues.timestamp),
                'y': v.returnValues.current * 1e-8
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