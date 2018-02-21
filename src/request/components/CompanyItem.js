import React, { Component } from 'react';

const CompanyItem =({ item }) => {
        return (
            <div className="search-item">
                <div className="company-info">
                    <div className="company-name">{item.name}</div>
                    <div className="time">12:35</div>
                </div>
                <div className="product-name">Product Name: {item.productName}</div>
                <div className="delivery">Delivery Date: 12/03/18</div>
            </div>
        );
    }
export default CompanyItem;