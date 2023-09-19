import React from "react";

//Components
import HeaderAnime from "../components/Anime/HeaderAnime";
import BannerAnime from "../components/Anime/BannerAnime";
import FooterAnime from "../components/Anime/FooterAnime";
import ProductAnime from "../components/Anime/ProductAnime";

function HomeAnime() {
  return (
    <>
      {/* START: HEADER */}
      <HeaderAnime />
      {/* END: HEADER */}

      {/* START: BANNER */}
      <BannerAnime />
      {/* END: BANNER */}

      {/* START: PRODUCT */}
      <ProductAnime />
      {/* END: PRODUCT */}

      {/* START: FOOTER */}
      <FooterAnime />
      {/* END: FOOTER */}
    </>
  );
}

export default HomeAnime;
