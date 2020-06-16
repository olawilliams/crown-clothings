import React from 'react';

import CartItem from '../cart-item/cart-item-component';
import CustomButton from '../custom-button/custom-button-component';

import { connect } from 'react-redux';
import {  selectCartItem } from '../../redux/cart/cart-selector';
import { toggleCartHidden } from '../../redux/cart/cart-action';

import { createStructuredSelector } from 'reselect';

import { withRouter } from 'react-router-dom';

import './cart-dropdown-styles.scss';

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ?
                cartItems.map(cartItem => 
                   <CartItem key={cartItem.id} item={cartItem} /> )
                : <span className='empty-message'>Your Cart is empty</span>
            }
            
        </div>
        <CustomButton onClick={() => {
         history.push('/checkout');
         dispatch(toggleCartHidden())
        }}>
         GO TO CHECKOUT</CustomButton>

    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItem
})

export default withRouter(connect(mapStateToProps)(CartDropdown));