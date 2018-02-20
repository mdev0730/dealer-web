import React, { Component, PropTypes } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import SearchInput, { createFilter } from 'react-search-input'
import { parseFormErrors } from '../shared/utils/form_errors';
import ReactDOM from 'react-dom'
import gql from 'graphql-tag';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Companysetting from './components/Companysetting';
import CompanyPassword from './components/CompanyPassword';
import CompanyPayment from './components/CompanyPayment';
// import TabPanel from 'react-tab-panel'
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

const FETCH_PLACES = gql`
  query FetchPlaces($userId: ID, $search: String) {
    allPlaces (filter: {
      AND: [
        { createdBy: { id: $userId } },
        { placeName: $search }
      ]
    }) {
      id
      createdAt
      placeName
      description
      addressCityTown
      addressCountry
      source
      status
      createdBy {
        id
        username
      }
    }
  }
`

const SettingScreen = graphql(FETCH_PLACES, {
    name: 'fetchPlaces',
    options: ({ user, search }) => {
        let variables = {};
        // if (!user.group.includes('ADMIN')) {
        //   variables = { userId: user.id };
        // }
        // if (search) {
        //   variables = { ...variables, search };
        // }
        return { variables };
    }
})(Setting);

export default SettingScreen;
