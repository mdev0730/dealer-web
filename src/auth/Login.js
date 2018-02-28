import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Logo from '../shared/img/logo.png';

import { Link } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import { parseFormErrors } from '../shared/utils/form_errors';
import { auto } from 'async';
import { Route, Switch } from 'react-router-dom';
import SignupScreen from './Signup';
import MainLayoutComponent from '../shared/components/MainLayout';

class Login extends Component {
  constructor(props) {
    super(props);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    localStorage.setItem('graphcoolToken', "aaaa");
    window.location.href = "/request";
    // return this.props.authenticateUserMutation({ variables: { ...values, domain: window.location.hostname } })
    //   .then((res) => {
    //     localStorage.setItem('graphcoolToken', res.data.authenticateUser.token);
    //     window.location.href = "/";
    //   })
    //   .catch(parseFormErrors);
  }
  gotoRegister(){
    <Switch>
      <Route path='/signup' component={SignupScreen} />
    </Switch>
  }

  render() {
    return (
      <div id="login" layout="vertical" style={{backgroundImage: `url(${require('../shared/img/authBack.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <div className="login-panel">
          <img className="login-logo"  src={Logo} />
            <div className="login-wrapper">
              <LoginForm onSubmit={this.handleSubmit} />
            </div>
            <div style={{display:'flex'}}>
              <div className="fontH9" style={{color:'white', marginTop:'25px', marginLeft:'20px'}}>About Dealer |</div>
              <Link to="./signup" className="fontH1" style={{color:'white', marginTop:'24px', marginLeft:'10px', textDecoration:'underline'}} onClick={this.handleRegister}> Register</Link>
              </div>
        </div>
      </div>
    )
  }
}

const AUTHENTICATE_USER_MUTATION = gql`
  mutation AuthenticateUserMutation ($email: String!, $password: String!, $domain: String) { 
    authenticateUser(email: $email, password: $password, domain: $domain) {
      token
    }
  }
`

const LoginScreen = graphql(AUTHENTICATE_USER_MUTATION, {
  name: 'authenticateUserMutation',
  options: {
    fetchPolicy: 'no-cache',
  }
})(Login);

export default LoginScreen;
