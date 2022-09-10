import React from "react";
import wineList from "../../utils/wine.json";
import Card from "./Card";
import "./Shop.scss";
export default function Shop() {
  return (
    <section className="shop" id="shop">
      {wineList.map((wine) => {
        return (
          <Card
            key={wine.id}
            id={wine.id}
            wineAuthor={wine.wineAuthor}
            wineTitle={wine.wineTitle}
            wineType={wine.wineType}
            wineStyle={wine.wineStyle}
            grapeType={wine.grapeType}
            origin={wine.origin}
            price={wine.price}
          />
        );
      })}
    </section>
  );
}
