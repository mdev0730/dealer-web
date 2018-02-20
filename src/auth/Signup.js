import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';

import SignupForm from './components/SignupForm';
import { parseFormErrors } from '../shared/utils/form_errors';
import LoginScreen from './Login';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onClose() {
    <Switch>
      <Route path='/signin' component={LoginScreen} />
    </Switch>
  }

  handleSubmit(values) {
    return this.props.authenticateUserMutation({ variables: { ...values, domain: window.location.hostname } })
      .then((res) => {
        localStorage.setItem('graphcoolToken', res.data.authenticateUser.token);
        window.location.href = "/";
      })
      .catch(parseFormErrors);
  }

  render() {
    return (
      <div id="signup" layout="vertical" style={{ backgroundImage: `url(${require('../shared/img/authRegist.png')})`, backgroundRepeat: 'no-repeat' }} className="signup">
        <div className="signup-dialog">
          <div className="signup-title">Registration</div>
          <Link to="./signin">
            <img className="signup-close" src={require('../shared/img/close.png')} />
          </Link>
          <div className="signup-help">Please fill in your information below</div>
          <div className="signup-wrapper">
            <SignupForm onSubmit={this.handleSubmit} />
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

const SignupScreen = graphql(AUTHENTICATE_USER_MUTATION, {
  name: 'authenticateUserMutation',
  options: {
    fetchPolicy: 'no-cache',
  }
})(Signup);

export default SignupScreen;