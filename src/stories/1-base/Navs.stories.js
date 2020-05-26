import React from 'react';
import { CCard, CCardBody, CNav, CNavItem, CNavLink } from '@coreui/react'

export default {
    title: 'Base/Navs',
};

export const Default = () => <CCard>
    <CCardBody>
        <CNav variant="pills">
            <CNavItem>
                <CNavLink active>Link</CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink>Link</CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink>Link</CNavLink>
            </CNavItem>
            <CNavItem>
                <CNavLink disabled>Disabled</CNavLink>
            </CNavItem>
        </CNav>
    </CCardBody>
</CCard>

Default.story = {
    parameters: {
        notes: 'React Nav component allows to create simple navigation. Learn how to use React Nav to quickly and easily create elegant and flexible navs.'
    },
};