import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import ContactMe from "../ContactMe/ContactMe";
import MyProjects from "../MyProjects/MyProjects";
import Skills from "../Skills/Skills";

const Homepage = () => {
    return (
        <div className="">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <MyProjects></MyProjects>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Homepage;