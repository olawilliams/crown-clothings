import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe= price * 100;
    const publishableKey = 'pk_test_8NJurycMBAciBdliuXj9OUri00Et04EpfO';
    
    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        })
        .then(response => {
            alert('Payment Succesful');
        })
        .catch(error => {
            console.log('Payment error: ', JSON.parse(error));
            alert('There is an issue with your payment. Please use the provised credit card');
        });
    }
    return (
        <StripeCheckout
            label= 'Pay Now'
            name='CROWN Clothing Ltd'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey} 
        />
    )       
}
export default StripeCheckoutButton;