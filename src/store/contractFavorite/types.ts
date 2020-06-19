export interface ContractFavorite {
    id: string,
    networkId: string,
    address: string,
    favorite: boolean
}

export const SET_CONTRACT_FAVORITE = 'ORM/SET_CONTRACT_FAVORITE'
export type SetContractFavoriteActionInput = ContractFavorite
export interface SetContractFavoriteAction {
    type: typeof SET_CONTRACT_FAVORITE
    payload: SetContractFavoriteActionInput
}