import React, { Component, PropTypes } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import SearchInput, { createFilter } from 'react-search-input'
import { parseFormErrors } from '../shared/utils/form_errors';
import ReactDOM from 'react-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Companysetting from './components/Companysetting';
import CompanyPassword from './components/CompanyPassword';
import CompanyPayment from './components/CompanyPayment';
import 'react-tabs/style/react-tabs.css';

class Setting extends Component {
    constructor(props) {
        super(props);
        this.state = { tabIndex: 0 };
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    componentDidMount() {

    }
    handleSubmit(values) {
    }
    render() {
        return (
            <div className="setting">
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Company Details</Tab>
                        <Tab>Password</Tab>
                        <Tab>Payments</Tab>
                    </TabList>
                    <TabPanel><Companysetting/></TabPanel>
                    <TabPanel><CompanyPassword/></TabPanel>
                    <TabPanel><CompanyPayment /></TabPanel>
                </Tabs>
            </div>
        );
    }
}


const SettingScreen = Setting;

export default SettingScreen;
