import React from "react";

//Components
import Banner from "../../components/Banner";
import Product from "./components/Product";

function Home() {
  return (
    <>
      <Banner />
      {/* END: BANNER */}

      {/* START: PRODUCT */}
      <Product />
    </>
  );
}

export default Home;
