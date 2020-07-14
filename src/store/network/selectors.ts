import { Network } from "./types";


// Network Selectors
export const networksSelector: (state: any) => Network[] = (state) => state.networks;
export const networkIdSelector: (state: any) => string = (state) => state.networkId;

