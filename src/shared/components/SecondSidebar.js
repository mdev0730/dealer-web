import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
const { SecondSider } = Layout;

class SecondSidebar extends Component {
  
  render() {
    const { user } = this.props;

    return (
      <SecondSider
      >
      </SecondSider>
    );
  }
}

export default SecondSidebar;
