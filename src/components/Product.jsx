import React from "react";

// Components
import MetaCard from "./card/MetaCard";
import SquareCard from "./card/SquareCard";

function Product() {
  return (
    <div className="product">
      <div className="container">
        <div className="row">
          <div className="col col-8">
            <div className="product__trending">
              <div className="section-title">
                <h4>Trending Now</h4>
              </div>
              <div className="btn__all">
                <a href="#" className="primary-btn">
                  View All <span className="arrow_right"></span>
                </a>
              </div>
            </div>
            <div className="row">
              <div className="col col-4">
                <MetaCard
                  img="./src/img/trending/trend-1.jpg"
                  title="Card title"
                  text="The Seven Deadly Sins: Wrath of the Gods"
                />
              </div>
              <div className="col col-4">
                <MetaCard
                  img="./src/img/trending/trend-2.jpg"
                  title="Card title"
                  text="Gintama Movie 2: Kanketsu-hen"
                />
              </div>
              <div className="col col-4">
                <MetaCard
                  img="./src/img/trending/trend-3.jpg"
                  title="Card title"
                  text="Shingeki no Kyojin Season 3 Part 2"
                />
              </div>
              <div className="col col-4">
                <MetaCard
                  img="./src/img/trending/trend-4.jpg"
                  title="Card title"
                  text="Fullmetal Alchemist: Brotherhood"
                />
              </div>
              <div className="col col-4">
                <MetaCard
                  img="./src/img/trending/trend-5.jpg"
                  title="Card title"
                  text="Shiratorizawa Gakuen Koukou"
                />
              </div>
              <div className="col col-4">
                <MetaCard
                  img="./src/img/trending/trend-6.jpg"
                  title="Card title"
                  text="Code Geass: Hangyaku no Lelouch R2"
                />
              </div>
            </div>
          </div>
          <div className="col col-4">
            <div className="section-title">
              <h5>Top Views</h5>
            </div>
            <ul className="filter__controls">
              <li className="active" data-filter="*">
                Day
              </li>
              <li data-filter=".week">Week</li>
              <li data-filter=".month">Month</li>
              <li data-filter=".years">Years</li>
            </ul>

            <div className="filter__gallery">
              <SquareCard title="Boruto: Naruto next generations" />
              <SquareCard title="The Seven Deadly Sins: Wrath of the Gods" />
              <SquareCard title="Sword art online alicization war of underworld" />
              <SquareCard title="Fate/stay night: Heaven's Feel I. presage flower" />
              <SquareCard title="Fate stay night unlimited blade works" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
