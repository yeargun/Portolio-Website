import "./index.scss";
import "../Sidebar";
import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <img src="./images/back back2.jpg" className="backImage" />
        <Outlet />
      </div>
    </div>
  );
};
export default Layout;
