import React from 'react';
import { CCard, CCardBody, CSidebar, CSidebarHeader, CSidebarFooter, CSidebarMinimizer, CSidebarNav } from '@coreui/react'


export default {
    title: 'Base/Sidebar',
};

export const Default = () => <CCard>
    <CCardBody>
        <CSidebar>
            <CSidebarHeader />
            <CSidebarNav></CSidebarNav>
            <CSidebarFooter />
            <CSidebarMinimizer />
        </CSidebar>
    </CCardBody>
</CCard>

Default.story = {
    parameters: {
        notes: ''
    },
};