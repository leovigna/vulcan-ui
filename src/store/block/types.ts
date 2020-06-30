import { Transaction } from "../transaction/types"

export interface Block {
    networkId: string,
    difficulty: string
    extraData: string
    gasLimit: number
    gasUsed: number
    hash: string
    logsBloom: string
    miner: string
    mixHash: string
    nonce: string
    number: number
    parentHash: string
    receiptsRoot: string
    sha3Uncles: string
    size: number
    stateRoot: string
    timestamp: number
    totalDifficulty: string
    transactions: string[]
    transactionsRoot: string
    uncles: string[],
    transactionsWithData?: Transaction[]
}

export const CREATE_BLOCK = 'ORM/BLOCK/CREATE'
export const REMOVE_BLOCK = 'ORM/BLOCK/REMOVE'

export type CreateBlockActionInput = Block
export interface CreateBlockAction {
    type: typeof CREATE_BLOCK
    payload: CreateBlockActionInput
}

export const UPDATE_BLOCK = 'ORM/BLOCK/UPDATE'
export type UpdateBlockActionInput = Block
export interface UpdateBlockAction {
    type: typeof UPDATE_BLOCK
    payload: UpdateBlockActionInput
}

export type RemoveBlockActionInput = {
    number: Block['number']
}
export interface RemoveBlockAction {
    type: typeof REMOVE_BLOCK
    payload: RemoveBlockActionInput
}

export const FETCH_BLOCK = 'ORM/BLOCK/FETCH'
export interface FetchBlockWithNumberActionInput {
    number: Block['number']
    networkId: Block['networkId']
}
export interface FetchBlockWithHashActionInput {
    hash: Block['hash']
    networkId: Block['networkId']
}
export type FetchBlockActionInput = FetchBlockWithNumberActionInput | FetchBlockWithHashActionInput
export interface FetchBlockAction {
    type: typeof FETCH_BLOCK
    payload: FetchBlockActionInput
}

export const LATEST_BLOCK = 'ORM/BLOCK/SET_LATEST'
export type LatestBlockActionInput = Block
export interface LatestBlockAction {
    type: typeof LATEST_BLOCK
    payload: LatestBlockActionInput
}

export type BlockAction = FetchBlockAction | CreateBlockAction | UpdateBlockAction | RemoveBlockAction | LatestBlockAction