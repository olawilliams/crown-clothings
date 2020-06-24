import React from 'react';
import'./order-confirmation-styles.scss';

import OrderResult from '../../components/order-result/order-result-component'

import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect'
import { selectToken } from '../../redux/cart/cart-selector'
import { setPayment } from '../../redux/cart/cart-action'

class OrderConfirmation extends React.Component {
  
componentWillUnmount() {
    const { setPayment } = this.props;
    setPayment()
}
    
   render(){
    const {token } = this.props;
    const { created } = token
    return (
    <div className="order-confirmation-wrapper">
        <div className="top-message">
            <p>Order #{created} </p>
            <p>Your Order is placed and being processed</p>
        </div>

        <OrderResult token={token} />
       
    </div>
)}
};

const mapDispatchToProps = dispatch => ({
    setPayment: () => dispatch(setPayment())
});

const mapStateToProps = createStructuredSelector({
    token : selectToken
})


export default connect(mapStateToProps, mapDispatchToProps)(OrderConfirmation);