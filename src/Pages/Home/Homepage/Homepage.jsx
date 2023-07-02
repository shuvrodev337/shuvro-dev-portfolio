import AboutMe from "../AboutMe/AboutMe";
import Banner from "../Banner/Banner";
import MyProjects from "../MyProjects/MyProjects";

const Homepage = () => {
    return (
        <div className="">
            <Banner></Banner>
            <AboutMe></AboutMe>
            <MyProjects></MyProjects>
        </div>
    );
};

export default Homepage;