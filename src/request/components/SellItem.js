import React, { Component } from 'react';
import { Modal } from 'antd';
import SearchInput, { createFilter } from 'react-search-input'
import CompanyItem from '../components/CompanyItem';
import ReplaceListItem from '../components/ReplaceListItem';

class SellItem extends Component {
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
    this.setState({ selectedItemIndex:index });
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
          <div className="name">{item.itemname}</div>
          <div className="group">{item.companyname}</div>
        </div>
        <div className="item-size">
          <div className="size"><b>Size:</b> {item.size}</div>
          <div className="color" style={{ display: 'flex', alignItems: 'center' }}><b>Color:</b><div style={{ width: '20px', height: '20px', marginLeft: '20px', backgroundColor: item.color, border: '1px' }} /> </div>
          <div className="serial">Serial:{item.serial}</div>
        </div>
        <Modal title=""
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          className="modal-replace"
        >
          {
            selectedItemIndex == 0 ?
              <div><
                div className="popup-request-search">
                <SearchInput className="popup-search-input" onChange={this.searchUpdated} />
              </div>
                <div className="replace-list">
                  {
                    data.map((sellitems, index) => {
                      return (
                        <ReplaceListItem item={sellitems} changeEvent={this.handleCheck} key={index}/>
                      )
                    })
                  }
                </div>
              </div>
            :
                  <div>{ data[selectedItemIndex].itemname }</div>
        }

        </Modal>
        <div onClick={() => this.onSelect()} style={{ display: 'flex' }}>
          <div className="out-stock">Out of stock:</div>
          {
            !this.state.selected ?
              <div className="circle" ></div>
              :
              <div className="circle1" ><img src={require('../../shared/img/checked.png')} /></div>
          }
        </div>
        {
          !this.state.selected ? <div className="price-total">
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
              <div className="item-replace" onClick={() => this.showModal()}>Replace</div>
            </div>
        }
      </div>

    )
  }
}
export default SellItem;