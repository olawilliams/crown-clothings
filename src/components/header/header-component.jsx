import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';

import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { createStructuredSelector } from 'reselect';


import { auth } from '../../firebase/firebase-utils';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionStyle } 
        from './header-styled-component';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'> 
             <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionStyle to='/shop'> SHOP</OptionStyle>
            <OptionStyle to='/contact'> CONTACT</OptionStyle>
            {
                currentUser ?
                <OptionStyle as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionStyle>
                :
                <OptionStyle to='/signin' >SIGN IN</OptionStyle>
            }
            <CartIcon />
            {
                hidden ? <CartDropdown />
               : null 
                
            }
            
            </OptionsContainer>
        
        </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)( Header);