import React, { useEffect, useState } from "react";
<<<<<<< HEAD
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../Utils/Constants";

const Restaurentmenu = () => {
  const [resinfo, setresinfo] = useState(null);
  const { resId } = useParams();

=======

const Restaurentmenu = () => {
>>>>>>> 83ca254ddb38f47fe851dff2f1f345298bbec3c7
  useEffect(() => {
    fetchMenu();
  }, []);
  const fetchMenu = async () => {
<<<<<<< HEAD
    const data = await fetch(MENU_API + resId);

    const json = await data.json();

    console.log(json);
    setresinfo(json.data);
  };
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

      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
=======
    const response = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=425&submitAction=ENTER"
    );

    const data = await response.json();

    console.log(data);
  };

  return (
    <div className="menu">
      <h1>Name of a restaurent</h1>
      <h2>menu</h2>
      <ul>
        <li>Snacks</li>
        <li>Main course</li>
        <li>Dessserts</li>
        <li>Soft Drinks</li>
>>>>>>> 83ca254ddb38f47fe851dff2f1f345298bbec3c7
      </ul>
    </div>
  );
};

export default Restaurentmenu;
