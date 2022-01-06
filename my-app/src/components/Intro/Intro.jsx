import React from 'react';
import "../Intro/intro.css";
import Me from "../../assets/me-3.png"; 

function Intro() {
    return (
        <div className="i">
         <div className="i-left">
             <div className="i-left-wrapper">
                 <h2 className="i-intro">Hello! this is</h2>
                 <h1 className="i-name">Ishani Mishra</h1>
                 <div className="i-title">
                     <div className="i-title-wrapper"> {/* animation */}
                         <div className="i-title-item">Web developer</div>
                         <div className="i-title-item">UI & UX</div>
                         <div className="i-title-item">Mechanical Engineer</div>
                         <div className="i-title-item">ROS Developer</div>    
                         <div className="i-title-item">CFD Analyst</div>
                         <div className="i-title-item">Passive cooling specialist</div>
                         <div className="i-title-item">Blogger</div>
                     </div>
                 </div>
                 <div className="i-desc">Sophomore year at VIT, persuing Bachelor's in technology in Mechanical engineering. My core interests lie in refrigeration and air conditioning, robotics and computational fluid dynamics. I also like to explore other domains and find web development, UI design, UX research and web design super fun. I enjoy collaborating on projects more than working all by myself.</div>
             </div>
         </div>
         <div className="i-right">

            <img src={Me} alt="" className="i-img"></img>
         </div>
        </div>
    )
}

export default Intro
