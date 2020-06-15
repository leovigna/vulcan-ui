import React from 'react';
import { CContainer, CRow, CCol, CForm, CFormGroup, CLabel, CInput, CFormText } from '@coreui/react'

export default {
    title: 'Base/Forms',
};

export const Default = () => <CContainer>
    <CRow>
        <CCol sm="12">
            <CForm action="" method="post">
                <CFormGroup>
                    <CLabel htmlFor="nf-email">Email</CLabel>
                    <CInput
                        type="email"
                        id="nf-email"
                        name="nf-email"
                        placeholder="Enter Email.."
                        autoComplete="email"
                    />
                    <CFormText className="help-block">Please enter your email</CFormText>
                </CFormGroup>
                <CFormGroup>
                    <CLabel htmlFor="nf-password">Password</CLabel>
                    <CInput
                        type="password"
                        id="nf-password"
                        name="nf-password"
                        placeholder="Enter Password.."
                        autoComplete="current-password"
                    />
                    <CFormText className="help-block">Please enter your password</CFormText>
                </CFormGroup>
            </CForm>
        </CCol>
    </CRow>
</CContainer>

Default.story = {
    parameters: {
        notes: 'React forms support the following form controls: input, textarea, button, checkbox, radio, and select. Learn how to build various types of form layouts such as vertical form, horizontal form and inline from quickly and easily with the CoreUI.',
    },
};