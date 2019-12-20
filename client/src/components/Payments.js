import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

class Payments extends Component{
  render(){
    //debugger;
    return(
      <StripeCheckout
      name="Emaily"
      currency='INR'
      description='₹50 for 5 credits'
      amount={5000}
      token={token => this.props.handleToken(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
      <button className="btn">
        Add Credits
      </button>
      </StripeCheckout>
    );
  }
};

const mapStateToProps = () => {

}
export default connect(null,actions)(Payments);
