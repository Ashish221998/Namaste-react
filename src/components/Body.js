import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [Listofrestaurents, setListofrestaurents] = useState([]);
  const [filteredrestaurents, setfilteredrestaurents] = useState([]);
  const [searchtext, setsearchtext] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const setStateVariable = (jsondata) => {
    jsondata.data.cards.map((item) => {
      if (item.card.card.id === "restaurant_grid_listing") {
        setListofrestaurents(
          item.card.card.gridElements.infoWithStyle.restaurants
        );
        setfilteredrestaurents(
          item.card.card.gridElements.infoWithStyle.restaurants
        );
      }
    });
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsondata = await response.json();
    console.log(jsondata);
    setStateVariable(jsondata);
  };

  const onlinestatus = useOnlineStatus();
  if (onlinestatus === false)
    return <h1>Opps...! Looks like you are offline!</h1>;

  if (Listofrestaurents.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black rounded-md shadow-md"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="px-4 py-o.5 m-4 bg-green-200 rounded-md hover:bg-violet-300 shadow-lg"
            onClick={() => {
              const filteredrestaurents = Listofrestaurents.filter((res) =>
                res.info.name.toLowerCase().includes(searchtext.toLowerCase())
              );
              setfilteredrestaurents(filteredrestaurents);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-2 py-2 m-8 rounded-md bg-gray-300 hover:bg-gray-400 shadow-lg"
          onClick={() => {
            const filteredList = Listofrestaurents.filter(
              (res) => res.info.avgRating > 4.3
            );

            setfilteredrestaurents(filteredList);
          }}
        >
          Top rated restaurents
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {filteredrestaurents.map((restaurants) => (
          <Link
            className="res-link"
            key={restaurants.info.id}
            to={"/restaurants/" + restaurants.info.id}
          >
            <RestaurentCard resData={restaurants.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
