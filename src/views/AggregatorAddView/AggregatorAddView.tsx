/* eslint @typescript-eslint/explicit-function-return-type:0 */
/* eslint prefer-spread:0 */

import React, { Component } from 'react';
import {
    CCol as Col,
    CRow as Row,
    CCard as Card,
    CCardBody as CardBody,
    CCardHeader as CardHeader,
    CButton as Button,
    CForm as Form,
    CFormGroup as FormGroup,
    CLabel as Label,
    CInput as Input
} from '@coreui/react';

import { Formik } from 'formik';
import { connect } from 'react-redux'

class AggregatorAddView extends Component {
    constructor(props) {
        super(props);
    }


    loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>;

    render() {
        return (
            <div className="animated fadeIn">
                <Row>
                    <Col xs="12" sm="12" md="6">
                        <Card>
                            <CardHeader>Add Oracle Aggregator</CardHeader>
                            <CardBody>
                                <Formik
                                    initialValues={{ name: '', address: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.name) {
                                            errors.name = 'Required';
                                        }
                                        if (!values.address) {
                                            errors.address = 'Required';
                                        }

                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        console.debug(values)
                                        this.props.addCustomContract(values)
                                        setSubmitting(false);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        /* and other goodies */
                                    }) => (
                                            <Form onSubmit={handleSubmit}>
                                                <FormGroup>
                                                    <Label for="address">Contract Name</Label>
                                                    <Input
                                                        type="text"
                                                        value={values.name}
                                                        onChange={handleChange}
                                                        name="name"
                                                        placeholder="Enter Contract Name (eg. EURUSD)"
                                                    />
                                                    {errors.name && touched.name && errors.name}
                                                </FormGroup>
                                                <FormGroup>
                                                    <Label for="address">Contract Address</Label>
                                                    <Input
                                                        type="text"
                                                        value={values.address}
                                                        onChange={handleChange}
                                                        name="address"
                                                        placeholder="Enter Contract Address"
                                                    />
                                                    {errors.address && touched.address && errors.address}
                                                </FormGroup>
                                                <Button type="submit" disabled={isSubmitting}>Add Aggregator</Button>
                                            </Form>
                                        )}
                                </Formik>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { persisted } = state
    return { customcontracts: persisted.customcontracts }
}

function mapDipatchToProps(dispatch) {
    return {
        addCustomContract: contract => true//dispatch({ type: ADD_CUSTOM_CONTRACT, contract }),
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(AggregatorAddView);