import { attr } from 'redux-orm';
import { Model } from 'redux-orm';

class Protocol extends Model {

}
Protocol.modelName = 'Protocol';

// Declare your related fields.
Protocol.fields = {
    id: attr(),
    active: attr(),
    name: attr(),
    img: attr(),
    url: attr(),
    descriptionLong: attr(),
    description: attr()
};

export default Protocol;