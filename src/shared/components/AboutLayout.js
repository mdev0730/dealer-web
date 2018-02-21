import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';

import Header from './Header';
import AboutScreen from '../../about'

const { Content } = Layout;


class AboutLayout extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
  }

  render() {
    return (
      <Layout className="main-layout">
      <Header />
        <Layout>
              <Content>
                <Route exact path="/about" component={AboutScreen}/>
              </Content>
        </Layout>
      </Layout>
    );
  }
}

export default AboutLayout;
