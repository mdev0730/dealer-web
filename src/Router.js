import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

import MainLayout from './shared/components/MainLayout';
import SettingLayout from './shared/components/SettingLayout';
import LoginScreen from './auth/Login';
import NotFoundScreen from './shared/components/NotFoundScreen';
import SignupScreen from './auth/Signup';
import SettingScreen from './setting';
import AboutLayout from './shared/components/AboutLayout';

class AppRouter extends Component {
  constructor(props) {
    super(props);

    this.onLoggedIn = this.onLoggedIn.bind(this);
  }

  onLoggedIn() {
    const { loggedInUserQuery: { loggedInUser } } = this.props;
    return loggedInUser && loggedInUser.id !== null;
  }

  render() {
    // if (this.props.loggedInUserQuery.loading) {
    //   return <div className="loader-indicator" />;
    // }

    const appRouter = (
      <Switch>
        <Route path="/request" component={MainLayout} />
        <Route path="/bid" component={MainLayout} />
        <Route path='/signup' component={SignupScreen} />
        <Route path='/setting' component={SettingLayout} />
        <Route path='/about' component={AboutLayout} />
        {/* <Route path="/" component={NotFoundScreen} /> */}
        <Route path='/' component={LoginScreen} />
      </Switch>
    );
    // const authRouter = (
    //   <Switch>
    //     <Route path='/signin' component={LoginScreen} />
    //     <Route path='/signup' component={SignupScreen} />
    //   </Switch>
    // );
    return appRouter;
    // return this.onLoggedIn() ? appRouter : authRouter;
  }
}

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

const AppRouterComponent = graphql(LOGGED_IN_USER_QUERY, {
  name: 'loggedInUserQuery',
  options: {
    fetchPolicy: 'network-only',
  }
})(AppRouter);

export default AppRouterComponent;
