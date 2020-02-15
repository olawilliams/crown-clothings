import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase-utils';
import './header-styles.scss';

const Header = ({ currentUser, hidden }) => (
    <div className='header'>
        <Link className='logo-container' to='/'> 
             <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link className='option' to='/shop'> SHOP</Link>
            <Link className='option' to='/contact'> CONTACT</Link>
            {
                currentUser ?
                <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className='option' to='/signin' >SIGN IN</Link>
            }
            <CartIcon />
            {
                hidden ? <CartDropdown />
               : null 
                
            }
            
        </div>
        
    </div>
)

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    hidden: state.cart.hidden

});

export default connect(mapStateToProps)( Header);