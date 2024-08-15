import { Fragment } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <Fragment>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-custom">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item mx-lg-3">
                <Link
                  className="nav-link active bold"
                  aria-current="page"
                  to={"/edusol-app"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item mx-lg-3">
                <Link
                  className="nav-link active bold"
                  aria-current="page"
                  to={"/services"}
                >
                  How we can help you
                </Link>
              </li>
              <li className="nav-item mx-lg-3">
                <Link
                  className="nav-link active bold"
                  aria-current="page"
                  to={"/booking"}
                >
                  Book a consultation
                </Link>
              </li>
              <li className="nav-item mx-lg-3">
                <Link
                  className="nav-link active bold"
                  aria-current="page"
                  to={"/subscribe"}
                >
                  Subscribe to us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Fragment>
  );
}

export default NavBar;
