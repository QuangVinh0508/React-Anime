import React from "react";

function SquareCard({ title }) {
  return (
    <div className="squareCard">
      <div className="squareCard__day squareCard__day--info">18 / ?</div>
      <div className="squareCard__view">
        <i className="fa fa-eye"></i> 9141
      </div>
      <h5 className="squareCard__title">
        <a href="#">{title}</a>
      </h5>
    </div>
  );
}

export default SquareCard;
