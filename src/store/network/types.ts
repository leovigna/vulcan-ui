export const SET_NETWORK_ID = 'SET_NETWORK_ID'

export interface Network {
    name: string,
    id: string,
    defaultRPC?: string
}