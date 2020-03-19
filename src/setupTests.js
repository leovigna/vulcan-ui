/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint react/no-unescaped-entities:0 */
/* eslint @typescript-eslint/no-empty-function:0 */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

if (global.document) {
    document.createRange = () => ({
        setStart: () => {},
        setEnd: () => {},
        commonAncestorContainer: {
            nodeName: 'BODY',
            ownerDocument: document,
        },
    });
}
