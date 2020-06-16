import React from 'react';
import './order-item-styles.scss';

const OrderItem = ({ item }) =>{ 
    const {imageUrl, price, quantity, name } = item
    return (
   
    <div className='order-item'>
        <div className="image-container">
            <img src={imageUrl} alt=""/>
        </div>
             <span className="name">{name}</span>
             <span className="quantity">{quantity}</span>
             <span className="price">${price}</span>
       
    </div>
)};

export default OrderItem;