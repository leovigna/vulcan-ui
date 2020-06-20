import { createSelector } from 'redux-orm'
import orm from '../orm'
import { Event } from './types'

export const eventsSelector: (state: any, id: string) => Event = createSelector(orm.Event)
export const eventByContractTypeIndexSelector = createSelector(
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
    return createSelector(
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
export const eventSelector: (state: State) => [Event] = createSelector(
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