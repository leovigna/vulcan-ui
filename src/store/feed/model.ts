import { attr, fk } from 'redux-orm';
import { Model } from 'redux-orm';

class FeedModel extends Model {
}
FeedModel.modelName = 'Feed';

// Declare your related fields.
FeedModel.fields = {
    id: attr(),
    networkId: attr(),
    address: attr(),
    name: attr(),
    title: attr(),
    description: attr(),
    tellorId: attr(),
    granularity: attr(),
    sampleAPI: attr(),
    ens: attr(),
    refreshed: attr(),
    protocol: fk({
        to: 'Protocol',
        as: 'protocolInfo',
        relatedName: 'feeds'
    }),
    favoriteId: fk({
        to: 'ContractFavorite',
        as: 'favorite',
    }),
};

export default FeedModel;