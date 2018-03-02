import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './Header';
import SettingScreen from '../../setting';

const { Content } = Layout;

class SettingLayout extends Component {
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
              <Content>
                <Route exact path="/setting" component={SettingScreen}/>
              </Content>
        </Layout>
      </Layout>
    );
  }
}


const SettingLayoutComponent = SettingLayout;

export default SettingLayoutComponent;
