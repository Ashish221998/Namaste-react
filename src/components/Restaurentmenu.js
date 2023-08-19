import { useParams } from "react-router-dom";

import useRestaurentmenu from "../Utils/useRestaurentmenu";

const Restaurentmenu = () => {
  const { resId } = useParams();
  const resinfo = useRestaurentmenu(resId);

  if (resinfo === null) return;

  const { name, cuisines, costForTwoMessage } =
    resinfo?.cards[0]?.card?.card?.info;

  const itemCards =
    resinfo?.cards?.[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card
      ?.card?.itemCards || [];
  console.log(resinfo?.cards);

  return (
    <div className="">
      <h1 className="text-xl  p-2 m-2 font-bold text-center">{name}</h1>
      <h2 className="text-xl font-bold text-center">
        {cuisines.join(",")} - {costForTwoMessage}
      </h2>
      <h2 className=" p-2 m-2 text-center font-semibold">Menu</h2>
      <ul className="text-center p-2 m-1">
        {itemCards.map((item) => (
          <li className="p-2 m-2 text-xl" key={item.card.info.id}>
            {item.card.info.name} -Rs.
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Restaurentmenu;
