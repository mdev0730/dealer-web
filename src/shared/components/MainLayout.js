import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Sidebar from './Sidebar';
import Header from './Header';
import RequestScreen from '../../request';
import BidScreen from '../../bid';
import HistoryScreen from '../../history';
import OrderScreen from '../../order';

const { Content } = Layout;

const RouteWithData = ({ component: Component, user, ...rest }) => (
  <Route exact {...rest} render={props => (<Component {...props} />)} />
)

class MainLayout extends Component {
  constructor(props) {
    super(props);

    this.state = { search: null };
  }

  componentDidMount() {
  }
  render() {
    // if (loggedInUserQuery.loading || fetchUser.loading) return null;

    return (
      <Layout className="main-layout">
      <Header />
        <Layout>
        <Sidebar/>
          <Layout>
              <Content>
                <RouteWithData exact path="/bid" component={BidScreen} />
                <RouteWithData exact path="/order" component={OrderScreen} />
                <RouteWithData exact path="/history" component={HistoryScreen} />
                <RouteWithData exact path="/request" component={RequestScreen}/>
                {/* <Route exact path="/setting" component={SettingScreen}/> */}
              </Content>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

const MainLayoutComponent = MainLayout;

export default MainLayoutComponent;
