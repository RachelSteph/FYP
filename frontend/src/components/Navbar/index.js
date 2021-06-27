import React from 'react';
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavBarElements';
const Navbar = ({ toggle }) => {
    


    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>consulting service system</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'>About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'>Sign Up</NavLinks>
                        </NavItem>
                        
                    </NavMenu>
                    
                    <NavBtn>
                        <NavBtnLink to='/signin'>Sign In</NavBtnLink>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnLink to='/categories'>Discover</NavBtnLink>
                    </NavBtn>
               </NavbarContainer>   
                
            </Nav>   
        </>
    );
};

export default Navbar; 
