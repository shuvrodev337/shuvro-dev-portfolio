import { useEffect } from "react";
import SectionTitle from "../../../components/SectionTitle";
import {projects} from "../../../constants/index";
import ProjectCard from "./ProjectCard";
import AOS from 'aos';
import 'aos/dist/aos.css';
const MyProjects = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 200,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto" id="projects" data-aos="fade-up">
      <SectionTitle
        sectionHeader={"My Projects"}
        // sectionSubHeader={"Projects I have built"}
      ></SectionTitle>
   <div className="space-y-6">
   {
    projects.map((project,id)=><ProjectCard key={id} project={project}></ProjectCard>)
   }
   </div>
    </div>
  );
};

export default MyProjects;
