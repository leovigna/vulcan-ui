// selectors.js
import { createSelector } from 'redux-orm';

import orm from '../orm';
import { feedResolve } from '../feed/selectors';
import { ProtocolRef } from '../ref/types';
import { Protocol } from './types';

const emptyArray: Protocol[] = []

export const protocolResolve = (state: any, protocol: ProtocolRef) => {
    const feeds = protocol.feeds?.toModelArray().map(f => feedResolve(state, f)) || []
    const feedCount = protocol.ref?.feedCount || feeds.length
    return {
        ...protocol.ref,
        feeds,
        feedCount
    }
};

export const protocolByIdSelector: (ormState: any, id: string, state: any) => Protocol[] = createSelector(
    orm,
    //@ts-ignore
    (_session_: any, id: string) => id,
    (_session_: any, _id_: string, state: any) => state,
    (session: any, id: string, state: any) => {
        const item = session.Protocol.withId(id)
        if (!item) return null
        return protocolResolve(state, item)
    }
);

export const protocolsByFilterSelector: (ormState: any, filter: any, state: any) => Protocol[] = createSelector(
    orm,
    //@ts-ignore
    (_session_: any, filter: any) => filter,
    (_session_: any, _filter_: any, state: any) => state,
    (session: any, filter: any, state: any) => {

        const contracts = session.Protocol.filter(filter).toModelArray().map((item: ProtocolRef) => {
            return protocolResolve(state, item)
        });

        if (contracts.length == 0) return emptyArray;
        return contracts;
    }
);

export const protocolByFilterSelector: (ormState: any, filter: any, state: any) => Protocol = createSelector(
    orm,
    //@ts-ignore
    (_session_: any, filter: any) => filter,
    (_session_: any, _filter_: any, state: any) => state,
    (session: any, filter: any, state: any) => {
        const item = session.Protocol.filter(filter).first()
        if (!item) return null;
        return protocolResolve(state, item)
    }
);