import React from 'react';
import { CCard, CCardBody, CBreadcrumb, CBreadcrumbItem } from '@coreui/react'


export default {
    title: 'Base/Breadcrumb',
};

export const Default = () => <CCard>
    <CCardBody>
        <CBreadcrumb>
            <CBreadcrumbItem><a href="#">Home</a></CBreadcrumbItem>
            <CBreadcrumbItem><a href="#">Library</a></CBreadcrumbItem>
            <CBreadcrumbItem active>Data</CBreadcrumbItem>
        </CBreadcrumb>
    </CCardBody>
</CCard>

Default.story = {
    parameters: {
        notes: 'React breadcrumb navigation component which indicates the current location within a navigational hierarchy that automatically adds separators.'
    },
};
