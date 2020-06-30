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
export const UPDATE_BLOCK = 'ORM/BLOCK/UPDATE'
export const REMOVE_BLOCK = 'ORM/BLOCK/REMOVE'
export const FETCH_BLOCK = 'ORM/BLOCK/FETCH'

export type CreateBlockActionInput = Block
export interface CreateBlockAction {
    type: typeof CREATE_BLOCK
    payload: CreateBlockActionInput
}

export type UpdateBlockActionInput = Block
export interface UpdateBlockAction {
    type: typeof UPDATE_BLOCK
    payload: UpdateBlockActionInput
}

export type RemoveBlockActionInput = {
    blockNumber: number
}
export interface RemoveBlockAction {
    type: typeof REMOVE_BLOCK
    payload: RemoveBlockActionInput
}

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

export type BlockAction = FetchBlockAction | CreateBlockAction | UpdateBlockAction | RemoveBlockAction