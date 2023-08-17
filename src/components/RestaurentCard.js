import { CDN_URL } from "../Utils/Constants";
const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200 shadow-md">
      <img className="rounded-lg" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-sans text-lg font-bold py-2">{name}</h3>
      <h4 className="break-words py-0.5">{cuisines.join(",")}</h4>
      <h4 className="py-1">{avgRating} stars</h4>
      <h4 className="py-1">{costForTwo}</h4>
    </div>
  );
};

export default RestaurentCard;
