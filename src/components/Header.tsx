import { Fragment } from "react";
import logo from "./img/EDUSolutionsLogo.jpg";
import "./Header.css";

function Header() {
  return (
    <Fragment>
      <header className="header-container">
        <div className="header-content">
          <img src={logo} alt="EDU Solutions Logo" className="logo" />
          <div className="text-container">
            <h1 className="header-h1">EDU Solutions LLC</h1>
            <p>Language and Literacy Collaborative</p>
          </div>
        </div>
      </header>
    </Fragment>
  );
}

export default Header;
