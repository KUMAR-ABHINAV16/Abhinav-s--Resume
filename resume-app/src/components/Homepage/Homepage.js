import React from "react";
import "./Homepage.css";
import githubIcon from "../../images/githubIcon.png";
import linkedinIcon from "../../images/linkedinIcon.png";
import mail from "../../images/mail.jpg";
import insta from "../../images/insta.jpg";

function Homepage(){
    return(
    <div className="homepage_container">
        <div className="homepage_left">
            <p className="homepage_left_h1">
                <span className="red_color">Hi,</span> my name is 
            </p>
            <p className="homepage_left_h2">Kr. Abhinav</p>
            <p className="homepage_left_h3">
                Student of <span className="red_color">LPU</span>
            </p>
            <p className="homepage_left_description">
                Hi everyone , i am kumar abhinav ,currently I am persuing B.tech (CSE) 
                in Lovely professional university.{" "}
            </p>
            <p className="social"><u>SOCIAL MEDIA</u></p>
            <div>
                <a href="https://github.com/KUMAR-ABHINAV16" target="_blank">
                <img src={githubIcon} alt="githubIconimage"    className="homepage_logo"/>
                </a>
                <a
            href="https://www.linkedin.com/feed/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="linkedinIconimage"   className="homepage_logo"/>
          </a>
          <a href="https://mail.google.com/mail/u/0/#inbox"
          target="_blank">
            <img src={mail} alt="mail" className="homepage_logo" />
          </a>

          <a href="https://www.instagram.com/"
          target="_blank">
            <img src={insta} alt="insta" className="homepage_logo" />
          </a>
            </div>
            
           
        </div>
    </div>
    );
}

export default Homepage;