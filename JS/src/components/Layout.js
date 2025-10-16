import {NavLink, Outlet} from "react-router-dom";

function Layout() {
    return (
        <div className="layout">
            <ul>
                <li><NavLink to="/" className="my" >Home Page</NavLink></li>
                <li><NavLink to="/images">Images</NavLink></li>
                <li><NavLink to="/about" style={({isActive}) => ({color: isActive ? "green" : "blue"})} >About Us</NavLink></li>
            </ul>
            <Outlet />
        </div>
    )
}
export default Layout;