import {
    SET_CONTRACT_FAVORITE,
    SetContractFavoriteAction,
    SetContractFavoriteActionInput
} from './types'

export function setContractFavorite(payload: SetContractFavoriteActionInput): SetContractFavoriteAction {
    return {
        type: SET_CONTRACT_FAVORITE,
        payload
    }
}