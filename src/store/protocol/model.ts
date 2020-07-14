import { attr } from 'redux-orm';
import { Model } from 'redux-orm';

class ProtocolModel extends Model {

}
ProtocolModel.modelName = 'Protocol';

// Declare your related fields.
ProtocolModel.fields = {
    id: attr(),
    active: attr(),
    name: attr(),
    img: attr(),
    url: attr(),
    descriptionLong: attr(),
    description: attr()
};

export default ProtocolModel;