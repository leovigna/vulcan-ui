// TO DO
// - Selector ORM for Coinbase
// - Use meta.maxId for latest timestamp
import { createSelector } from 'redux-orm'
import orm from '../orm'
import { CoinbaseOracleResponse } from './types'

export const coinbaseOracleResponsesSelector: (state: any) => CoinbaseOracleResponse[] = createSelector(orm.CoinbaseOracleResponse)