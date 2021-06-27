import React from 'react';
import {FooterContainer, FooterWrap, FooterLinksContainer, FooterLinkItems, FooterLinksWrapper, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink} from './FooterElements';
import {FaFacebook, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <FooterWrap>
                    <FooterLinksContainer>
                        <FooterLinksWrapper>
                            <FooterLinkItems>
                                <FooterLinkTitle>About Us</FooterLinkTitle>
                                    <FooterLink to="/">How it works</FooterLink>
                                    <FooterLink to="/">Testimonials</FooterLink>
                                    <FooterLink to="/">Careers</FooterLink>
                                    <FooterLink to="/">Investors</FooterLink>
                                    <FooterLink to="/">Terms of Services</FooterLink>
                            </FooterLinkItems>
                            <FooterLinkItems>
                                <FooterLinkTitle>Contacts Us </FooterLinkTitle>
                                    <FooterLink to="/">Contact</FooterLink>
                                    <FooterLink to="/">Support</FooterLink>
                                    
                            </FooterLinkItems>
                        </FooterLinksWrapper>

                        
                    </FooterLinksContainer>

                    <SocialMedia>
                        <SocialMediaWrap>
                            <SocialLogo to='/'>consulting service system</SocialLogo>
                            {/* <WebsiteRights>consulting service system @ {new Date().getFullYear()}</WebsiteRights> */}
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                    <FaFacebook/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                                    <FaInstagram/>
                                </SocialIconLink>
                                <SocialIconLink href="//www.twitter.com/consulsystz" target="_blank" aria-label="Twitter">
                                    <FaTwitter/>
                                </SocialIconLink>
                                <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                                    <FaLinkedin/>
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialMediaWrap>
                    </SocialMedia>
                </FooterWrap>
            </FooterContainer>
            
        </>

    );
};

export default Footer;

/* note: website rights edit*/
