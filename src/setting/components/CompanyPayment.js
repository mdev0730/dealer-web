import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';
import Select from 'react-select';
var NumberFormat = require('react-number-format');
const FormItem = Form.Item;

class CompanyPayment extends Component {

    constructor(props) {
        super(props);

        this.state = {
            paytype_label:"1",
            month_label: "1",
            year_label: "3",
        }
    }



    getInitialState = () => {
        return {};
    }
    setValueType = (value) => {
        this.setState({ paytype_label: value });
    }
    setValue = (value) => {
        this.setState({ month_label: value });
    }
    setValue1 = (value) => {
        this.setState({ year_label: value });
    }
    renderLink = () => {
        return <a style={{ marginLeft: 5 }} href="/upgrade" target="_blank">Upgrade here!</a>;
    }
    renderOption = (option) => {
        return (
            <div> {option.label}</div>
        );
    }
    renderValue = (option) => {
        return <strong >{option.label}</strong>;
    }

    render() {
        var option_paytype = [
            { label: 'Visa', value: '1' }, { label: 'Paypal', value: '2' }
        ]
        var options_month = [
            { label: '1', value: '1' }, { label: '2', value: '2' }, { label: '3', value: '3' }, { label: '4', value: '4' }, { label: '5', value: '5' }, { label: '6', value: '6' },
            { label: '7', value: '7' }, { label: '8', value: '8' }, { label: '9', value: '9' }, { label: '10', value: '10' }, { label: '11', value: '11' }, { label: '12', value: '12' },
        ];
        var options_year = [
            { label: '2018', value:'1' }, { label: '2019' , value:'2' }, { label: '2020', value:'3'  }, { label: '2021', value:'4' }, { label: '2022', value:'5'  },
            { label: '2023', value:'6' }, { label: '2024', value:'7'  }, { label: '2025', value:'8'  }, { label: '2026', value:'9'  }, { label: '2027', value:'10'  }, { label: '2028' , value:'11' }
        ];
        const { handleSubmit, error, submitting } = this.props;
        return (
            <div className="company-payment">
                <div className="company-logo">
                    <p> Choose payment method below </p>
                    {
                        this.state.paytype_label === null ?
                            <div>
                                <div className="visa-no-selected">
                                    <img className="visa-img" src={require('../../shared/img/visa.png')} />
                                    <div className="pay-mode-text">pay with Credit Card</div>
                                </div>
                                <div className="paypal-no-selected">
                                    <img className="paypal-img" src={require('../../shared/img/paypal.png')} />
                                    <div className="pay-mode-text">pay with PayPal</div>
                                </div>
                            </div>
                            :
                            this.state.paytype_label.value === "1" ?
                                <div>
                                    <div className="visa-selected">
                                        <img className="visa-img" src={require('../../shared/img/visa.png')} />
                                        <div className="pay-mode-text">pay with Credit Card</div>
                                    </div>
                                    <div className="paypal-no-selected">
                                        <img className="paypal-img" src={require('../../shared/img/paypal.png')} />
                                        <div className="pay-mode-text">pay with PayPal</div>
                                    </div>
                                </div>
                                :
                                <div>
                                    <div className="visa-no-selected">
                                        <img className="visa-img" src={require('../../shared/img/visa.png')} />
                                        <div className="pay-mode-text">pay with Credit Card</div>
                                    </div>
                                    <div className="paypal-selected">
                                        <img className="paypal-img" src={require('../../shared/img/paypal.png')} />
                                        <div className="pay-mode-text">pay with PayPal</div>
                                    </div>
                                </div>
                    }

                </div>
                <div className="company-details">
                    <Form layout="vertical" className="signup-form" onSubmit={handleSubmit}>
                        <div style={{ display: 'flex', height: '69px' }}>
                            <div className="field-cardtype">
                                <div>Card Type</div>
                                <Select
                                    className="select-type"
                                    options={option_paytype}
                                    optionRenderer={this.renderOption}
                                    onChange={this.setValueType}
                                    value={this.state.paytype_label}
                                    valueRenderer={this.renderValue}
                                />
                            </div>
                            <div className="field-id">
                                <div>ID Number</div>
                                <NumberFormat format="##########" className="in-id-format" />
                            </div>
                        </div>

                        <div style={{ display: 'flex', marginTop: '30px', height: '69px' }}>
                            <div className="field-card-input">
                                <div>Card Number</div>
                                <NumberFormat format="#### #### #### ####" className="in-card-format" />
                            </div>
                            <div className="field-card-input">
                                <div>CVV</div>
                                <NumberFormat format="###" className="in-card-format" />
                            </div>
                        </div>
                        <div style={{ display: 'flex', marginTop: '30px' }} >
                            <div style={{ display: 'flex' }} className="exp">
                                <div className="field-month">
                                    <div>Exp.Month</div>
                                    <Select
                                        className="select-month"
                                        onInputChange={(inputValue) => this._inputValue = inputValue}
                                        options={options_month}
                                        optionRenderer={this.renderOption}
                                        onChange={this.setValue}
                                        value={this.state.month_label}
                                        valueRenderer={this.renderValue}
                                    />
                                </div>
                                <div className="field-year">
                                    <div>Exp.Year</div>
                                    <Select
                                        className="select-year"
                                        onInputChange={(inputValue) => this._inputValue = inputValue}
                                        options={options_year}
                                        optionRenderer={this.renderOption}
                                        onChange={this.setValue1}
                                        value={this.state.year_label}
                                        valueRenderer={this.renderValue}
                                    />
                                </div>
                            </div>
                            <div className="input-full-name">
                                <Field
                                    name="full-name"
                                    label="Full Name"
                                    component={renderInput}
                                    placeholder=""
                                    validate={required}
                                />
                            </div>
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