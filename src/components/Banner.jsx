import React from "react";

function Banner() {
  return (
    <section className="banner">
      <div className="container">
        <div className="banner__items set-bg">
          <div className="row">
            <div className="col-lg-6">
              <div className="banner__text">
                <div className="label">Adventure</div>
                <h2>Fate / Stay Night: Unlimited Blade Works</h2>
                <p>After 30 days of travel across the world...</p>
                <a href="#">
                  <span>Watch Now</span> <i className="fa fa-angle-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
