import React from 'react';
import { connect } from 'react-redux';
import { withRouter} from 'react-router-dom'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user-selector'

import { addItem, addItemStart, removeItem } from '../../redux/cart/cart-action';


import CustomButton from '../custom-button/custom-button-component';

import './collection-item-styles.scss';


const CollectionItem = ({ item, currentUser, addItem, history }) => {
    const { name, imageUrl, price } = item;
    return(
        <div className='collection-item'>
            <div className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
            <CustomButton onClick={() => {
                currentUser ? addItem(item) : history.push('/signin')
                
                }
            }
            inverted className='custom-button'>ADD TO CART</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(addItem(item)),  
});

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
})

export default withRouter(connect
    (mapStateToProps, mapDispatchToProps)
    (CollectionItem));