import React from 'react';
import { connect } from 'react-redux'; // connect is a higher order component
import { auth } from '../../firebase/firebase.utils';
import { createStructuredSelector } from 'reselect'; 

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/logo.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';


import { 
    HeaderContainer, 
    LogoContainer, 
    OptionsContainer, 
    OptionLink
} from './header.styles';

import './header.styles.scss';


const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>
                SHOP
            </OptionLink>
            <OptionLink to='/shop'>
                CONTACT
            </OptionLink>
            {currentUser ? (
                <OptionLink as='div' onClick={() => auth.signOut()}to='/signin'>
                    SIGN OUT
                </OptionLink>
            ) : (
                <OptionLink to='/signin'>
                SIGN IN
                </OptionLink>
            )}
            <CartIcon />
        </OptionsContainer>
        {hidden ? null: <CartDropdown />}
        
    </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);