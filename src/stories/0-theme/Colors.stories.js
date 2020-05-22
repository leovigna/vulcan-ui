import React from 'react';
import { action } from '@storybook/addon-actions';
import { CButton, CCard, CCardHeader, CCardBody, CRow, CCol, CContainer } from '@coreui/react'
import { withCenter } from '../Center'
import { withKnobs, select, boolean } from "@storybook/addon-knobs";

export default {
    title: 'Theme/Colors',
};

const colors = [
    {
        title: 'Brand Primary Color',
        color: 'primary',
        hex: '#321fdb',
        red: 50,
        green: 31,
        blue: 219
    },
    {
        title: 'Brand Secondary Color',
        color: 'secondary',
        hex: '#ced2d8',
        red: 206,
        green: 210,
        blue: 216
    },
    {
        title: 'Brand Success Color',
        color: 'success',
        hex: '#2eb85c',
        red: 46,
        green: 184,
        blue: 92
    },
    {
        title: 'Brand Danger Color',
        color: 'danger',
        hex: '#e55353',
        red: 229,
        green: 83,
        blue: 83
    },
    {
        title: 'Brand Warning Color',
        color: 'warning',
        hex: '#f9b115',
        red: 249,
        green: 177,
        blue: 21
    },
    {
        title: 'Brand Info Color',
        color: 'info',
        hex: '#3399ff',
        red: 51,
        green: 153,
        blue: 255
    },
    {
        title: 'Brand Light Color',
        color: 'light',
        hex: '#ebedef',
        red: 235,
        green: 237,
        blue: 239
    },
    {
        title: 'Brand Dark Color',
        color: 'dark',
        hex: '#636f83',
        red: 99,
        green: 111,
        blue: 131
    }
]

const grays = [
    {
        title: 'Gray 100 Color',
        color: 'gray-100',
        hex: '#ebedef',
        red: 235,
        green: 237,
        blue: 239
    },
    {
        title: 'Gray 200 Color',
        color: 'gray-200',
        hex: '#d8dbe0',
        red: 216,
        green: 219,
        blue: 224
    },
    {
        title: 'Gray 300 Color',
        color: 'gray-300',
        hex: '#c4c9d0',
        red: 196,
        green: 201,
        blue: 208
    },
    {
        title: 'Gray 400 Color',
        color: 'gray-400',
        hex: '#b1b7c1',
        red: 177,
        green: 183,
        blue: 193
    },
    {
        title: 'Gray 500 Color',
        color: 'gray-500',
        hex: '#9da5b1',
        red: 157,
        green: 165,
        blue: 177
    },
    {
        title: 'Gray 600 Color',
        color: 'gray-600',
        hex: '#8a93a2',
        red: 138,
        green: 147,
        blue: 162
    },
    {
        title: 'Gray 700 Color',
        color: 'gray-700',
        hex: '#768192',
        red: 118,
        green: 129,
        blue: 146
    },
    {
        title: 'Gray 800 Color',
        color: 'gray-800',
        hex: '#636f83',
        red: 99,
        green: 11,
        blue: 131
    },
    {
        title: 'Gray 900 Color',
        color: 'gray-900',
        hex: '#4f5d73',
        red: 79,
        green: 93,
        blue: 115
    }
]

const ColorsGrid = ({ colors, title }) => {
    return (
        <CContainer>
            <CCard>
                <CCardHeader>{title}</CCardHeader>
                <CCardBody>
                    <CRow>
                        {colors.map((color, idx) =>
                            <CCol xl="2" md="3" sm="4" xs="6" className='mb-4' key={idx}>
                                <div className={`bg-${color.color} theme-color w-75 rounded mb-2`} style={{ paddingTop: '75%' }}></div>
                                <h6>{color.title}</h6>
                                <table className='w-100'>
                                    <tbody>
                                        <tr>
                                            <td class="text-muted">HEX:</td>
                                            <td class="font-weight-bold">{color.hex}</td>
                                        </tr>
                                        <tr>
                                            <td class="text-muted">RGB:</td>
                                            <td class="font-weight-bold">rgb({color.red}, {color.green}, {color.blue})</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </CCol>)
                        }
                    </CRow>
                </CCardBody>
            </CCard>
        </CContainer>
    )
}

export const Colors = () => ColorsGrid({ colors, title: 'Theme colors' })
export const Grays = () => ColorsGrid({ colors: grays, title: 'Grays colors' })

Colors.story = {
    parameters: {
        notes: 'Theme colors.',
    },
    decorators: [withKnobs]
};

Grays.story = {
    parameters: {
        notes: 'Theme grays.',
    },
    decorators: [withKnobs]
};

