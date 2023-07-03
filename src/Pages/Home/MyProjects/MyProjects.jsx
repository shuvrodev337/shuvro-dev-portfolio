import SectionTitle from "../../../components/SectionTitle";
import {projects} from "../../../constants/index";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  return (
    <div className="max-w-screen-xl mx-auto" id="projects">
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
