import React, { Component } from 'react';

const SellItem =({ item }) => {
        return (
            <div className="content-item">
              <div className="image-item">
                <img className="image" src={require('../../shared/img/Externel.png')} />
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
        );
    }
export default SellItem;