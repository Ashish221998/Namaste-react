import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurentmenu from "../Utils/useRestaurentmenu";

const Restaurentmenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurentmenu(resId);

  if (resinfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resinfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h4>
        Cuisine: {cuisines.join(",")} - {costForTwoMessage}
      </h4>

      <ul className="resmenu-list">
        {itemCards.map((item) => (
          <li className="menu-items" key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurentmenu;
