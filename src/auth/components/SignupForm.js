import React, { Component } from 'react';
import { Form, Button, Alert } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;

class SignupForm extends Component {
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form layout="vertical" className="signup-form" onSubmit={handleSubmit}>

        {error && <FormItem><Alert type="error" message={error} closable /></FormItem>}
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

        <div style={{ display: 'flex' }}>
          <Field
            name="password"
            label="Password"
            component={renderInput}
            placeholder=""
            type="password"
            validate={[required, password]}
          />
          <Field
            name="confirmpassword"
            label="Password Authentication"
            component={renderInput}
            placeholder=""
            type="password"
            validate={[required, password]}
          />
        </div>

        <div style={{ display: 'flex' }}>
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
        <div style={{ display: 'flex' }}>
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
        <div className="term1">
          By opening an account, you agree to
        </div>
        <div className="term1">
          our <span className="fontH1" style={{color:'#1A9FFF'}}>Terms of Use</span>
        </div>
        <FormItem>
          <Button type="primary" loading={submitting} htmlType="submit" className="register-button fontH1">
            Register
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default reduxForm({ form: 'SignupForm' })(SignupForm);
