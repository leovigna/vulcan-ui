import { createSelector } from 'redux-orm'
import orm from '../orm'
import { Block } from './types'

export const blocksSelector: (state: any, id: string) => Block = createSelector(orm.Block)