import React from "react";
import profilePic from "../images/profile.jpg";

export default function Info() {
  return (
    <div className="info">
      <img src={profilePic} alt="profile" className="profile-picture" />
      <h2 className="user-name">Francis Aweenagua</h2>
      <h3 className="user-role">Frontend Developer</h3>
      <h5 className="user-email">faweenagua@gmail.com</h5>
    </div>
  );
}
