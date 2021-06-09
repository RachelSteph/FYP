import React from 'react';
import {SignContainer, SignContent, SignH1, SignP, SignBtnWrapper, SignBtn, SignBtnLink } from './SignSectionElements';

const SignUpSection = () => {
    
    
    return (
        <SignContainer>
            <SignContent>
                <SignH1>Sign Up</SignH1>
                <SignP>Create an account now. </SignP>
                <SignBtnWrapper>
                    <SignBtn>
                        <SignBtnLink to='/consultantform'>Sign Up as A Consultant</SignBtnLink>
                    </SignBtn>
                    <SignBtn>
                        <SignBtnLink to='/clientform'>Sign Up as A Client</SignBtnLink>
                    </SignBtn>
                </SignBtnWrapper>
            </SignContent>
             
        </SignContainer>
    );
};

export default SignUpSection;
