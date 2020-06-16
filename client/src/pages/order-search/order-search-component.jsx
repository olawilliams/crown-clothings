import React, { useState } from 'react';
import './order-search-styles.scss';

import CustomButton from '../../components/custom-button/custom-button-component';
import FormInput from '../../components/form-input/form-input-component';
import OrderResult from '../../components/order-result/order-result-component'

import { connect} from 'react-redux'
import { createStructuredSelector} from 'reselect';
import { selectTokenOrderItems } from '../../redux/cart/cart-selector'

const OrderSearch = ({ getOrderItems }) =>  {
    const [credentials, setCredentials] = useState({ email: '', orderId: ''});
    const [isOrder, setIsOrder] = useState(false)
    
    const { email, orderId } = credentials;
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({...credentials, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault();
       setIsOrder({ isOrder: true })
    }

        const filteredOrder = getOrderItems.filter(order => order.email===email && order.created===parseInt(orderId));

        return (
            <div className='wrapper'>
                 <div className='order-search'>
                    <h1 className='title'>Order Search</h1>

                    <form onSubmit={handleSubmit} >
                        <FormInput 
                            type='email'
                            name='email'
                            label='Email'
                            value={email}
                            handleChange={handleChange}
                            required
                        />

                        <FormInput 
                            type='text'
                            name='orderId'
                            label='Order Id'
                            value={orderId}
                            handleChange={handleChange}
                            required
                        />

                        <CustomButton type='submit'>Search Order</CustomButton>
        
                    </form>                  
                </div>

                <div className="order-item-wrapper">
                    {
                        isOrder ?
                        (
                           ( filteredOrder.length === 1) ?
                            <OrderResult token={filteredOrder[0]} />
                            : <h3 className='no-order'>No Order match this criteria</h3>
                        )
                        : null
                    }
                </div>
            </div>
        )
   }

const mapStateToProps = createStructuredSelector({
    getOrderItems: selectTokenOrderItems
})

export default connect(mapStateToProps)(OrderSearch);

