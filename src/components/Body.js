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
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchtext}
            onChange={(e) => {
              setsearchtext(e.target.value);
            }}
          />
          <button
            className="search-btn"
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
          className="filter-btn"
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
      <div className="res-container">
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
