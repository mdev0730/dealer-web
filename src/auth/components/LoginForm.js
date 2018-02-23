import React, { Component } from 'react';
import { Form, Button, Alert, Checkbox } from 'antd';
import { Field, reduxForm } from 'redux-form';
import { renderInput } from '../../shared/utils/form_components';
import { required, password } from '../../shared/utils/form_validations';
import { Link } from 'react-router-dom';

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
    const { handleSubmit, error, submitting, forgoting } = this.props;

    return (
      <Form layout="vertical" className="login-form" onSubmit={handleSubmit}>

        {error && <FormItem><Alert type="error" message={error} closable /></FormItem>}

        <h1 align="center" style={{color:'#394158'}}>Login</h1>
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
        
          <Checkbox style={{color:'#BCBBC3'}}>Remember Me</Checkbox>
        <FormItem>
            <div style={{display: 'flex', marginTop:'20px'}}>
              <Button type="primary" loading={submitting} htmlType="submit" className="login-form-button">
                Login
              </Button>
              <Button type="primary"  className="forgot-form-button" style={{marginLeft: 10}}>
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
