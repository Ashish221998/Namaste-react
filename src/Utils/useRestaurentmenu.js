import { useEffect, useState } from "react";

const useRestaurentmenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=" +
        resId
    );
    const json = await data.json();
    console.log(json);
    setresinfo(json.data);
  };
  useEffect(() => {
    fetchMenu();
  }, []);

  return resinfo;
};
export default useRestaurentmenu;
