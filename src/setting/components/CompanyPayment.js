import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;

class CompanyPayment extends Component {
    render() {
        const { handleSubmit, error, submitting } = this.props;
        return (
            <div className="company-payment">
                <div className="company-logo">
                    <p> Choose payment method below </p>
                    <div className="visa-selected">
                        <img className="visa-img" src={require('../../shared/img/visa.png')} />
                        <div className="pay-mode-text">pay with Credit Card</div>
                    </div>
                    <div className="paypal-no-selected">
                        <img className="paypal-img" src={require('../../shared/img/paypal.png')} />
                        <div className="pay-mode-text">pay with PayPal</div>
                    </div>
                </div>
                <div className="company-details">
                    <Form layout="vertical" className="signup-form" onSubmit={handleSubmit}>
                        <div style={{ display: 'flex' }}>
                            <Field
                                name="card-type"
                                label="Card Type"
                                component={renderInput}
                                placeholder=""
                                validate={required}
                            />
                            <Field
                                name="id-number"
                                label="ID Number"
                                component={renderInput}
                                placeholder=""
                                validate={required}
                            />
                        </div>

                        <div style={{ display: 'flex', marginTop: '30px' }}>
                            <Field
                                name="card-number"
                                label="Card Number"
                                component={renderInput}
                                placeholder=""
                                validate={required}
                            />
                            <Field
                                name="cvv"
                                label="CVV"
                                component={renderInput}
                                placeholder=""
                                validate={required}
                            />
                        </div>
                        <div style={{ display: 'flex', marginTop: '30px' }} >
                            <div style={{ display: 'flex' }} className="exp">
                                <Field
                                    name="month"
                                    label="Exp.Month"
                                    component={renderInput}
                                    placeholder=""
                                    validate={required}
                                />
                                <Field
                                    name="year"
                                    label="Exp.Year"
                                    component={renderInput}
                                    placeholder=""
                                    validate={required}
                                />
                            </div>
                            <Field
                                name="full-name"
                                label="Full Name"
                                component={renderInput}
                                placeholder=""
                                validate={required}
                            />
                        </div>
                        <FormItem>
                            <Button type="primary" loading={submitting} htmlType="submit" className="save-button">
                                Save
                            </Button>
                        </FormItem>
                    </Form></div>
            </div>

        );
    }
}


export default reduxForm({ form: 'CompanyPayment' })(CompanyPayment);