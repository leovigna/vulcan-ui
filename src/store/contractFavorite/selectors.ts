import { createSelector } from 'redux-orm'
import orm from '../orm'
import { ContractFavorite } from './types'
import { feedResolve } from '../feed/selectors'
import { ContractFavoriteRef } from '../ref/types'

const emptyArray: ContractFavorite[] = []

export const contractFavoritesByFilterSelector: (ormState: any, filter: any, state: any) => ContractFavorite[] = createSelector(
    orm,
    //@ts-ignore
    (_session_: any, filter: any) => filter,
    (_session_: any, _filter_: any, state: any) => state,
    (session: any, filter: any, state: any) => {
        const contracts = session.ContractFavorite.filter(filter).toModelArray().map((item: ContractFavoriteRef) => {
            //@ts-ignore
            const { ref } = item;
            return {
                ...ref,
                feed: item.feed ? feedResolve(state, item.feed) : null
            };
        });

        if (contracts.length === 0) return emptyArray;
        return contracts;
    }
);

