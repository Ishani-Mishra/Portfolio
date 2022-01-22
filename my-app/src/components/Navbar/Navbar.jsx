import React from 'react'
import { Link } from "react-router-dom";
import "./navbar.css"

function Navbar() {
    return (
        <>
          <div className="navbar">
              <div className="home nav-item">HOME</div>
              <div className="projects nav-item">PROJECTS</div>
              <div className="getintouch nav-item">GET IN TOUCH</div>
              <div className="publication nav-item">PUBLICATION</div>
              <div className="blogs nav-item">BLOGS</div>
          </div>  
        </>
    )
}

export default Navbar

