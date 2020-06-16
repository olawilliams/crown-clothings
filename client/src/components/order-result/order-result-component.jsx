import React from 'react';
import './order-result-styles.scss';

import OrderItem from '../order-item/order-item-component';


const OrderResult = ({ token }) => {
    const {email, created, price, orderItems, date,  card: { last4, address_line1, name }} = token

return (
    <div className="order-details">
    <div className="title">Order Details</div>

    <div className="top-section">
        <div className="left">

            <div className="details">
                <div className="detail-props">Order Id:</div>
                <div className="detail">{created}</div>
            </div>
    
            <div className="details">
                <div className="detail-props">Date Created:</div>
                <div className="detail">{date}</div>
            </div>

            <div className="details">
                <div className="detail-props">Name:</div>
                <div className="detail">{name}</div>
            </div>

            <div className="details">
                <div className="detail-props">Email:</div>
                <div className="detail">{email}</div>
            </div>

            <div className="details">
                <div className="detail-props">Order Total:</div>
                <div className="detail">${price}</div>
            </div>

            <div className="details">
                <div className="detail-props">Order Status:</div>
                <div className="detail">Processing</div>
            </div>

            <div className="details">
                <div className="detail-props">Payment:</div>
                <div className="detail">*********{last4}</div>
            </div>


         </div>

        <div className="right">
            <div className="details">
                <div className="detail-props">Shipping Address:</div>
                <div className="detail">{address_line1}</div>
            </div>

            <div className="details">
                <div className="detail-props">Billing Address:</div>
                <div className="detail">{address_line1}</div>
            </div>
        </div>

    </div>    

    <div className="order-items">
        {
            orderItems.map(item => <OrderItem key={item.id} item ={item} />)
        }     

    </div>
</div>
)};

export default OrderResult;