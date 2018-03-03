import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Logo from '../shared/img/mark-white.png';

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
          <div align="center">
            <img className="mark" src={Logo} />
          </div>
        </div>
      </div>
    )
  }
}

const SignupScreen = Signup;

export default SignupScreen;
