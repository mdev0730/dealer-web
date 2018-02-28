import React, { Component } from 'react';
import { Modal, Button, Carousel } from 'antd';
import SearchInput, { createFilter } from 'react-search-input'
import CompanyItem from '../../shared/components/CompanyItem';

class QuotItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      visible: false,
      confirmLoading: false,
      selectedItemIndex: 0,
    };
    this.onSelect = this.onSelect.bind(this);
  }
  showModal = () => {
    this.setState({
      visible: true,
      selectedItemIndex: 0
    });
  }
  handleOk = () => {
    this.setState({
      ModalText: 'The modal will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  }
  handleCancel = () => {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  }

  handleCheck = (index) => {
    this.setState({ selectedItemIndex: index });
  }
  backClick = () => {
    this.setState({ selectedItemIndex: 0 });
  }

  onSelect() {
    if (this.state.selected)
      this.setState({ selected: false });
    else
      this.setState({ selected: true });
  }

  render() {
    const { visible, confirmLoading, selectedItemIndex } = this.state;
    const { item, data } = this.props;
    const totalval = item.price * item.count;
    return (
      <div className="content-item" id="contentitem">
        <div className="image-item">
          <img className="image" src={require('../../shared/img/Externel.png')} />
          <div className="count">{item.count}</div>
        </div>
        <div className="item-name">
          {
            item.out ? 
          <div className="name"><p className="line">{item.itemname}</p></div>
          :
          <div className="name">{item.itemname}</div>
          }
          <div className="group">{item.companyname}</div>
        </div>
        <div className="item-size">
          <div className="size"><b>Size:</b> {item.size}</div>
          <div className="color" style={{ display: 'flex', alignItems: 'center' }}><b>Color:</b><div style={{ width: '20px', height: '20px', marginLeft: '20px', backgroundColor: item.color, border: '1px' }} /> </div>
          <div className="serial">Serial:{item.serial}</div>
        </div>
        <div style={{ display: 'flex' }}>
          <div className="out-stock">Out of stock:</div>
          {
            !item.out ?
              <div className="circle" ></div>
              :
              <div className="circle1" ><img src={require('../../shared/img/checked.png')} /></div>
          }
        </div>
        {
          !item.out ? <div className="price-total">
            <div className="price">
              <div>Price per unit:</div>
              <div className="price-val">{item.price} NIS</div>
            </div>
            <div className="divider" />
            <div className="price">
              <div>Total:</div>
              <div className="total-val">{totalval} NIS</div>
            </div>
          </div> :
            <div className="price-total1">
              <div className="item-replace">Replaced to</div>
            </div>
        }
      </div>

    )
  }
}
export default QuotItem;