import { Fragment } from "react";

import FacebookIcon from "./img/icons8-facebook.svg";
import TwitterIcon from "./img/icons8-twitter.svg";
import InstagramIcon from "./img/icons8-instagram.svg";
import LinkedInIcon from "./img/icons8-linkedin.svg";

import "./Footer.css";

function Footer() {
  return (
    <Fragment>
      <footer className="footer">
        <div className="container footer-container">
          <div className="row justify-content-between align-items-center">
            <div className="col-md-6 text-center text-md-start footer-company-tm">
              <p>EDU Solutions LLC</p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/zuck/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={FacebookIcon}
                      alt="Facebook"
                      className="social-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://x.com/finkd"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={TwitterIcon}
                      alt="Twitter"
                      className="social-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://instagram.com/zuck"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={InstagramIcon}
                      alt="Instagram"
                      className="social-icon"
                    />
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com/in/mark-zuckerberg-618bba58/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={LinkedInIcon}
                      alt="LinkedIn"
                      className="social-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}

export default Footer;
