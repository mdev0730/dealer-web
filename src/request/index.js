import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import SearchInput, { createFilter } from 'react-search-input'
import gql from 'graphql-tag';

import { placeColumns } from '../shared/constants/placesConstants';
import { itemHeader } from './components/itemheader';

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [
        {
          name: 'test',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date()
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date()
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date()
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date()
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date()
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date()
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date()
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date()
        }
      ]
    }
  }

  componentDidMount() {
    this.updateUserSubscription = this.props.fetchPlaces.subscribeToMore({
      document: gql`
        subscription {
          Place(filter: {
            mutation_in: [CREATED, UPDATED, DELETED]
          }) {
            mutation
            node {
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
            previousValues {
              id
            }
          }
        }
      `,
      updateQuery: (previousState, { subscriptionData }) => {
        const { node, mutation, previousValues } = subscriptionData.data.Place;
        switch (mutation) {
          case 'CREATED': {
            return { allPlaces: previousState.allPlaces.concat(node) };
          }
          case 'UPDATED': {
            return {
              allPlaces: previousState.allPlaces
                .map(place => place.id == node.id ? node : place)
            };
          }
          case 'DELETED': {
            return { allPlaces: previousState.allPlaces.filter(place => place.id != previousValues.id) };
          };
          default:
            return previousState;
        }
      },
      onError: (err) => console.error(err),
    });
  }

  searchUpdated(term) {
    //   alert(term);
    // this.setState({searchTerm: term})
  }
  render() {
    const { companies } = this.state;
    const { fetchPlaces: { loading, allPlaces } } = this.props;
    if (loading) {
      return <div className="loader-indicator" />;
    }

    const dataSource = allPlaces.map(place => ({ ...place, key: place.id }));

    return (
      <div id="request" className="request-screen">
        <div className="request-search">
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          <div className="search-list">
            {
              companies.map((company, index) => {
                return (
                  <div key={index} className="search-item">
                    <div className="company-info">
                      <div className="company-name">{company.name}</div>
                      <div className="time">12:35</div>
                    </div>
                    <div className="product-name">Product Name: {company.productName}</div>
                    <div className="delivery">Delivery Date: 12/03/18</div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="request-content" style={{ height: '150vh', overflow: 'auto', maxHeight: '80vh' }}>
          <div className="request-content-header">
            <img className="image" src={require('../shared/img/group.png')} />
            <div className="groupname">
              <div className="group">TOGEL Constractors</div>
              <div className="project">Project Name: Gypsum Works</div>
            </div>
            <div className="delivery">
              <div><b>Delivery date:</b>21/02/18</div>
              <div><b>Address:</b> 3 Hanoshoshet St. Tel Aviv</div>
            </div>
            <div className="payment">
              <div><b>Payment:</b> By credit card</div>
              <div><b>Remark:</b> Half payment on the card and the rest on checks every month</div>
            </div>
          </div>
          <div className="colors-paint">
            <div className="data">Colors and paint</div>
          </div>
          <div className="content-list">
            <div className="content-item">
              <div className="image-item">
                <img className="image" src={require('../shared/img/Externel.png')} />
                <div className="count">22</div>
              </div>
              <div className="item-name">
                <div className="name">External slit</div>
                <div className="group">Tambour</div>
              </div>
              <div className="item-size">
                <div className="size"><b>Size:</b> Large</div>
                <div className="color"><b>Color:</b> </div>
                <div className="serial">Serial:4343902</div>
              </div>
              <div className="out-stock">Out of stock:</div>
              <div className="circle"></div>
              <div className="price-total">
                <div className="price">
                  <div>Price per unit:</div>
                  <div className="price-val">00.00 NIS</div>
                </div>
                <div className="divider" />
                <div className="price">
                  <div>Total:</div>
                  <div className="total-val">00.00 NIS</div>
                </div>
              </div>
            </div>
          </div>
          {/* <itemHeader/> */}
          {/* <Table
                    columns={placeColumns}
                    dataSource={dataSource}
                    expandedRowRender={record => <p className="no-margin">{record.description}</p>}
                /> */}
        </div>
      </div>
    )
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

const RequestScreen = graphql(FETCH_PLACES, {
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
})(Request);

export default RequestScreen;
