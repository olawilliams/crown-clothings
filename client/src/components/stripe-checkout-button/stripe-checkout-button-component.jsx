import React from 'react';

import { connect } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout';
import { getToken } from '../../redux/cart/cart-action';

import axios from 'axios';

const StripeCheckoutButton = ({ price, cartItems, getToken }) => {
    const priceForStripe= price * 100;
    const publishableKey = 'pk_test_8NJurycMBAciBdliuXj9OUri00Et04EpfO';

    const date = new Date();
    const year = date.getFullYear();
    const mon = date.getMonth() + 1;
    const day = date.getDate();
    const fullDate = `${day}/${mon}/${year}`
    
    const onToken = token => {
        getToken({...token, orderItems: cartItems, date: fullDate, price})
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            console.log(response)
            alert('Payment Successful');
        })
        .catch(error => {
            console.log( error);
        });
    }   
    
    return (
        <div>
            <StripeCheckout
                label= 'Pay Now'
                name='CROWN Clothings Store'
                billingAddress
                shippingAddress
                image='https://svgshare.com/i/CUz.svg'
                description={`Your total is $${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey} 
            
            />      
        </div>
  )};

  const mapDispatchToProps = dispatch => ({
      getToken: token => dispatch(getToken(token))
  });

export default connect(null, mapDispatchToProps)(StripeCheckoutButton);