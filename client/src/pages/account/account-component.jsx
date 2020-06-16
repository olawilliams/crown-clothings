import React from 'react';
import './account-styles.scss';

import { connect } from 'react-redux';
import { signOutStart } from '../../redux/user/user-action';
import { selectTokenOrderItems } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { createStructuredSelector } from 'reselect';

import CustomButton from '../../components/custom-button/custom-button-component';
import AccountDetails from '../../components/account-details/account-details-component';

const Account = ({ token, currentUser, history, signOut }) => {
    const {  email, createdAt: { seconds }} = currentUser;
    let accountDate = new Date();
    accountDate.setTime(seconds * 1000);
    accountDate.toLocaleString();

   const filteredToken = token.filter(order => order.email === email );

   if(filteredToken.length === 0 ) {
       return (
        <div className='account'>
            <AccountDetails currentUser={currentUser} accountDate={accountDate}/>

             <p className='no-order'>You have no orders yet</p>
        <div className="buttons">
                <CustomButton
                    onClick={() => {
                        signOut()
                        history.push('/signin')
                    }}
                >
                    SIGN OUT
                </CustomButton>
                <CustomButton continueShopping
                    onClick={() => history.push('/shop')}
                >
                    CONTINUE SHOPPING
                </CustomButton>
            </div>
        </div> 
       )
   }

return (    
    <div className="account">
      <AccountDetails currentUser={currentUser} accountDate={accountDate}/>
        <div className="order-history">
            <p className="heading">Order History</p>

            <div className="history">
                <div className="details">
                    <div className="detail">OrderId</div>
                    <div className="detail">Date</div>
                    <div className="detail">Price</div>
                    <div className="detail">Status</div>
                </div>

                {
                    filteredToken.map(({id, created, price, date}) => {
                        return (
                        <div className="details" key={id}>
                            <div className="detailed" onClick={() => history.push(`orderdetails/${created}`)}>{created}</div>
                            <div className="detailed">{date}</div>
                            <div className="detailed">${price}</div>
                            <div className="detailed">Processing</div>
                        </div>
                    )})
                }
            </div>
           
             <div className="buttons">
                <CustomButton
                    onClick={() => {
                        signOut()
                        history.push('/signin')
                    }}
                >
                    SIGN OUT
                </CustomButton>
                <CustomButton continueShopping
                    onClick={() => history.push('/shop')}
                >
                    CONTINUE SHOPPING
                </CustomButton>
            </div>

        </div>

    </div>    

)};

const mapStateToProps = createStructuredSelector({
    token : selectTokenOrderItems,
    currentUser: selectCurrentUser
});

const mapDispatchToProp = dispatch => ({
    signOut: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProp)(Account);