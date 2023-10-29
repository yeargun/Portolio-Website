import "./BlogpostLayout.scss";
import "../Sidebar";
import SideBar from "../Sidebar";
import { Outlet } from "react-router-dom";
const BlogpostLayout = () => {
  return (
    <div className="App">
      <SideBar />
      <div className="page">
        <Outlet />
      </div>
    </div>
  );
};
export default BlogpostLayout;
