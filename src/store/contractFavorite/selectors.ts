import { createSelector } from 'redux-orm'
import orm from '../orm'
import { ContractFavorite } from './types'
import { feedResolve } from '../feed/selectors'

const emptyArray: ContractFavorite[] = []

type contractFavoritesSelectorType = ((state: any) => [ContractFavorite]) |
    ((state: any, id: string) => ContractFavorite) |
    ((state: any, ids: [string]) => [ContractFavorite])

//@ts-ignore
export const contractFavoritesSelector: contractFavoritesSelectorType = createSelector(orm.ContractFavorite)
export const contractFavoritesByFilterSelector: (ormState: any, filter: any, state: any) => ContractFavorite[] = createSelector(
    orm,
    (_session_, filter) => filter,
    (_session_, filter, state) => state,
    (session, filter, state) => {
        const contracts = session.ContractFavorite.filter(filter).toModelArray().map((item: ContractFavorite) => {
            const { ref } = item;
            return {
                ...ref,
                feed: item.feed ? feedResolve(state, item.feed) : null
            };
        });

        if (contracts.length == 0) return emptyArray;
        return contracts;
    }
);

