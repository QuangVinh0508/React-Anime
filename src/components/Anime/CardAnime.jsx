import React from "react";

function CardAnime({ img, title, text }) {
  return (
    <div className="card">
      <img
        src={img}
        className="card-img-top"
        alt="img"
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}

export default CardAnime;
