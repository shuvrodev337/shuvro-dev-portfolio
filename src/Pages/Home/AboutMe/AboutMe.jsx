import Lottie from "lottie-react";
import developer from "../../../assets/developer.json";
import SectionTitle from "../../../components/SectionTitle";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
const AboutMe = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 200,
      easing: 'ease-in-out'
    });
  }, []);
  return (
    <div id="about-me">
      <SectionTitle sectionHeader={"About Me"}></SectionTitle>
      <div className="md:flex justify-center items-center gap-6">
        <div className="md:w-1/2 ">
          <Lottie
            className="w-1/2 mx-auto"
            animationData={developer}
            loop={true}
          />
        </div>
        <div className="md:w-1/2 px-4"  data-aos="fade-up">
          <h1 className="text-3xl font-bold">
            A dedicated Web Developer, based in Gopalgonj,Bangladesh.
          </h1>
          <p className="py-6">
            I am Shuvro Dev Mondal, based in Gopalgonj, Bangladesh. I have studied BBA from North South University, Dhaka.
            Although I didn&apos;t have the chance to study computer science, I
            I always had the desire to work on the field of computer and
            technology.That is why I decided to pursue my career in programming
            and web development.
          </p>
          <p className="py-6">
            Since then I have been learning HTML, CSS, TailwindCSS, Bootstrap, javascript, Typescript, ReactJs, NextJS,
            Nodejs, Mongodb, Express js, Authentication, Git-github and various
            web development tools and technologies.
          </p>
          <p className="py-6">
            Recently I have completed a web development course by Programming
            Hero, where I have been gaining a strong foundation in Mern Stack
            development. I have worked on numerous projects, built full stack
            web applications, completed various tasks and assignments with good
            remarks.
          </p>
          <p className="py-6">
            Outside of coding I like to spend most of my time with my family.I
            like watching sports on TV. I try to watch a
            movie once a week. I also love to travel, I love to play football,
            cricket with my friends on weekends.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
