
import profilePic from '../../../assets/IMG_20210612_201527.jpg'

const Banner = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className='w-1/2 flex justify-center items-center'>
        <img
          src={profilePic}
          className="w-40 h-40 rounded-full shadow-2xl"

        />
        </div>
        <div className='w-1/2'>
          <h1 className="text-5xl font-bold">Hi, I am Shuvro Dev Mondal</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-info">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
