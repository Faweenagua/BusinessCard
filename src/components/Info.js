import React from "react";
import profilePic from "../images/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
// import { faSolid } from "@fortawesome/free-solid-svg-icons";

export default function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="profile" className="profile-picture" />
      <h2 className="user-name">Francis Aweenagua</h2>
      <h3 className="user-role">Frontend Developer</h3>
      <h5 className="user-email">faweenagua@gmail.com</h5>
      <div className="buttons">
        <button className="button-email">
          <span className="button-email_icon">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
          <span className="button-email_email">Email</span>
        </button>
        <button className="button-linkedin">
          <span className="button-linkedin_icon">
            <FontAwesomeIcon icon={faLinkedin} />
          </span>
          <span className="button-linkedin_linkedin">LinkedIn</span>
        </button>
      </div>
    </div>
  );
}
