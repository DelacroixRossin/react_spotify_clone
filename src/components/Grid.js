import React from "react";
import "../index.css";

const Grid = () => {
  return (
    <div className="pal" >
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <div className="search">
        <input type="text" placeholder="search for artist" />
        <button>Search</button>
      </div>

      <div className="grid" >
        <div className="card1">Un</div>
        <div className="card2">Deux</div>
        <div className="card3">Troix</div>
        <div className="card4">Quatre</div>
      </div>

      <div className="play"></div>
    </div>
  );
};

export default Grid;
