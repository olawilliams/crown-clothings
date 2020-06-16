import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart-action';

import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';

import './cart-icon-styles.scss';
import { selectCartItemCount } from '../../redux/cart/cart-selector';
import { createStructuredSelector } from 'reselect';


const CartIcon = ({ toggleCartHidden, itemCount }) => (
    <div className='cart-icon' onClick={ toggleCartHidden }> 
        <ShoppingIcon className='shopping-icon' />
<span className='item-count'>{itemCount}</span>
    </div>
);

const mapStateToProps = createStructuredSelector({   
    itemCount: selectCartItemCount
});

const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
