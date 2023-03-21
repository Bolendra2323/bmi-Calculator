import { Link,NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <ul>
        <li><NavLink
        style={({isActive})=>{return{backgroundColor:isActive ? 'green' :'Blue'}}}
        className="nav-bar-link"  to="/about">About</NavLink></li>
        <li><NavLink 
        style={({isActive})=>{return{backgroundColor:isActive ? 'green' :'SkyBlue'}}}
        className="nav-bar-link" to="/">Home</NavLink></li>
        <li><NavLink 
        style={({isActive})=>{return{backgroundColor:isActive ? 'green' :'red'}}}
        className="nav-bar-link" to="/user/Bolendra">Bolendra</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/user/peter">Peter</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/filter">Filter</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/channel">Channel</NavLink></li>
        <li><NavLink className="nav-bar-link" to="/contact">Contact</NavLink></li>
         <li><NavLink className="nav-bar-link" to="/login">LogIn</NavLink></li> 
      </ul>
    </div>
  );
}

export default NavBar;

// Note that:- We cannot give classname to Link