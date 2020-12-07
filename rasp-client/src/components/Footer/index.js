import React from "react";
import github_icon from "./GitHub-Mark-32px.png";
import "./styles.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="github-icon" src={github_icon} />
      <a
        className="repo-link"
        href="https://github.com/RogerXiao0718/rasp-server"
      >
        https://github.com/RogerXiao0718/rasp-server
      </a>
    </div>
  );
};

export default Footer;
