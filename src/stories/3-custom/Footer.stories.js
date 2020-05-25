import React from 'react';
import VulcanFooter from '../../containers/VulcanLayout/VulcanFooter'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";
import { HashRouter, Route, Switch } from 'react-router-dom';

export default {
    title: 'Custom/Footer',
};

export const Footer = () => {
    return (
        <HashRouter>
            <Switch>
                <Route path="/" name="Footer" render={props =>
                    <>
                        <div style={{ height: 200 }} />
                        <VulcanFooter {...props} />
                    </>
                } />
            </Switch>
        </HashRouter>
    )
}

Footer.story = {
    parameters: {
        notes: 'Footer.',
    },
};