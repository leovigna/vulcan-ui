import createCachedSelector from 're-reselect';

interface DrizzleState {
    contracts: {
        [key: string]: any
    }
}

const emptyArray = []
const emptyObj = {}

// Drizzle State Selectors
export const drizzleStateSelector = (state: DrizzleState) => state.contracts;
export const drizzleStateByIdSelector: (state: DrizzleState, id: string) => any = createCachedSelector(
    drizzleStateSelector,
    (_state_: DrizzleState, id: string) => id,
    (contracts, id) => contracts[id],
)(
    (_state_, id) => id
);

export const drizzleStateValueSelector: (state: DrizzleState, id: string, cacheName: string, cacheKey: string) => any = createCachedSelector(
    drizzleStateByIdSelector,
    (_state_: DrizzleState, id: string) => id,
    (_state_: DrizzleState, _id_: string, cacheName: string) => cacheName,
    (_state_: DrizzleState, _id_: string, _cacheName_: string, cacheKey: string) => cacheKey,
    (contractState, _id_: string, cacheName: string, cacheKey: string) => {
        if (!contractState) return null;
        if (!contractState[cacheName]) return null;
        return contractState[cacheName][cacheKey]?.value
    }
)(
    (_state_, id, cacheName, cacheKey) => { return [id, cacheName, cacheKey].join('-') }
);
