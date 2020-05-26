import React from 'react';
import { linkTo } from '@storybook/addon-links';
import { CButton, CCard, CCardBody, CCardHeader } from '@coreui/react'


export default {
    title: 'Home',
};



const themes = [
    { component: 'Theme/Colors', story: 'Colors', name: 'Colors' },
    { component: 'Theme/Grays', story: 'Grays', name: 'Grays' }
]

const base = [
    { component: 'Base/Breadcrumb', story: 'Default', name: 'Breadcrumb' },
    { component: 'Base/Cards', story: 'Card', name: 'Card' },
    { component: 'Base/Forms', story: 'Default', name: 'Forms' },
    { component: 'Base/ListGroup', story: 'Default', name: 'ListGroup' },
    { component: 'Base/Navs', story: 'Default', name: 'Navs' },
    { component: 'Base/Tables', story: 'Table', name: 'Tables' },
    { component: 'Base/Sidebar', story: 'Default', name: 'Sidebar' },
]

const buttons = [
    { component: 'Buttons/Buttons', story: 'Button Single', name: 'Button' },
    { component: 'Buttons/Buttons', story: 'Button Standard', name: 'Button Standard' },
    { component: 'Buttons/Buttons', story: 'Button Outline', name: 'Button Outline' },
    { component: 'Buttons/Buttons', story: 'Button Ghost', name: 'Button Ghost' },
    { component: 'Buttons/Buttons', story: 'Button Square', name: 'Button Square' },
    { component: 'Buttons/Buttons', story: 'Button Pill', name: 'Button Pill' },
]

export const Home = () => <CCard>
    <CCardBody>
        Welcome to CoreUI v3 Storybook! If you're not familiar with CoreUI or Storybook, feel free to checkout the <a href='https://coreui.io/react/docs/'>CoreUI Docs</a> and <a href='https://storybook.js.org/docs/basics/introduction/'>Storybook Docs</a>.

    The CoreUI component stories are broken into 3 main sections.
        <ul>
            <li>Theme: General theme colors and typography.</li>
            <li>Base: All CoreUI components.</li>
            <li>Buttons: CoreUI buttons.</li>
        </ul>
    Links to all components:
        <ul>
            <li>Theme
                <ul>
                    {themes.map((t) =>
                        <li><CButton color='link' onClick={linkTo(t.component, t.story)}>{t.name}</CButton></li>
                    )}
                </ul>
            </li>
            <li>Base
                <ul>
                    {base.map((t) =>
                        <li><CButton color='link' onClick={linkTo(t.component, t.story)}>{t.name}</CButton></li>
                    )}
                </ul>
            </li>
            <li>Buttons
                <ul>
                    {buttons.map((t) =>
                        <li><CButton color='link' onClick={linkTo(t.component, t.story)}>{t.name}</CButton></li>
                    )}
                </ul>
            </li>
        </ul>
    </CCardBody>
</CCard>;

Home.story = {
};
