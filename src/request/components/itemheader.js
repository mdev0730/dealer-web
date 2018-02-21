import React, { Component } from 'react';
import { connect } from 'react-redux';


const itemheader =() =>  {
  return (
    // <div className="request-content">
      <div className="request-content-header">
        <img className="image" src={require('../../shared/img/group.png')} />
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
    // </div>
  );
}

export default itemheader;