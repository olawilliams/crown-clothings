import React from 'react';

import { connect } from 'react-redux';
import { selectTokenForOrderDetails } from '../../redux/cart/cart-selector'

import './order-details-styles.scss';

import OrderResult from '../../components/order-result/order-result-component';

const OrderDetails = ({ OrderDetails }) => (
    <div className="order-details">
        <OrderResult token={OrderDetails}/> 
    </div>
);

const mapStateToProps = (state, ownProps) => ({
    OrderDetails: selectTokenForOrderDetails(ownProps.match.params.orderId)(state)
});

export default connect(mapStateToProps)(OrderDetails);