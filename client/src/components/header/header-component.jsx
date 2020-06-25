import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';
import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom'
import './header-styles.scss'
import { signOutStart } from '../../redux/user/user-action';


const Header = ({ currentUser, hidden, signOutStart, history }) => (
    <div className='header-container'>
        
            <Link to='/' className="container">
                <div className='logo-container'>< Logo  /> </div>  
                 <span className="store-name">CROWN Clothing Store</span>
             </Link>  
             
        

        <div className='options'>
            <Link className='option' to='/shop'>SHOP </Link>
            <Link className='option' to='/ordersearch'>ORDERS </Link>
            {
                currentUser ?
                <Link className='option' to='/account'>ACCOUNT </Link> 
                : null
            }
            { currentUser  ?
             <Link className='option' to='/signin' onClick={() => {
                 signOutStart() 
                }}
            >   SIGN OUT </Link> 
             :
             <Link className='option' to='/signin' >SIGN IN</Link>
          }
          <div className="option"><CartIcon  /></div>

        </div>
          {
              hidden ? null : <CartDropdown />
          }
    </div>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )( Header);