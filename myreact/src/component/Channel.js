import { Link, Outlet } from "react-router-dom";

function Channel(){

    return(
        <div>
            <h1>Channel's Page</h1>
            <Link to="contact">Contact</Link>
            <Outlet/>
        </div>
    )
}

export default Channel;