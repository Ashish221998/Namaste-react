import { useEffect, useState } from "react";
import { MENU_API } from "./Constants";

const useRestaurentmenu = (resId) => {
  const [resinfo, setresinfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresinfo(json.data);
  };

  return resinfo;
};
export default useRestaurentmenu;
