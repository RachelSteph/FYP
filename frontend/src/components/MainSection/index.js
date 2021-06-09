import React from 'react';
import Video from '../../videos/video.mp4';


import {MainContainer, MainBg, VideoBg, MainContent, MainH1, MainP} from './MainSectionElements';
const MainSection = () => {
   
    
    
    
    return (
        <MainContainer>
            <MainBg>
                <VideoBg autoPlay muted src={Video} type='video/mp4'/>
                
            </MainBg>
            <MainContent>
                <MainH1>Easy Access to Local Consultants</MainH1>
                <MainP>Sign up to book an appointment with an agency of your choice.</MainP>
                
            </MainContent>
             
        </MainContainer>
    );
};

export default MainSection;

