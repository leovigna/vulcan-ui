import { Feed } from '../feed/types';
import { Node } from '../node/types';

export interface Protocol {
    name: string,
    img: string,
    feeds?: [Feed],
    nodes?: [Node],
    feedCount: number,
    nodeCount: number,
    sponsorCount: number,
    descriptionLong: string,
    description: string,
}