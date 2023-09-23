import { useEffect } from "react";
import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import MyProjects from "../MyProjects/MyProjects";
import Skills from "../Skills/Skills";


import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          offset: 200,
          easing: 'ease-in-out'
        });
      }, []);
    return (
        <div className="" data-aos="fade-up">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Homepage;