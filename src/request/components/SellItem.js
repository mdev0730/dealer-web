import React, { Component } from 'react';

const SellItem =({ item }) => {
    const totalval = item.price * item.count;
        return (
            <div className="content-item">
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
                <div className="color" style={{display:'flex', alignItems:'center'}}><b>Color:</b><div style={{width:'20px', height: '20px', marginLeft:'20px', backgroundColor:item.color, border:'1px'}}/> </div>
                <div className="serial">Serial:{item.serial}</div>
              </div>
              <div className="out-stock">Out of stock:</div>
              <div className="circle"></div>
              <div className="price-total">
                <div className="price">
                  <div>Price per unit:</div>
                  <div className="price-val">{item.price} NIS</div>
                </div>
                <div className="divider" />
                <div className="price">
                  <div>Total:</div>
                  <div className="total-val">{totalval} NIS</div>
                </div>
              </div>
            </div>
        );
    }
export default SellItem;