import "./index.scss";
import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";
import SideBlog from "../SideBlog";
const page = window?.location?.pathname.split("/")[2];

const LayoutWithBlog = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <img src="./images/back back2.jpg" className="backImage" />
        <SideBlog currPage={page ? parseInt(page) : 0} />
        <Outlet />
      </div>
    </div>
  );
};
export default LayoutWithBlog;
