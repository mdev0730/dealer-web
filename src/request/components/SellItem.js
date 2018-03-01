import React, { Component } from 'react';
import { Modal, Button, Carousel } from 'antd';
import SearchInput, { createFilter } from 'react-search-input'
import CompanyItem from '../../shared/components/CompanyItem';
import ReplaceListItem from '../components/ReplaceListItem';
var NumberFormat = require('react-number-format');

class SellItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: false,
      visible: false,
      confirmLoading: false,
      selectedItemIndex: 0,
      item: props.item
    };
    this.onSelect = this.onSelect.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.item !== this.props.item) {
      this.setState({ item: nextProps.item });
    }
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
    const { data } = this.props;
    const { item } = this.state;
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
              <div><div className="popup-request-search">
                <SearchInput className="popup-search-input" onChange={this.searchUpdated} />
              </div>
                <div className="replace-list">
                  {
                    data.map((sellitems, index) => {
                      return (
                        <ReplaceListItem item={sellitems} changeEvent={this.handleCheck} key={index} />
                      )
                    })
                  }
                </div>
              </div>
              :
              // <div>{ data[selectedItemIndex].itemname }</div>
              <div className="edit-sell-item">
                <img src={require("../../shared/img/back.png")} style={{ marginLeft: '20px', marginTop: '10px', marginBottom: '10px' }} onClick={() => this.backClick()} />

                <Carousel autoplay>
                  <div className="image-item">
                    <img className="image" src={require('../../shared/img/Externel.png')} />
                  </div>
                  <div className="image-item">
                    <img className="image" src={require('../../shared/img/Externel.png')} />
                  </div>
                  <div className="image-item">
                    <img className="image" src={require('../../shared/img/Externel.png')} />
                  </div>
                  <div className="image-item">
                    <img className="image" src={require('../../shared/img/Externel.png')} />
                  </div>
                </Carousel>
                <div style={{ marginTop: '10px' }}>
                  <div className="item-name">
                    <div className="name">{item.itemname}</div>
                    <div className="group">{item.companyname}</div>
                    <div className="serial">SKU:{item.serial}</div>
                    <div className="color">
                      <div style={{ width: '80px' }}>Color:{this.renderColor}</div>
                      <div className="color-item"></div>
                      <div className="color-item1"></div>
                      <div className="color-item2"></div>
                    </div>
                    <div className="attribute">
                      <div style={{ width: '80px' }}>Attribute</div>
                      <div className="attribute-item">brilliant</div>
                      <div className="attribute-item-selected">silk</div>
                      <div className="attribute-item">matt</div>
                    </div>
                    <div className="size">
                      <div style={{ width: '80px' }}>Size</div>
                      <div className="attribute-item">Large</div>
                      <div className="attribute-item-selected">Medium</div>
                      <div className="attribute-item">Normal</div>
                    </div>
                    <div className="amount">
                      <div style={{ width: '80px' }}>Amount</div>
                      <div className="amount-item">
                        <div className="plus">+</div>
                        <div className="val">10</div>
                        <div className="minus">-</div>
                      </div>
                    </div>
                    <Button onClick={() => this.handleCancel()}>Add</Button>
                  </div>
                </div>
              </div>
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
              <NumberFormat className="price-val" value={item.price}
                onChange={(e, value) => {
                  const formattedValue = e.target.value;
                  const item = this.state.item;
                  item.price = formattedValue;
                  this.setState({ item });
                  this.props.updatedItem(item);
                }} />
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