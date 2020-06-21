import { createSelector } from 'redux-orm'
import orm from '../orm'
import { Feed } from './types'

const emptyArray = []

export const feedsSelector: (state: any, id: string) => Feed = createSelector(orm.Feed)
export const feedsByFilterSelector: (state: any, filter: any) => [FeedTypes.Feed] = createSelector(
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

export const feedByFilterSelector: (state: any, filter: any) => FeedTypes.Feed = createSelector(
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