import React from 'react';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon-component';
import CartDropdown from '../cart-dropdown/cart-dropdown-component';

import { connect } from 'react-redux';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { createStructuredSelector } from 'reselect';

import { signOutStart } from '../../redux/user/user-action';

import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionStyle } 
        from './header-styled-component';

const Header = ({ currentUser, hidden, signOutStart }) => (
    <HeaderContainer>
        <LogoContainer to='/'> 
             <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionStyle to='/shop'> SHOP</OptionStyle>
            <OptionStyle to='/contact'> CONTACT</OptionStyle>
            {
                currentUser ?
                <OptionStyle as='div' onClick={signOutStart}>SIGN OUT</OptionStyle>
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

const mapDispatchToProps = dispatch => ({
    signOutStart: () => dispatch(signOutStart())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )( Header);