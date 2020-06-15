import React, { Component, useState } from 'react';
import {
    CDropdown as Dropdown,
    CDropdownItem as DropdownItem,
    CDropdownMenu as DropdownMenu,
    CDropdownToggle as DropdownToggle
} from '@coreui/react';

const networks = [
    {
        id: '1',
        name: 'Mainnet'
    },
    {
        id: '3',
        name: 'Ropsten'
    }
]


const NetworkPicker = ({ networks }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                Dropdown
        </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Networks</DropdownItem>
                <DropdownItem divider />
                {networks.map(({ name, id }) => <DropdownItem onClick={() => console.debug(id)} id={id}>{name}</DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
    );
}

const WrappedNetworkPicker = () => <NetworkPicker networks={networks} />

export default WrappedNetworkPicker;