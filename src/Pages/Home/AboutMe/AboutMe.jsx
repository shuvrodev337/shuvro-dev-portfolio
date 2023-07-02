import Lottie from "lottie-react";
import developer from "../../../assets/developer.json";
import SectionTitle from "../../../components/SectionTitle";

const AboutMe = () => {
  return (
   <>
   <SectionTitle sectionHeader={'About Me'}></SectionTitle>
    <div className="md:flex justify-center gap-6">
      <div className="md:w-1/2 ">
        <Lottie className="w-1/2 mx-auto" animationData={developer} loop={true} />
      </div>
      <div className="md:w-1/2 px-4">
      <h1 className="text-3xl font-bold">A dedicated MERN stack Web Developer, based in Dhaka,Bangladesh</h1>
          <p className="py-6">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis laboriosam hic sed eum vero quaerat porro natus quasi. Nesciunt rerum enim ipsam consequatur voluptate id unde, dolore repellendus reprehenderit minima.
          </p>
      </div>
    </div>
    </>
  );
};

export default AboutMe;
