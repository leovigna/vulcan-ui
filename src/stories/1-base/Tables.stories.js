import React from 'react';
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { users } from '../data';

export default {
    title: 'Base/Tables',
};

const groupId = 'GROUP-ID1';

export const Table = () => {
    const striped = boolean('striped', false, groupId);
    const borderless = boolean('borderless', false, groupId);
    const hover = boolean('hover', false, groupId);

    let classNameList = ["table"]
    if (striped) classNameList.push("table-striped")
    if (borderless) classNameList.push("table-borderless")
    if (hover) classNameList.push("table-hover")

    return (<table className={classNameList.join(" ")}>
        <thead>
            <tr>
                {users.columns.map(h => <th scope="col">{h.title}</th>)}
            </tr>
        </thead>
        <tbody>
            {users.rows.map(u =>
                <tr>
                    {users.columns.map(h => <td>{u[h.key]}</td>)}
                </tr>
            )}
        </tbody>
    </table>)
}

Table.story = {
    parameters: {
        notes: 'Table.',
    },
    decorators: [withKnobs]
};

