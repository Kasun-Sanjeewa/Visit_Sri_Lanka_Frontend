import React from "react";
import Cards from "./card";
import { Data } from "../data/Data";

export default function CardList({ category }) {
  return (
    <div className="card_list">
      {Data[category].map((card) => {
        return <Cards {...card} key={card.id} />;
      })}
    </div>
  );
}
