import { NavLink } from "react-router-dom";

const Navbar = () => {
  const centerNavItems = (
    <>
      <NavLink className={`${({ isActive }) => (isActive ? "text-white" : "text-secondary")} hover:text- text-[18px] font-medium cursor-pointer`} to={"/"}>Home</NavLink>
      <NavLink className={`${({ isActive }) => (isActive ? "text-white" : "text-secondary")} hover:text- text-[18px] font-medium cursor-pointer`} to={"/projects"}>Projects</NavLink>
      <NavLink className={`${({ isActive }) => (isActive ? "text-white" : "text-secondary")} hover:text- text-[18px] font-medium cursor-pointer`} to={"/about-me"}>About Me</NavLink>
      
    </>
  );
  const endNavItems = <>
      <NavLink className={'btn btn-info'} to={"/"}>Contact Me</NavLink>

  </>
  return (
    <div className="navbar h-20 mb-2 px-6  max-w-screen-2xl">
      
      <div className="navbar-start space-x-2">
        <NavLink to={"/"}>
          <h2 className="text-3xl font-bold">
            Shuvro.<span className="text-info">Dev</span>
          </h2>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal space-x-6  items-center font-semibold ">
          {centerNavItems}
        </ul>
      </div>
      <div className="navbar-end ">
        <ul className="menu menu-horizontal space-x-6 hidden lg:flex items-center  font-semibold">
          {endNavItems}
        </ul>

        <div className="dropdown dropdown-bottom dropdown-end">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-gray-800 text-gray-100 rounded-box w-52 items-center gap-2 z-10"
          >
            {centerNavItems}
            {endNavItems}
          </ul>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default Navbar;
