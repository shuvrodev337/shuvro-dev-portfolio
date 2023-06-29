
import profilePic from '../../../assets/IMG_20210612_201527-removebg-preview.png'
import developer from '../../../assets/developer.json'
import Lottie from "lottie-react";

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse gap-6 ">
        <div className='w-1/2 flex justify-center items-center '>
        {/* <img
          src={developer}
          className="w-60 "

        /> */}
        <Lottie
        
          
        animationData={developer}
        loop={true}
      />
        </div>
        <div className='w-4/5 md:w-1/2 flex flex-col items-center md:items-start'>
          <h1 className="text-5xl font-bold">Hi, I am Shuvro Dev Mondal</h1>
          <p className="py-6">
          I am a MERN Stack Web Developer. I specialize in creating modern, responsive web applications using MongoDB, Express.js, React.js, and Node.js.
          </p>
          <button className="btn btn-info">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
