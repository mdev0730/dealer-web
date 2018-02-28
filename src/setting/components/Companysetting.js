import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, Button, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;

class Companysetting extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;
    return (
      <div className="company-setting">
        <div style={{ display: 'flex' }}>
          <div className="company-logo">
            <p> Logo </p>
            <div className="help"> Minimum image size  300x300 px</div>
            <img className="company-img" src={require('../../shared/img/company1.png')} />
            <img className="edit" src={require('../../shared/img/edit.png')} />
          </div>
          <div className="company-details">
            <Form layout="vertical" className="signup-form" onSubmit={handleSubmit}>
              <div style={{ display: 'flex' }}>
                <Field
                  name="comp-name"
                  label="Company Name"
                  component={renderInput}
                  placeholder=""
                  validate={required}
                />
                <Field
                  name="comp-number"
                  label="Company Number"
                  component={renderInput}
                  placeholder=""
                  validate={required}
                />
              </div>

              <div style={{ display: 'flex', marginTop: '30px' }}>
                <Field
                  name="address"
                  label="Address"
                  component={renderInput}
                  placeholder=""
                  validate={required}
                />
                <Field
                  name="email"
                  label="Email"
                  component={renderInput}
                  placeholder=""
                  validate={required}
                />
              </div>
              <div style={{ display: 'flex', marginTop: '30px' }}>
                <Field
                  name="contact"
                  label="Contact"
                  component={renderInput}
                  placeholder=""
                  validate={required}
                />
                <Field
                  name="phone"
                  label="Phone"
                  component={renderInput}
                  placeholder=""
                  validate={required}
                />
              </div>
            </Form>
          </div>
        </div>
        <div className="save-button-view is-center">
          <Button type="primary" loading={submitting} htmlType="submit" className="save-button">Save</Button>
        </div>
      </div>

    );
  }
}


export default reduxForm({ form: 'Companysetting' })(Companysetting);