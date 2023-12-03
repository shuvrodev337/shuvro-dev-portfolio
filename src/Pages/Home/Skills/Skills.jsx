import SectionTitle from "../../../components/SectionTitle";
import { technologies } from "../../../constants";
import SkillCard from "./SkillCard";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          offset: 200,
          easing: 'ease-in-out'
        });
      }, []);
    return (
        <div className="w-1/2 md:w-9/12 mx-auto" id="skills" data-aos="fade-up">
            <SectionTitle sectionHeader={'My skills'}></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 ">
                {
                    technologies.map((technology,i)=><SkillCard key={i} technology={technology}></SkillCard>)
                }
            </div>
        </div>
    );
};

export default Skills;