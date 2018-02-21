import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import SearchInput, { createFilter } from 'react-search-input'
import gql from 'graphql-tag';

import { placeColumns } from '../shared/constants/placesConstants';
import itemHeader from './components/itemheader';
import CompanyItem from './components/CompanyItem';
import SellItem from './components/SellItem';

class Request extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sellitems: [
        {
          itemname: 'External slit1',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Large',
          color: '#666666',
          serial: '434343434',
          price: '10.25',
          count: '1'
        },
        {
          itemname: 'External slit2',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Small',
          color: '#222222',
          serial: '434343434',
          price: '10.25',
          count: '21'
        },
        {
          itemname: 'External slit3',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Medium',
          color: '#00ff33',
          serial: '434343434',
          price: '10.25',
          count: '23'
        },
        {
          itemname: 'External slit4',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Large',
          color: '#293843',
          serial: '434343434',
          price: '10.25',
          count: '24'
        },
        {
          itemname: 'External slit5',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Large',
          color: '#dddddd',
          serial: '434343434',
          price: '10.25',
          count: '25'
        },
        {
          itemname: 'External slit8',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Large',
          color: '#ff00ff',
          serial: '434343434',
          price: '10.25',
          count: '26'
        }
      ],
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
          name: '232323',
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
    const { companies, sellitems } = this.state;
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
                  <CompanyItem item={company} />
                )
              })
            }
          </div>
        </div>
        <div style={{ width: '100%' }}>
          <div className="request-content">
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
            <div className="content-list" >
              {
                sellitems.map((sell, index) => {
                  return (
                    <SellItem item={sell} />
                  )
                })
              }
            </div>
          </div>
          <div className="total-view" style={{ backgroundImage: `url(${require('../shared/img/background_bottom.png')})`, backgroundRepeat: 'repeat-x', backgroundSize: 'auto' }}>
            <div className="total-left-view">
              <div style={{ display: 'flex' }}>
                Total: <div className="price-val">00.00 NIS</div>
              </div>
              <div style={{ display: 'flex' }}>
                Discount: <div className="price-val">0%</div>
              </div>
              <div style={{ display: 'flex' }}>
                After discount: <div className="val">00.00NIS</div>
              </div>
              <div style={{ display: 'flex' }}>
                VAT(17%): <div className="val">00.00 NIS</div>
              </div>
            </div>
            <div className="totla-right-view is-right">
              <div className="right-image" style={{ backgroundImage: `url(${require('../shared/img/total_discount.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="total-payment">Total payment:</div>
                <div className="payment-val"> 00.00 </div>
                <div className="payment-type"> NIS </div>
              </div>
            </div>
          </div>
          <div className="send-btt">
          <div style={{display:'flex'}}>
            <Button>Send</Button>
            <img src={require('../shared/img/check1.png')} />
            </div>
          </div>
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
