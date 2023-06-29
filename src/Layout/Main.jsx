import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import Footer from "../Pages/Shared/Footer/Footer";
import Banner from "../Pages/Home/Banner/Banner";

const Main = () => {
  return (
    <div >
        <Navbar></Navbar>
      <hr />

      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
