import { attr } from 'redux-orm';
import { Model } from 'redux-orm';

class Feed extends Model {
}
Feed.modelName = 'Feed';

// Declare your related fields.
Feed.fields = {
    id: attr(),
    networkId: attr(),
    protocol: attr(),
    address: attr(),
    name: attr(),
    title: attr(),
    description: attr(),
    tellorId: attr(),
    granularity: attr(),
    sampleAPI: attr(),
    ens: attr()
};

export default Feed;