import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import "font-awesome/css/font-awesome.min.css";

export default function Footer() {
  return (
    <div>
      <div className="FooterNavigation">
        <ul className="FooterNav">
          <Link to="/home" className="Footer-Item">
            <li>
              <i className="fas fa-home" />
              Back Home
            </li>
          </Link>
          {/* <a href="https://de.linkedin.com/in/oemer-ueguer" className="Footer-Item">
            <li>
              <i className="fab fa-linkedin"></i>LinkedIn
            </li>
          </a>
        */}
          <a href="https://github.com/oemerueguer" className="Footer-Item">
            <li>
              <i className="fab fa-github-square" />
              Github Profile
            </li>
          </a>
        </ul>
        <div className="copyright">
          <i className="copy far fa-copyright" />
          oemerueguer
        </div>
      </div>
    </div>
  );
}
