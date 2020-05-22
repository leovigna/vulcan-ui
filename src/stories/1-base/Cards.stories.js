import React from 'react';
import { CCard, CCardHeader, CCardBody, CRow, CCol, CContainer, CBadge } from '@coreui/react'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

import { placeholderText } from '../data';

export default {
    title: 'Base/Cards',
};

const colorOptions = ['', 'primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark']
const colorDefault = '';
const groupId = 'GROUP-ID1';


const CardGen = ({ title, body }) => {
    const color = select('color', colorOptions, colorDefault, groupId);
    const borderColor = select('borderColor', colorOptions, colorDefault, groupId);
    const textColor = select('textColor', colorOptions, colorDefault, groupId);
    const accentColor = select('accentColor', colorOptions, colorDefault, groupId);
    const badge = boolean('badge', false, groupId);
    const badgeColor = select('badgeColor', colorOptions, colorDefault, groupId);
    const badgeShape = select('badgeShape', ['', 'pill'], '', groupId);


    return (<CContainer>
        <CRow>
            <CCol md="4" sm="6">
                <CCard color={color} borderColor={borderColor} textColor={textColor} accentColor={accentColor} >
                    <CCardHeader>{title} {badge ? <CBadge className='float-right' pill={badgeShape === 'pill'} color={badgeColor}>{badgeColor}</CBadge> : ''}</CCardHeader>
                    <CCardBody>
                        {body}
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    </CContainer>)
}

export const Card = () => CardGen({ title: 'Card title', body: placeholderText })

Card.story = {
    parameters: {
        notes: 'React cards component provide a flexible and extensible container for displaying content. React cards are delivered with a bunch of variants and options.',
    },
    decorators: [withKnobs]
};