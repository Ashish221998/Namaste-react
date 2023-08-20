import { useEffect, useState } from "react";

const useRestaurentmenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.4871462&lng=73.8200227&restaurantId=" +
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
