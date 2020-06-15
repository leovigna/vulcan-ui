import React, { Component, useState } from 'react';
import { connect } from "react-redux"
import {
    CDropdown as Dropdown,
    CDropdownItem as DropdownItem,
    CDropdownMenu as DropdownMenu,
    CDropdownToggle as DropdownToggle
} from '@coreui/react';

import { setNetworkId } from '../../store/network/actions'

interface Props {
    networks: any,
    currentNetwork: any,
    setNetworkId: any
}

const NetworkPicker = ({ networks, currentNetwork, setNetworkId }: Props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>
                {currentNetwork.name}
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem header>Networks</DropdownItem>
                <DropdownItem divider />
                {networks.map(({ name, id }) => <DropdownItem onClick={() => setNetworkId(id)} id={id}>{name}</DropdownItem>)}
            </DropdownMenu>
        </Dropdown>
    );
}

NetworkPicker.defaultProps = {
    networks: []
}

function mapStateToProps(state: any) {
    const networkId = state.networkId
    const networks = state.networks
    const currentNetwork = networks.find(n => n.id === networkId)

    return {
        networks,
        currentNetwork
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        setNetworkId: (id: string) => dispatch(setNetworkId(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NetworkPicker);