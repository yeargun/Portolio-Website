import "./index.scss"
import "../Sidebar"
import SideBar from "../Sidebar"
import {Outlet} from "react-router-dom"
const Layout = () => {
    return( 
    <div className="App">
        <SideBar/>
        <div className="page">
        {/* <h2 className="whiteNot" >Yo</h2> */}
        <div className="backImage"></div>
        <Outlet />
        
        </div>

    </div>
    )
}
export default Layout