import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col col-lg-2">
            <div className="header__logo">
              <Link to="/">
                <img src="/src/img/logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="col col-lg-8">
            <div className="header__nav">
              <nav className="header__menu">
                <ul>
                  <li className="active">
                    <a href="#">Homepage</a>
                  </li>
                  <li>
                    <div className="dropdown">
                      <a
                        className="dropdown-toggle"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Categories
                      </a>

                      <div
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <a className="dropdown-item" href="#">
                          Categories
                        </a>
                        <a className="dropdown-item" href="#">
                          Anime Detail
                        </a>
                        <a className="dropdown-item" href="#">
                          Anime Watching
                        </a>
                        <a className="dropdown-item" href="#">
                          Blog Detail
                        </a>
                        <a className="dropdown-item" href="#">
                          Sign Up
                        </a>
                        <a className="dropdown-item" href="#">
                          Login
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link to="/blog">Our Blog</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col col-lg-2">
            <div className="header__right">
              <a href="#" className="search-switch">
                <i className="fa-solid fa-magnifying-glass"></i>
              </a>
              <a href="#">
                <i className="fa-solid fa-user"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
