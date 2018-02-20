import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import Requests from '../img/icon_requests.png';
import Quotes from '../img/icon_quotes.png';
import Orders from '../img/icon_order.png';
import History from '../img/icon_history.png';

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

class Sidebar extends Component {
  render() {
    const { user } = this.props;

    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <Menu theme="white" mode="inline">

          <Menu.Item key="dashboard" className="left-menu-items">
            <Link to="/request">
              <div className="div-left-menu-items">
                <img className="ic-requests" src={Requests}/>
                <div>Requests</div>
                <div className="notify">4</div>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="quotes" className="left-menu-items">
            <Link to="/request">
              <div className="div-left-menu-items">
                <img className="ic-requests" src={Quotes}/>
                <h4>Bids</h4>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="orders" className="left-menu-items">
            <Link to="/request">
              <div className="div-left-menu-items">
                <img className="ic-requests" src={Orders}/>
                <h4>Orders</h4>
              </div>
            </Link>
          </Menu.Item>
          <Menu.Item key="history" className="left-menu-items">
            <Link to="/request">
              <div className="div-left-menu-items">
                <img className="ic-requests" src={History}/>
                <h4>History</h4>
              </div>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}

export default Sidebar;
