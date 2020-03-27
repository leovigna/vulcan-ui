/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React from 'react';

const EtherScan = ({ address, tx }) => {
    if (address)
        return (<a href={"https://etherscan.io/address/" + address}>{address}</a>)
    if (tx)
        return (<a href={"https://etherscan.io/tx/" + tx}>{tx.slice(0, 10) + "..."}</a>)

    return null;
}

export default EtherScan;