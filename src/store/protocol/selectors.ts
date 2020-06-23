// selectors.js
import { createSelector } from 'redux-orm';

import orm from '../orm';
import Protocol from '../orm/models/protocol';
import { ProtocolTypes } from '../types';
import { feedResolve } from '../feed/selectors';

type protocolSelectorUnique = (state: any, id: string) => Protocol
type protocolSelectorMany = (state: any, ids?: [string]) => [Protocol]
type protocolSelectorType = protocolSelectorUnique | protocolSelectorMany
const emptyArray: ProtocolTypes.Protocol[] = []

export const protocolSelector: protocolSelectorType = createSelector(orm.Protocol)

export const protocolResolve = (state: any, protocol: ProtocolTypes.Protocol) => {
    const feeds = protocol.feeds?.toModelArray().map(f => feedResolve(state, f)) || []
    const feedCount = protocol.ref.feedCount || feeds.length
    return {
        ...protocol.ref,
        feeds,
        feedCount
    }
};

export const protocolByIdSelector: (state: any, id: string) => ProtocolTypes.Protocol[] = createSelector(
    orm,
    (_session_, id) => id,
    (session, id) => {
        const item = session.Protocol.withId(id)
        if (!item) return null
        return protocolResolve(item, session.state)
    }
);

export const protocolsByFilterSelector: (ormState: any, filter: any, state: any) => ProtocolTypes.Protocol[] = createSelector(
    orm,
    (_session_, filter) => filter,
    (_session_, filter, state) => state,
    (session, filter, state) => {

        const contracts = session.Protocol.filter(filter).toModelArray().map((item: ProtocolTypes.Protocol) => {
            return protocolResolve(state, item)
        });

        if (contracts.length == 0) return emptyArray;
        return contracts;
    }
);

export const protocolByFilterSelector: (ormState: any, filter: any, state: any) => ProtocolTypes.Protocol = createSelector(
    orm,
    (_session_, filter) => filter,
    (_session_, filter, state) => state,
    (session, filter, state) => {
        const item = session.Protocol.filter(filter).first()
        if (!item) return null;
        return protocolResolve(state, item)
    }
);