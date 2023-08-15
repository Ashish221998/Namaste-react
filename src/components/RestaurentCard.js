import { CDN_URL } from "../Utils/Constants";
const RestaurentCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, avgRating, cuisines, costForTwo } = resData;
  return (
    <div className="food-card">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurentCard;
