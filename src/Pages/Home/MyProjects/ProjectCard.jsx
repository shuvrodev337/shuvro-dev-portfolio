import { Link } from "react-router-dom";
import "./ProjectCard.css"
const ProjectCard = ({project}) => {
    const {name,description,tags,image,live_site, source_code_client ,source_code_server} = project
    return (
       
        <div className="card lg:card-side bg-base-100 shadow-xl  justify-center">
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
              {/* <button className="btn btn-info">Github</button>
              <button className="btn btn-info">Live Site</button> */}

              <Link className="btn btn-info"  to={live_site} target="_blank">Live Site</Link>
              <Link className="btn btn-info"  to={source_code_client} target="_blank">Client Side Code</Link>
              <Link className="btn btn-info"  to={source_code_server} target="_blank">Server Side Code</Link>
            </div>
          </div>
        </div>
      
    );
};

export default ProjectCard;