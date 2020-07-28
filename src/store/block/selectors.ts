import { Block } from './types'

// Workaround Drizzle Block Sync
export const currentBlockSelector: (state: any) => Block = (state) => {
    if (!state.currentBlock?.number) return state.latestBlock
    if (!state.latestBlock?.number) return state.currentBlock

    return state.currentBlock.number > state.latestBlock.number ? state.currentBlock : state.latestBlock
}