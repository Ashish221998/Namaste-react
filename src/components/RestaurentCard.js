import { useContext } from "react";
import { CDN_URL } from "../Utils/Constants";
import { BsStarFill } from "react-icons/bs";

import UserContext from "../Utils/UserContext";
const RestaurentCard = (props) => {
  const { resData } = props;
  const { loggedInUser } = useContext(UserContext);
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
  return (
    <div className="m-4 p-4 gap-5 w-[250px] h-full rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-sans text-lg font-bold py-1">{name}</h3>
      <p className="break-words text-lg p-1">
        {cuisines.slice(0, 3).join(", ")}
      </p>

      <h4 className="flex items-center">
        <span className="mr-2">
          <BsStarFill />
        </span>
        {avgRating}
      </h4>
      <h4 className="py-1  break-words">{costForTwo}</h4>
      <h4 className="py-1 font-semibold break-words">User:{loggedInUser}</h4>
    </div>
  );
};

export default RestaurentCard;
