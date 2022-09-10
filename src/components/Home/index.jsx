import React from "react";
import Featured from "../Featured";
import Shop from "../Shop";
import "./Home.scss";
export default function Home() {
  return (
    <div className="container">
      <Featured />
      <Shop />
    </div>
  );
}
