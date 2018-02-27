import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Form, Icon, Input, Row, Col, Menu, Dropdown } from 'antd';
import CompanyIcon from '../img/company1.png';

const FormItem = Form.Item;
const Header = Layout.Header;

class AppHeader extends Component {
  onLogout() {
    // localStorage.removeItem('graphcoolToken');
    // window.location.reload();
    window.location.href = "/signin";
  }
  onSetting() {
    window.location.href = "/setting";
  }
  onAbout() {
    window.location.href = "/about";
  }

  render() {
    const { user, onSearch } = this.props;
    // if (!user) return null;

    const profileMenu = (
      <Menu>
        <Menu.Item >
          <div className="profile-menu-mail"  onClick={() => this.onSetting()}>
            <img src={CompanyIcon} className="company-img"/>
            <div className="menu-mail">
              <div className="name">Touboul</div>
              <div className="mail">toboul@gmail.com</div>
            </div>
            <div className="menu-arrow">
              <img src={require('../img/arrow.png')}/>
            </div>
          </div>
          <div className="menu-divide"/>
        </Menu.Item>
        <Menu.Item>
          <div className="menu-about" onClick={() => this.onAbout()}>
            <img src={require('../img/about.png')}/>
            <div className="about">About</div>
          </div>
          <div className="menu-divide"/>
        </Menu.Item>
        <Menu.Item>
          <div className="menu-terms">
            <img src={require('../img/terms.png')}/>
            <div className="about">Terms of Us</div>
          </div>
          <div className="menu-divide"/>
        </Menu.Item>
        <Menu.Item>
          <div className="menu-contact">
            <img src={require('../img/call.png')}/>
            <div className="about">Contact Us</div>
          </div>
        </Menu.Item>
        {/* <Menu.Item>
          <div className="menu-terms">
            <img src={require('../img/terms.png')}/>
            <div className="about">Disconnect</div>
          </div>
        </Menu.Item> */}
        <Menu.Item>
          <div onClick={() => this.onLogout()} className="logout">
            <img src={require('../img/logout.png')}/>
            <div className="log">Log out</div>
          </div>
        </Menu.Item>
      </Menu>
    );

    return (
      <Header className="header">
        {/* <Row>
          <Col span={24}> */}
        <div className="logo" style={{backgroundColor: '#1e89df'}}>
          <Link to="/request" className="ic-logo" />
        </div>
        <div className="profile-status is-right">
          <div className="title">Touboul</div>
          <Menu mode="horizontal" selectable={true}>
            <Menu.Item>
              <Dropdown overlay={profileMenu}>
                <div className="dropdown">
                  <svg width="14px" height="14px" viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" >
                    <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                      <g id="REQUESTS-004" transform="translate(-1370.000000, -22.000000)">
                        <g id="Drop-down" transform="translate(1370.000000, 22.000000)">
                          <circle id="Oval-2" fill="#FFFFFF" cx="7" cy="7" r="7"></circle>
                          <polygon id="" fill="#1A9FFF" points="4.326 5.264 7 7.952 9.674 5.264 10.5 6.09 7 9.59 3.5 6.09"></polygon>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <img className="ic-mycompany" src={CompanyIcon} />
                </div>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>
        {/* </Col>
        </Row> */}
      </Header>
    );
  }
}

export default AppHeader;
