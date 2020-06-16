import React from 'react';
import './account-details-styles.scss';

const AccountDetails = ( { currentUser, accountDate}) =>{ 
    const { displayName, email, createdAt: { seconds }} = currentUser;
    console.log(currentUser)
return (
    <div className="account-container">
            <p className='title'>Account Details</p>
            <div className="top-message">
                <div className="details">
                    <div className="detail">Account Id:</div>
                    <div className="detail">{seconds}</div>
                </div>

                <div className="details">
                    <div className="detail">Name:</div>
                    <div className="detail">{displayName}</div>
                </div>

                <div className="details">
                    <div className="detail">Email:</div>
                    <div className="detail">{email}</div>
                </div>

                <div className="details">
                    <div className="detail">Date Created:</div>
                    <div className="detail">{`${accountDate}`}</div>
                </div>
          
           </div>
        </div>
)};

export default AccountDetails;