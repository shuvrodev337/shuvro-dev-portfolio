// import Tilt from 'index';
import Tilt from 'react-parallax-tilt';

const SkillCard = ({ technology }) => {
  const { name, icon } = technology;
  return (
  <Tilt tiltReverse={true}>
    <div className="card  bg-base-100 shadow-xl h-52  items-center">
  <figure className="px-10 pt-10 rounded-xl w-36 h-36">
    <img src={icon} alt="skills" className="" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
    
  </div>

</div>
  </Tilt>
  );
};

export default SkillCard;
