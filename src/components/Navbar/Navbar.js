import React from "react";
import "./Navbar.css";
import {Link} from 'react-router-dom';
// import {RiContactSBook2Fill} from "react-icons/ri";
import {GiWhiteBook} from "react-icons/gi"


const Navbar =() => {
    return <div><nav className="navbar navbar-expand-lg">
    <div className="container">
      <Link className="navbar-brand"  to="#">
        <b id="gary"><GiWhiteBook />  Daily Journal</b></Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>s
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active"id = "gg" aria-current="page" to="#">Home</Link>
          </li>

          <li className="nav-item mx-2">
            <Link className="nav-link active"id = "gg" aria-current="page" to="/about">About us</Link>
          </li>

          <li className="nav-item mx-2">
            <Link className="nav-link active" id = "gg"aria-current="page" to="/dailyjournal">Daily Journal</Link>
          </li>

          <li className="nav-item mx-2">
            <Link className="nav-link active btn-nav" id = "gg"aria-current="page" to="/signup">Sign Up</Link>
          </li>

          <li className="nav-item mx-2">
            <Link className="nav-link active btn-nav" id = "gg"aria-current="page" to="signin">Sign in</Link>
          </li>

        </ul>
      </div>
    </div>
  </nav></div>;
};

export default Navbar;