import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = () => {
  const [btnname, setbtnname] = useState("login ");
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-pink-50 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-56 bg-pink-50" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 ">
          <li className="px-4">Online:{onlinestatus ? "✅" : "🔴"}</li>
          <li className="px-4 hover:text-blue-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4  hover:text-blue-500">
            <Link to="/About">AboutUs</Link>
          </li>
          <li className="px-4  hover:text-blue-500">Cart</li>{" "}
          <li className="px-4  hover:text-blue-500">
            <Link to="/Contact">ContactUs</Link>
          </li>
          <li className="px-4  hover:text-blue-500">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              btnname === "login" ? setbtnname("logout") : setbtnname("login");
            }}
          >
            {btnname}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
