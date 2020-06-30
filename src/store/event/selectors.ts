import { createSelector } from 'redux-orm'
import orm from '../orm'
import { Event, EventByContractTypeIndex } from './types'

const emptyArray: EventByContractTypeIndex[] = []
const emptyArray2: Event[] = []

export const eventByContractTypeIndexSelector: (state: any, id: string) => EventByContractTypeIndex[] = createSelector(
    orm,
    (session) => {
        const indexes = session.EventByContractTypeIndex.all().toModelArray().map((item: any) => {
            const { ref } = item;
            const events = item.events.toModelArray().map((item: any) => {
                const { ref } = item;
                return {
                    ...ref,
                    block: item.block?.ref,
                    transaction: item.transaction?.ref
                };
            })

            return {
                ...ref,
                events
            };
        });

        if (indexes.length == 0) return emptyArray;
        return indexes;
    }
);

export const eventByContractTypeIndexByIdSelector: (state: any, id: string) => EventByContractTypeIndex = createSelector(
    orm,
    (session, id) => id,
    (session, id) => {
        const item = session.EventByContractTypeIndex.withId(id)
        if (!item) return null;

        const { ref } = item;
        const events = item.events.toModelArray().map((item: any) => {
            const { ref } = item;
            return {
                ...ref,
                block: item.block?.ref,
                transaction: item.transaction?.ref
            };
        })

        return {
            ...ref,
            events
        };
    }
);

export const eventsSelector: (state: any) => Event[] = createSelector(
    orm,
    (session) => {
        const events = session.Event.all().toModelArray().map((item: any) => {
            const { ref } = item;
            return {
                ...ref,
                block: item.block?.ref,
                transaction: item.transaction?.ref
            };
        });

        if (events.length == 0) return emptyArray2;
        return events;
    }
);