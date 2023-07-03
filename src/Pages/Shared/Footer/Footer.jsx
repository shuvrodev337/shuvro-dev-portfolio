import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer footer-center p-4 bg-base-300 text-base-content">
      <div>
        <p className="text-3xl flex gap-4">
          <Link to={"https://www.linkedin.com/in/shuvro-dev-mondal/"} target="_blank">
            <FaLinkedin className="text-blue-900"></FaLinkedin>
          </Link>
          <Link to={"https://github.com/shuvrodev337"} target="_blank">
            <FaGithub className="text-slate-800"></FaGithub>
          </Link>

          <Link to={"https://www.facebook.com/shuvrosadheen"} target="_blank">
            <FaFacebook className="text-sky-600"></FaFacebook>
          </Link>
        </p>
        <p>Copyright © 2023 - All right reserved by Shuvro Dev Mondal</p>
      </div>
    </footer>
  );
};

export default Footer;
