import React from 'react';
import VulcanHeader from '../../containers/VulcanLayout/VulcanHeader'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { HashRouter, Route, Switch } from 'react-router-dom';

export default {
    title: 'Custom/Header',
};

export const Header = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" name="Header" render={props => <VulcanHeader {...props} />} />
            </Switch>
        </HashRouter>
    )
}

Header.story = {
    parameters: {
        notes: 'Header.',
    },
};