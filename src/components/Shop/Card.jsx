import React from "react";

export default function Card({
  wineAuthor,
  wineTitle,
  wineType,
  wineStyle,
  grapeType,
  origin,
  price,
  id,
}) {
  return (
    <div className="wine">
      <div className="img-wrapper">
        <img
          src="./public/img/wine-bottles/1i1MlXXaS7qHjS84jPKX3Q_pb_x600.png"
          alt="LA CHABLISIENNE"
        />
      </div>
      <div className="content">
        <h1>{wineAuthor}</h1>
        <h2>{wineTitle}</h2>
        <ul>
          <li>
            <img src="./public/icons/wine-glass.svg" />
            {wineType}
          </li>
          <li>
            <img src="./public/icons/wine-bottle.svg" />
            {wineStyle}
          </li>
          <li>
            <img src="./public/icons/grapes.svg" />
            {grapeType}
          </li>
          <li>
            <img src="./public/icons/flag.svg" />
            {origin}
          </li>
        </ul>
        <a href={`/product/${id}`} className="btn-buy">
          {price}
        </a>
      </div>
    </div>
  );
}
