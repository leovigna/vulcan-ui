import React from 'react';
import { action } from '@storybook/addon-actions';
import { CButton, CCard, CCardHeader, CCardBody, CRow, CCol } from '@coreui/react'
import { withCenter } from '../Center'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Theme/Typography',
};

export const Headings = () => <div>
    <h1>h1. Bootstrap heading</h1>
    <h2>h2. Bootstrap heading</h2>
    <h3>h3. Bootstrap heading</h3>
    <h4>h4. Bootstrap heading</h4>
    <h5>h5. Bootstrap heading</h5>
    <h6>h6. Bootstrap heading</h6>
</div>

export const Paragraph = () => <div>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nulla sapien, ultricies ac libero at, pulvinar venenatis ex. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum sit amet odio dolor. Aenean ac sem sapien. Maecenas cursus turpis at facilisis sagittis. Etiam nec volutpat nunc. Integer ornare feugiat leo, nec laoreet eros aliquet a. Aliquam semper, tortor dapibus lacinia accumsan, sem erat porta tortor, quis consequat velit eros sed diam. Aenean scelerisque sodales dui, nec scelerisque dui vulputate sed. Nam at elit lectus. Etiam id faucibus ante. Proin sollicitudin diam metus, a iaculis nisl commodo ac. Maecenas urna lorem, aliquam sit amet commodo eu, fermentum et ipsum. Vestibulum in gravida nibh.
</p>
</div>

Headings.story = {
    parameters: {
        notes: 'Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.',
    },
    decorators: [withCenter, withKnobs]
};

Paragraph.story = {
    parameters: {
        notes: 'Documentation and examples for Bootstrap typography, including global settings, headings, body text, lists, and more.',
    },
    decorators: [withCenter, withKnobs]
};