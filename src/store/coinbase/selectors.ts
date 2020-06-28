// TO DO
// - Selector ORM for Coinbase
// - Use meta.maxId for latest timestamp
import { createSelector } from 'redux-orm'
import orm from '../orm'

export const coinbaseOracleResponsesSelector = createSelector(orm.CoinbaseOracleResponse)