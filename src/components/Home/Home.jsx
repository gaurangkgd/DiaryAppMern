import React from "react";
import "./Home.css";
import {GiWhiteBook} from "react-icons/gi"
import {Link} from 'react-router-dom';

const Home =() => {
    <img src="" alt="" />
    return <div className="home d-flex justify-content-center align-items-center">
        <div className="container d-flex justify-content-center align-items-center flex-column">
            <h1 className="text-center"> 
                Organize your <br/>Daily thougths and schedule in a peaceful manner
            </h1>
            <p> <h3>Come Write and Follow with</h3><br/>
            <h2><Link className="navbar-brand" to="#">
        <b id="daily"><GiWhiteBook/>  Daily Journal</b></Link></h2>
        </p>
        <div className="gaurav">
        <p>First Sign up and then start the journal....<br/>
            because even your brain needs an account!</p>
           </div>
        </div>
    </div>;



};

export default Home ;