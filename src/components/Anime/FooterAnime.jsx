import React from "react";

function FooterAnime() {
  return (
    <footer>
      <div className="page-up">
        <a href="#" id="scrollToTopButton">
          <i className="fa-solid fa-angle-up"></i>
        </a>
      </div>
      <div className="container">
        <div className="row">
          <div className="col col-lg-3">
            <div className="footer__logo">
              <a href="#">
                <img src="src/img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div className="col col-lg-6">
            <div className="footer__nav">
              <ul>
                <li className="active">
                  <a href="#">Homepage</a>
                </li>
                <li>
                  <a href="#">Categories</a>
                </li>
                <li>
                  <a href="#">Our Blog</a>
                </li>
                <li>
                  <a href="#">Contacts</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col col-lg-3">
            <p className="footer__copyright">
              Copyright &copy; All rights reserved | This template is made with{" "}
              <i className="fa-solid fa-heart"></i> by{" "}
              <a href="https://www.facebook.com/profile.php?id=100009193925818">
                Quang Vinh
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterAnime;
