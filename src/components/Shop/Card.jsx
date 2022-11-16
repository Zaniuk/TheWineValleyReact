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
          src={`/img/wine-bottles/${id}.png`}
          alt={`${wineTitle} bottle`}
        />
      </div>
      <div className="content">
        <h1>{wineAuthor}</h1>
        <h2>{wineTitle}</h2>
        <ul>
          <li>
            <img src="/icons/wine-glass.svg" />
            {wineType}
          </li>
          <li>
            <img src="/icons/wine-bottle.svg" />
            {wineStyle}
          </li>
          <li>
            <img src="/icons/grapes.svg" />
            {grapeType}
          </li>
          <li>
            <img src="/icons/flag.svg" />
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
