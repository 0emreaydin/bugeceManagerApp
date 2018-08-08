import React from 'react';
import AboutUs from './AboutUs';
import WhyBugece from './WhyBugece';
import Report from './Report';
import Contact from './Contact';
import Partners from './Partners';
import Footer from './Footer';

export const Main = () => (
    <div>
        <div id="section1" className="container-fluid">
            <AboutUs/>
        </div>
        <div id="line"></div>
        <div id="section2" className="container-fluid">
            <WhyBugece/>
        </div>
        <div id="line"></div>
        <div id="section3" className="container-fluid">
            <Report/>
        </div>
        <div id="line"></div>
        <div id="section4" className="container-fluid">
            <Partners/>
        </div>
        <div id="line"></div>
        <div id="section5" className="container-fluid">
            <Contact/>
        </div>
        <Footer/>
    </div>
);