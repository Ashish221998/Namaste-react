import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useState } from "react";

import useRestaurentmenu from "../Utils/useRestaurentmenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const Restaurentmenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurentmenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (resinfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card || [];

  //console.log(resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const Categories =
    resinfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  // console.log(Categories);

  return (
    <div className="text-center">
      <h1 className="text-2xl   my-5 font-bold ">{name}</h1>
      <p className="text-lg font-bold">
        {cuisines.join(",")} - {costForTwoMessage}
      </p>
      {Categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};
export default Restaurentmenu;
