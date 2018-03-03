import React, { Component } from 'react';
import { Form, Button, Alert, Checkbox } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';

const FormItem = Form.Item;

class LoginForm extends Component {
  handleForgotpassword() {
    // alert("a");
    // window.location.href = "Signup";
    // <Switch>
    //   <Route path='/' component={SignupScreen} />
    // </Switch>
  }
  render() {
    const { handleSubmit, error, submitting } = this.props;

    return (
      <Form layout="vertical" className="login-form" onSubmit={handleSubmit}>

        {error && <FormItem><Alert type="error" message={error} closable /></FormItem>}

        <div className="login-form-title" align="center" style={{ marginTop: 20, marginBottom:40  }}>Login</div>
        <Field
          name="email"
          label="Name"
          component={renderInput}
          placeholder=""
          validate={required}
        />

        <Field
          name="password"
          label="Password"
          component={renderInput}
          placeholder=""
          type="password"
          validate={[required, password]}
        />

        <Checkbox className="remember-checkbox">Remember Me</Checkbox>
        <FormItem>
          <div style={{ display: 'flex', marginTop: '20px' }}>
            <Button type="primary" loading={submitting} htmlType="submit" className="login-form-button">
              Login
              </Button>
            <Button type="primary" className="forgot-form-button">
              forgot password
                {/* <Link to="../Signup">forgot password</Link>                   */}
            </Button>
          </div>
        </FormItem>
      </Form>
    )
  }
}

export default reduxForm({ form: 'LoginForm' })(LoginForm);
