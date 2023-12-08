import React, { useEffect } from 'react'

// Folder components
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import WelcomeHomePage from '../../components/Home-Sections/Welcome'
import Coverflow from '../../components/Home-Sections/CoverFlow-section'
import HomeCategorySlideSection from '../../components/Home-Sections/CategorySlideSection'

// AoS import
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();




const Home = () => {
   
    return (
        <>
            <Header />
            <WelcomeHomePage />
            <HomeCategorySlideSection />
            <Coverflow />
            <Footer />
        </>
    )
}

export default Home
