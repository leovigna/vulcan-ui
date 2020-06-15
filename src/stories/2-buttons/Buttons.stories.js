import React from 'react';
import { action } from '@storybook/addon-actions';
import { CButton, CCard, CCardHeader, CCardBody, CRow, CCol } from '@coreui/react'
import { withCenter } from '../Center'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

const stateOptions = ['normal', 'active', 'disabled']
//const stateDefault = 'normal'

const colorOptions = ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark', 'link']
const colorDefault = 'primary';
const variantOptions = ['', 'outline', 'ghost']
const variantDefault = '';
const shapeOptions = ['', 'square', 'pill']
const shapeDefault = '';
const sizeOptions = ['', 'sm', 'lg']
const sizeDefault = '';
const groupId = 'GROUP-ID1';

const titleCase = (text) => text.charAt(0).toUpperCase() + text.slice(1);

export default {
    title: 'Buttons/Buttons'
};

export const ButtonSingle = () => {
    const color = select('color', colorOptions, colorDefault, groupId);
    const variant = select('variant', variantOptions, variantDefault, groupId);
    const shape = select('shape', shapeOptions, shapeDefault, groupId);
    const size = select('size', sizeOptions, sizeDefault, groupId);

    const disabled = boolean('disabled', false, groupId);
    const active = boolean('active', false, groupId);
    const block = boolean('block', false, groupId);

    const label = titleCase(color);

    return (<CButton disabled={disabled} active={active} color={color} variant={variant} shape={shape} size={size} block={block} onClick={action('clicked')}>{label}</CButton>)
}

ButtonSingle.story = {
    parameters: {
        notes: 'Button.',
    },
    decorators: [withCenter, withKnobs]
};


const ButtonGrid = ({ shape, variant, title }) => {
    return (
        <CCard>
            <CCardHeader><strong>{title}</strong></CCardHeader>
            <CCardBody>{stateOptions.map((state, idx) =>
                <CRow className={idx != 0 ? 'mt-3' : ''}>
                    <CCol key={state}>{state === 'active' ? 'Active State' : titleCase(state)}</CCol>
                    {colorOptions.map((color, idx) =>
                        <CCol key={idx}><CButton onClick={action('clicked')} variant={variant} shape={shape} block={true} disabled={state === 'disabled'} color={color} active={state === 'active'}>{titleCase(color)}</CButton></CCol>)
                    }
                </CRow>
            )}
            </CCardBody>
        </CCard>
    )
}

export const ButtonStandard = () => ButtonGrid({ shape: '', variant: '', title: 'Standard Buttons' })
export const ButtonOutline = () => ButtonGrid({ shape: '', variant: 'outline', title: 'Outline Buttons' })
export const ButtonGhost = () => ButtonGrid({ shape: '', variant: 'ghost', title: 'Ghost Buttons' })
export const ButtonSquare = () => ButtonGrid({ shape: 'square', variant: '', title: 'Square Buttons' })
export const ButtonPill = () => ButtonGrid({ shape: 'pill', variant: '', title: 'Pill Buttons' })