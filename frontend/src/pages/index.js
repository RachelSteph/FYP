import React, { useState } from 'react';
import MainSection from '../components/MainSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjTwo} from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';
import Footer from '../components/Footer';
import SignUpSection from '../components/SignUpSection';

const Home = () => {

    const[isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };



    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle} />
            <MainSection/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            
            <SignUpSection />
            
            <Services />
            
            <Footer />
            
        </>
    );
};

export default Home;
