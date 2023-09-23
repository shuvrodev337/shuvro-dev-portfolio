import { Link } from "react-router-dom";
import "./ProjectCard.css"
import { FaServer,FaGithub,FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const ProjectCard = ({project}) => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 200,
      easing: 'ease-in-out'
    });
  }, []);
    const {name,description,tags,image,live_site, source_code_client ,source_code_server} = project
    return (
       
        <div className="card lg:card-side bg-base-100 shadow-xl  justify-center" data-aos='fade-up'>
          <div className="md:w-1/2 project-img">
            <img
              src={image}
              alt="Album"
            />
          </div>
          <div className="card-body md:w-1/2">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>
            <div className="card-actions justify-end">
             

              <Link className="btn btn-accent btn-xs sm:btn-sm md:btn-md btn-outline"  to={source_code_server} target="_blank">
                <FaServer></FaServer>
                Server Side Code</Link>
              <Link className="btn btn-success btn-xs sm:btn-sm md:btn-md btn-outline"  to={source_code_client} target="_blank">
                <FaGithub></FaGithub>
                Client Side Code</Link>
              <Link className="btn btn-info btn-xs sm:btn-sm md:btn-md btn-outline"  to={live_site} target="_blank">
                <FaExternalLinkAlt></FaExternalLinkAlt>
                Live Site</Link>
            </div>
          </div>
        </div>
      
    );
};

export default ProjectCard;