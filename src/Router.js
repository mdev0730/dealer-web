import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import {init as firebaseInit} from './shared/components/firebase'
import {Provider} from 'react-redux'
import configureStore from './shared/components/ConfigureStore'
import MainLayout from './shared/components/MainLayout';
import SettingLayout from './shared/components/SettingLayout';
import LoginScreen from './auth/Login';
import SignupScreen from './auth/Signup';
import AboutLayout from './shared/components/AboutLayout';

class AppRouter extends Component {
  constructor(props) {
    super(props);
    firebaseInit();
    this.store = configureStore()
    this.onLoggedIn = this.onLoggedIn.bind(this);
  }

  onLoggedIn() {
    const { loggedInUserQuery: { loggedInUser } } = this.props;
    return loggedInUser && loggedInUser.id !== null;
  }

  render() {
    const appRouter = (
      <Switch>
        <Route path="/request" component={MainLayout} />
        <Route path="/bid" component={MainLayout} />
        <Route path="/order" component={MainLayout} />
        <Route path="/history" component={MainLayout} />
        <Route path='/signup' component={SignupScreen} />
        <Route path='/setting' component={SettingLayout} />
        <Route path='/about' component={AboutLayout} />
        {/* <Route path="/" component={NotFoundScreen} /> */}
        <Route path='/' component={LoginScreen} />
      </Switch>
    );
    return appRouter;
    // return this.onLoggedIn() ? appRouter : authRouter;
  }
}


// const AppRouterComponent = AppRouter;

export default AppRouter;
