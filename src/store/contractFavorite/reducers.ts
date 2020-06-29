import { ContractFavoriteAction, SET_CONTRACT_FAVORITE } from "./types";
export function contractFavoriteReducer(sess: any, action: ContractFavoriteAction) {
    const { ContractFavorite } = sess;
    switch (action.type) {
        case SET_CONTRACT_FAVORITE:
            ContractFavorite.upsert(action.payload)
            break;
    }

    return sess;
}
