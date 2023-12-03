
import { Link } from 'react-router-dom';
import profilePic from '../../../assets/IMG_20210612_201527-removebg-preview.png'
import { FaLinkedin,FaGithub ,FaDownload, FaFacebook} from "react-icons/fa";
import resumePdf from "../../../assets/shuvro-resume-Web-developer.pdf"
import { Fade } from "react-awesome-reveal";
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Banner = () => {
  const [text] = useTypewriter({
    words: ['MERN Stack Developer.', 'Front-End Developer.', 'ReactJs Developer.','Web Developer.'],
    loop: 10,
    onLoopDone: () => console.log(`loop completed after 10 runs.`)
  })
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6 "  id='banner' >
        <Fade direction='right' className='w-1/2'>
        <div className=' flex justify-center items-center pt-20 md:pt-0' >
        <img
          src={profilePic}
          className="w-64 h-64 md:w-96 md:h-96 shadow-lg bg-gradient-to-r from-white to-blue-300"
          style={{borderRadius:'30% 70% 70% 30% / 30% 30% 70% 70% '}}
        />
      
        
        </div>
        </Fade>
        <Fade direction='left' className='w-4/5 md:w-1/2'>
        <div className=' flex flex-col items-center md:items-start' >
          <h1 className="text-5xl ">Hi, I am Shuvro Dev Mondal.</h1>
          <h1 className="text-2xl my-2">
          I am a <span>{text}</span>
      <Cursor cursorColor='black' />
      </h1>
          <p className="py-6">
          Based in Gopalgonj, Bangladesh. I specialize in creating modern, responsive full stack web applications. 
          </p>
          <div className='flex gap-2 me-auto'>
          <Link to={'https://drive.google.com/file/d/1tecO3AXuRwJ5BIhKRm0q_j8qp04IZ3Ra/view?usp=sharing'} className="btn btn-outline btn-info" target='_blank'>View Resume</Link>
          <a  href={resumePdf} download className="btn btn-accent" >Download<FaDownload></FaDownload></a>
          </div>
          <div className='text-3xl flex gap-4 my-6 me-auto'>
          <Link to={"https://www.facebook.com/shuvrosadheen"} target="_blank">
            <FaFacebook className="text-sky-600"></FaFacebook>
          </Link>
          <Link to={"https://www.linkedin.com/in/shuvro-dev-mondal/"} target="_blank">
            <FaLinkedin className="text-blue-900"></FaLinkedin>
          </Link>
          <Link to={"https://github.com/shuvrodev337"} target="_blank">
            <FaGithub className="text-gray-500"></FaGithub>
          </Link>

          
          </div>
          
        
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Banner;
