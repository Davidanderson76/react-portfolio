import React from "react";
import { Link } from "react-router-dom";
import Twitter from "../img/twitter.png";
import Facebook from "../img/facebook.png";
import Instagram from "../img/instagram.png";
import Github from "../img/gitHub.png";

function Footer() {
  const footStyle = {
    color: "white",
  };

  return (
    <div className="footer">
      <ul className="nav-links">
        <Link
          style={footStyle}
          to={{ pathname: "https://www.facebook.com/david.w.anderson.16" }}
          target="_blank"
        >
          <li>
            <a
              href="https://www.facebook.com/david.w.anderson.16"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Facebook} alt="facebookLogo"></img>
            </a>
          </li>
        </Link>

        <Link
          style={footStyle}
          to={{ pathname: "hhttps://github.com/Davidanderson76" }}
          target="_blank"
        >
          <li>
            <a
              href="https://github.com/Davidanderson76"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Github} alt="facebookLogo"></img>
            </a>
          </li>
        </Link>

        <Link
          style={footStyle}
          to={{ pathname: "https://www.instagram.com/davidanderson76/" }}
          target="_blank"
        >
          <li>
            <a
              href="https://www.instagram.com/davidanderson76/"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Instagram} alt="instagramLogo"></img>
            </a>
          </li>
        </Link>

        <Link
          style={footStyle}
          to={{ pathname: "https://twitter.com/david_zealot" }}
          target="_blank"
        >
          <li>
            <a
              href="https://twitter.com/david_zealot"
              rel="noreferrer"
              target="_blank"
            >
              <img src={Twitter} alt="twitterLogo"></img>
            </a>
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
