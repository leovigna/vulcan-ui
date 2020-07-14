import { Feed } from "../feed/types";
import { ContractFavorite } from "../contractFavorite/types";
import { Protocol } from "../protocol/types";

export interface ORMRef<T> {
    ref: T
}

export interface FeedRef extends ORMRef<Feed> {
    protocolInfo: ORMRef<Protocol>
    favorite: ORMRef<ContractFavorite>
}

export interface ProtocolRef extends ORMRef<Protocol> {
    feeds: {
        toModelArray(): FeedRef[]
    }
}

export interface ContractFavoriteRef extends ORMRef<ContractFavorite> {
    feed: FeedRef
}