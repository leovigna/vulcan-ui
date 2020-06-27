import { createSelector } from 'redux-orm'
import orm from '../orm'
import { Transaction } from './types'

export const transactionsSelector: (state: any, id: string) => Transaction = createSelector(orm.Transaction)
