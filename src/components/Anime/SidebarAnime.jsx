import React from "react";

function SidebarAnime({ title }) {
  return (
    <div className="product__sidebar__view__item mix day years">
      <div className="ep">18 / ?</div>
      <div className="view">
        <i className="fa fa-eye"></i> 9141
      </div>
      <h5>
        <a href="#">{title}</a>
      </h5>
    </div>
  );
}

export default SidebarAnime;
