import React, { Component } from 'react';
import { connect } from 'react-redux';


class itemheader extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <div className="item-header">
            <div className="img-item">
                <img className="imgsrc" src=""/>
            </div>
            <h4>
            TOGEL Constractors
            Project Name:
            </h4>
        </div>
    );
  }
}


export default itemheader;