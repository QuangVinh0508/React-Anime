import React from "react";
import { useNavigate } from "react-router-dom";

// Components
import MetaCard from "../../../components/card/MetaCard";
import SquareCard from "../../../components/card/SquareCard";


function Product() {
  // states
  const [products, setProducts] = React.useState([]);
  // hooks
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProducts() {
      const res = await fetch('http://localhost:8081/product.json');
      const data = await res.json();
      setProducts(data.data)
    }
    fetchProducts();
  }, [])

  function handleGotoDetail(productId) {
    navigate(`/anime-detail/${productId}`)
  }

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
              {products.map(product => (
                <div key={product.id} className="col col-4">
                  <MetaCard
                    img="./src/img/trending/trend-1.jpg"
                    title={product.title}
                    text={product.description}
                    onClick={() => handleGotoDetail(product.id)}
                  />
                </div>
              ))}
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
