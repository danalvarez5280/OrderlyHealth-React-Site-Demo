import React, { Component } from 'react';
import MainContainer from '../../Containers/MainContainer';

import './OrderReceivedPage.css';

class OrderReceivedPage extends Component {
  constructor(props){
    super();
    this.state = {
      orders: props.submitOrder
    }
  }

  render() {
    console.log('orders', this.props)
    return (
      <div>
        <div>Your order has been received!</div>
        <p>We are confirming your prescription with your doctor! We will email you a payment link to complete your order withing 24 hours.</p>
        <p>Have Questions? Email us at orders@orderhealthy.com</p>

        <div className='review-btn'>Review Your order</div>
      </div>
    )
  }
};

export default MainContainer(OrderReceivedPage);