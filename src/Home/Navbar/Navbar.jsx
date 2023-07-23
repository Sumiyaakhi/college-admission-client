import { Link, NavLink } from "react-router-dom";
import logo from '../../assets/education-logo-template-png_32234.png'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
const Navbar = () => {

    const {user, logOut} = useContext(AuthContext)
    const navItems = <>
    <li ><NavLink to="/">Home</NavLink></li>
    <li><NavLink to="/colleges">Colleges</NavLink></li>
    <li><NavLink to="/admission">Admission</NavLink></li>
    <li><NavLink to="/mycollege">My College</NavLink></li>
   
    </>

    const handleLogOut = ()=>{
        logOut()
        .then(()=>{})
        .catch(error => console.log(error))
    }
    return (
        <div className="">
          <div className="navbar bg-primary  px-16">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 ">
        {navItems}
      </ul>
    </div>
    <img className="w-28 color-white" src={logo} alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-white">
      {navItems}
    </ul>
  </div>
  <div className="navbar-end">

    {
        user ? <> <button onClick={handleLogOut} className="btn text-primary" >Log Out</button> <button className="text-white ps-2">{user.displayName}</button> </> : <><Link to="/login" className="btn text-primary">Login</Link></>
    }
    
  </div>
</div>
        </div>
    );
};

export default Navbar;