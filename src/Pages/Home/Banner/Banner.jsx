
import { Link } from 'react-router-dom';
import profilePic from '../../../assets/IMG_20210612_201527-removebg-preview.png'
import { FaLinkedin,FaGithub ,FaDownload} from "react-icons/fa";
import resumePdf from "../../../assets/shuvro-dev-mondal-resume.pdf"
const Banner = () => {
  return (
    <div className="hero min-h-screen " id='banner'>
      <div className="hero-content flex-col lg:flex-row-reverse gap-6 ">
        <div className='w-1/2 flex justify-center items-center '>
        <img
          src={profilePic}
          className="w-64 h-64 rounded-full "
          style={{borderRadius:'30% 70% 70% 30% / 30% 30% 70% 70% '}}
        />
      
        
        </div>
        <div className='w-4/5 md:w-1/2 flex flex-col items-center md:items-start'>
          <h1 className="text-5xl font-bold">Hi, I am Shuvro Dev Mondal.</h1>
          <p className="py-6">
          I am a Web Developer, based in Bangladesh. I specialize in creating modern, responsive web applications using React.js, MongoDB, Express.js and Node.js.
          </p>
          <div className='flex gap-2 me-auto'>
          <Link to={'https://drive.google.com/file/d/16MU8NVxy4pJE1JRriRfSqRrdFWG_xpJ3/view?usp=sharing'} className="btn btn-outline btn-info" target='_blank'>View Resume</Link>
          <a  href={resumePdf} download className="btn btn-accent" >Download<FaDownload></FaDownload></a>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Banner;
