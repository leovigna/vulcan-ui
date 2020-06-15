/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React from 'react';

interface Props {
    address?: string,
    tx?: string,
    [key: string]: any
}

const EtherScan = ({ address, tx, ...props }: Props) => {
    if (address)
        return (<a href={"https://etherscan.io/address/" + address} {...props}>{address}</a>)
    if (tx)
        return (<a href={"https://etherscan.io/tx/" + tx} {...props}>{tx.slice(0, 10) + "..."}</a>)

    return null;
}

export default EtherScan;