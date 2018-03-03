import React, { Component } from 'react';
import { Breadcrumb, Table, Button, Icon } from 'antd';
import { Link } from 'react-router-dom';
import SearchInput, { createFilter } from 'react-search-input'
import itemHeader from '../request/components/itemheader';
import CompanyItem from '../shared/components/CompanyItem';
import QuotItem from '../bid/components/QuotItem';

class History extends Component {
  constructor(props) {
    super(props);

    this.state = {
      
      sellitems: [
        {
          id: 1,
          itemname: 'External slit1',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Large',
          color: '#666666',
          serial: '434343434',
          price: '10.25',
          count: '1',
          out: false
        },
        {
          id: 2,
          itemname: 'External slit2',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Small',
          color: '#222222',
          serial: '434343434',
          price: '10.25',
          count: '21',
          out: true
        },
        {
          id: 3,
          itemname: 'External slit3',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Medium',
          color: '#00ff33',
          serial: '434343434',
          price: '10.25',
          count: '23',
          out: false
        },
        {
          id: 4,
          itemname: 'External slit8',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Large',
          color: '#ff00ff',
          serial: '434343434',
          price: '10.25',
          count: '26',
          out: false
        },
        {
          id: 5,
          itemname: 'External slit3',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Medium',
          color: '#00ff33',
          serial: '434343434',
          price: '12',
          count: '99',
          out: true
        },
        {
          id: 6,
          itemname: 'External slit3',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Medium',
          color: '#00ff33',
          serial: '434343434',
          price: '134',
          count: '2',
          out: true
        },
        {
          id: 7,
          itemname: 'External slit3',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Medium',
          color: '#00ff33',
          serial: '434343434',
          price: '15',
          count: '20',
          out: true
        },
        {
          id: 8,
          itemname: 'External slit3',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Medium',
          color: '#00ff33',
          serial: '434343434',
          price: '1034',
          count: '12',
          out: true
        },
        {
          id: 9,
          itemname: 'External slit3',
          companyname: 'Tambour',
          itemcunt: '10',
          size: 'Medium',
          color: '#00ff33',
          serial: '434343434',
          price: '134',
          count: '4',
          out: false
        }
      ],
      companies: [
        {
          name: 'test',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: 'test123',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        },
        {
          name: '232323',
          productName: 'Duplex',
          deliveryDate: new Date(),
          createdAt: new Date(),
        }
      ]
    }
  }

  componentDidMount() {
  }

  replaceRequest() {

  }

  getTotalAmount =() => {
    var totalAmount = 0;
    for(var i = 0; i < this.state.sellitems.length; i++){
      totalAmount += (this.state.sellitems[i].price * this.state.sellitems[i].count);
    }
    console.log(totalAmount);
    return totalAmount;
  }
  searchUpdated(term) {
    //   alert(term);
    // this.setState({searchTerm: term})
  }
  render() {
    const { companies, sellitems } = this.state;

    return (
      <div id="request" className="request-screen">
        <div className="request-search">
          <SearchInput className="search-input" onChange={this.searchUpdated} />
          <div className="search-list">
            {
              companies.map((company, index) => {
                return (
                  <CompanyItem item={company} key={index} />
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
              <div className="contact">
                <div className="contact-btt">
                  <img src={require('../shared/img/contact.png')}/>
                  <p>Contact</p>
                </div>
                <div className="email-btt">
                  <img src={require('../shared/img/email.png')}/>
                  <p>Email</p>
                </div>
              </div>
            </div>
            <div className="colors-paint">
              <div className="data">Colors and paint</div>
            </div>
            <div className="content-list-bid" >
              {
                sellitems.map((sell, index) => {
                  return (
                    <QuotItem item={sell} data={sellitems} key={index} />
                  )
                })
              }
            </div>
          </div>
          <div className="total-view" style={{ backgroundImage: `url(${require('../shared/img/background_bottom.png')})`, backgroundRepeat: 'repeat-x', backgroundSize: 'auto' }}>
          <div className="total-left-view">
              <div style={{ display: 'flex' }}>
                Total: <div className="price-val-normal">{this.getTotalAmount().toLocaleString()} NIS</div>
              </div>
              <div style={{ display: 'flex' }}>
                Discount: <div className="price-val-normal">10%</div>
              </div>
              <div style={{ display: 'flex' }}>
                After discount: <div className="val">{(this.getTotalAmount() * 0.9).toLocaleString()} NIS</div>
              </div>
              <div style={{ display: 'flex' }}>
                VAT(17%): <div className="val">{(this.getTotalAmount() * 0.9 * 0.17).toLocaleString()} NIS</div>
              </div>
            </div>
            <div className="totla-right-view is-right">
              <div className="right-image" style={{ backgroundImage: `url(${require('../shared/img/total_discount.png')})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                <div className="total-payment">Total payment:</div>
                <div className="payment-val"> {(this.getTotalAmount() * 0.9 * 1.17).toLocaleString()} </div>
                <div className="payment-type"> NIS </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const HistoryScreen =History;
export default HistoryScreen;
