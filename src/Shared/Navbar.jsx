
import React, {  useContext, useState } from "react";
import { Link } from "react-router-dom";
// import { AuthMaster } from "../../ContexAuth";

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//////import { faUser } from '@fortawesome/free-solid-svg-icons';
function Navbar() {
//   const { user,logOut,loading } = useContext(AuthMaster)
  const [navbarCollapsed, setNavbarCollapsed] = useState(false);
const user={

}
  const toggleNavbar = () => {
  setNavbarCollapsed(!navbarCollapsed);
  };
  const handleLogout=()=>{
    
}
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-design">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarTogglerDemo01"
        aria-expanded={navbarCollapsed}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`collapse navbar-collapse fs-6 fw-semibold ${
          navbarCollapsed ? "show" : ""
        }`}
        id="navbarTogglerDemo01"
      >
        <a className="navbar-brand fs-2 fw-bold">
         <img src="https://vehica.com/wp-content/uploads/elementor/thumbs/vehica-logo-white-retina-pkngtumq218suz1zbd1546ddhgyak65dflmtwo75kw.png" alt="" />
        </a>
        <ul className="navbar-nav nav-design m-auto mb-2 mb-lg-0">
          
          <li className="nav-item ">
            <Link className="nav-link active" to="/">
             Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/blog">
              Blog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/allToy">
              All Toy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/addtoy">
              Add Toy
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link active" to="/mytoy">
          My Toy
            </Link>
          </li>
          
        </ul>
        {
                                      user ? <><span> {user.photoURL?<img  title={user.displayName} src={user.photoURL} className='userPhoto rounded' alt='img'></img>:  ""} </span>  <Link  onClick={handleLogout}><button className='button2 ms-2'>Logout</button></Link></> :<> <Link className='' to="/login"><button className='button2'>Login</button></Link> <Link  to="/reg"> <button className='button2 ms-2'>SignUp</button></Link></>
        }
      </div>
    </div>
  </nav>
  );
}

export default Navbar;


