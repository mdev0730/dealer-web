import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { Layout } from 'antd';
import { graphql, compose } from 'react-apollo';
import gql from 'graphql-tag';

import Sidebar from './Sidebar';
import Header from './Header';
import SecondSidebar from './SecondSidebar';
import RequestScreen from '../../request';
import PlacesScreen from '../../places';
import NewPlaceScreen from '../../places/NewPlace';
import EditPlaceScreen from '../../places/EditPlace';
import UsersScreen from '../../users';
import NewUserScreen from '../../users/NewUser';
import EditUserScreen from '../../users/EditUser';
import StoriesScreen from '../../stories';
import NewStoryScreen from '../../stories/NewStory';
import EditStoryScreen from '../../stories/EditStory';
import CampaignsScreen from '../../campaigns';
import NewCampaignScreen from '../../campaigns/NewCampaign';
import EditCampaignScreen from '../../campaigns/EditCampaign';
import NewEventScreen from '../../campaigns/NewEvent';
import EditEventScreen from '../../campaigns/EditEvent';

import CollectionsScreen from '../../collections';
import NewCollectionScreen from '../../collections/NewCollection';
import EditCollectionScreen from '../../collections/EditCollection';
import EditCollectionAddPlaceScreen from '../../collections/EditCollectionAddPlace';

import FeedScreen from '../../feed';
import NewFeedScreen from '../../feed/NewFeed';

import NewConditionGroupScreen from '../../campaigns/NewConditionGroup';
import EditConditionGroupScreen from '../../campaigns/EditConditionGroup';

import NewConditionScreen from '../../campaigns/NewCondition';
import EditConditionScreen from '../../campaigns/EditCondition';
import SettingScreen from '../../setting';

const { Content } = Layout;

const RouteWithData = ({ component: Component, user, search, ...rest }) => (
  <Route exact {...rest} render={props => (<Component user={user} search={search} {...props} />)} />
)

class SettingLayout extends Component {
  constructor(props) {
    super(props);

    this.state = { search: null };
  }

  componentDidMount() {
    this.updateUserSubscription = this.props.fetchUser.subscribeToMore({
      document: gql`
        subscription {
          User(filter: {
            mutation_in: [UPDATED]
          }) {
            mutation
            node {
              id
              displayName
              email
            }
          }
        }
      `,
      updateQuery: (previousState, { subscriptionData }) => {
        const user = subscriptionData.data.User.node;
        if (previousState.User.id == user.id) {
          return { User: user };
        }
        return previousState;
      },
      onError: (err) => console.error(err),
    });
  }

  render() {
    const { loggedInUserQuery, fetchUser } = this.props;

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

const LOGGED_IN_USER_QUERY = gql`
  query LoggedInUserQuery {
    loggedInUser {
      id
    }
  }
`

const FETCH_USER = gql`
  query FetchUser($id: ID!) {
    User(id: $id) {
      id
      displayName
      email
      group
    }
  }
`

const SettingLayoutComponent = compose(
  graphql(LOGGED_IN_USER_QUERY, {
    name: 'loggedInUserQuery',
    options: {
      fetchPolicy: 'network-only',
    }
  }),
  graphql(FETCH_USER, {
    name: 'fetchUser',
    options: (props) => ({
      variables: {
        // id: props.loggedInUserQuery.loggedInUser.id,
      },
    })
  }),
)(SettingLayout);

export default SettingLayoutComponent;
