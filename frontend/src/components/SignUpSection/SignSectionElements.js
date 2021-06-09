import styled from 'styled-components';
import { Link as LinkR} from 'react-router-dom';




export const SignContainer = styled.div`
    background: #fff;
    display: flex;
    justify-content: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;
    margin-bottom:0;

    :before {
        content: '';
        top : 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 100%), linear-gradient(180deg, rgba(0,0,0,0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;





export const SignContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;


`;

export const SignH1 = styled.h1`
    padding-top: 200px;
    color: #0c0c0c;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;

    } 

    
    @media screen and (max-width: 480px){
        font-size: 32px;

    } 


`;

export const SignP = styled.p`
    
    margin-top: 24px;
    color: #0c0c0c;
    font-size: 24px;
    text-align: center;
    max-width: 600px;


    @media screen and (max-width: 768px){
        font-size: 24px;

    } 

    
    @media screen and (max-width: 480px){
        font-size: 18px;

    }

`;

export const SignBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const SignBtn = styled.nav`
    display: flex;
    align-items: center;



    @media screen and (max-width: 760px){
        display: flex;
    }

`;

export const SignBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    margin-top: 40px;
    

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;

    }

`




