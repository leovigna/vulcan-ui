// selectors.js
import { createSelector as ormCreateSelector } from 'redux-orm';

import orm from '../orm';
import Protocol from '../orm/models/protocol';

type protocolSelectorUnique = (state: any, id: string) => Protocol
type protocolSelectorMany = (state: any, ids?: [string]) => [Protocol]
type protocolSelectorType = protocolSelectorUnique | protocolSelectorMany

export const protocolSelector: protocolSelectorType = ormCreateSelector(orm.Protocol)