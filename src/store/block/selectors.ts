import { createSelector } from 'redux-orm'
import orm from '../orm'
import { Block } from './types'

export const blocksSelector: (state: any, id: string) => Block = createSelector(orm.Block)

// Workaround Drizzle Block Sync
export const currentBlockSelector: (state: any) => Block = (state) => {
    if (!state.currentBlock?.number) return state.latestBlock
    if (!state.latestBlock?.number) return state.currentBlock

    return state.currentBlock.number > state.latestBlock.number ? state.currentBlock : state.latestBlock
}