import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

import { selectCartItem, selectCartTotal } from '../../redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';
import StripeCheckoutButton from '../../components/stripe-checkout-button/stripe-checkout-button-component';
import CustomButton from '../../components/custom-button/custom-button-component';

import CheckoutItem from '../../components/checkout-item/checkout-item-component'


import './checkout-styles.scss';

const CheckoutPage = ({ cartItems, total, history }) => (
    <div className='checkout-page'>
        <div className="heading">
            <span>Shopping Cart</span>
        </div>
        <div className='checkout-header image'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block name '>
                <span>Description</span>
            </div>
            <div className='header-block quantity'>
                <span>Quantity</span>
            </div>
            <div className='header-block price'>
                <span>Price</span>
            </div>
            <div className='header-block remove'>
                <span>Remove</span>
            </div>           
        </div>
            {
                 total   
                 ? cartItems.map(cartItem => 
                   <CheckoutItem key={cartItem.id} cartItem={cartItem} />)
                    

                : <div className="empty-message">
                    <span>You have no item in your shopping cart</span>
                    <CustomButton onClick={() => history.push('/shop')}
                    >Shop now</CustomButton>
                </div>
                                
            }

            <div className='total'>
                <span>Total: ${total}</span>
            </div>

        <StripeCheckoutButton price={total} cartItems={cartItems} />
           
            <div className='test-warning'>
            Test Credit Card: 4242 4242 4242 4242<br/>
            Security Code: 123,<br/>
            Expiration : Any Future Date

            </div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItem,
    total : selectCartTotal
})

export default withRouter(connect(mapStateToProps)(CheckoutPage));