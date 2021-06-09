import React from 'react';
import {ServicesContainer, ServicesCard, ServicesIcon, ServicesH1, ServicesH2, ServicesP, ServicesWrapper} from './ServicesElements';
import Icon1 from '../../images/selectteam.png';
import Icon2 from '../../images/options.png';
import Icon3 from '../../images/connected.png';

const Services = () => {
    return (
        <>
            <ServicesContainer id='services'>
                <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={Icon1}/>
                        <ServicesH2>Easy appointment setup</ServicesH2>
                        <ServicesP>We help clients to easily make an appointment</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon2}/>
                        <ServicesH2>View Project Status</ServicesH2>
                        <ServicesP>We help clients to easily view the progress of their projects as set by the agencies</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={Icon3}/>
                        <ServicesH2>Easy project documentation</ServicesH2>
                        <ServicesP>We help agencies to easily document their projects</ServicesP>
                    </ServicesCard>

                </ServicesWrapper>
            </ServicesContainer>
            
        </>
    );
};

export default Services;
