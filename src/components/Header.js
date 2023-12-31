import { useContext, useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { AiOutlineShoppingCart } from "react-icons/Ai";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnname, setbtnname] = useState("Signin ");
  const onlinestatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between font-bold bg-pink-50 shadow-lg m-2">
      <div className="logo-container">
        <img className="w-56 bg-pink-50" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex p-4 m-4 ">
          <li className="px-4 hover:text-yellow-500">
            online:{onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 font-bold hover:text-yellow-500">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-bold hover:text-yellow-500">
            <Link to="/About">AboutMe</Link>
          </li>
          <li className="px-4 text-lg cursor-pointer">
            <Link to="/cart">Cart-({cartItems.length})</Link>
          </li>
          <li className="px-4 font-bold hover:text-yellow-500">
            <Link to="/Contact">Contact Me</Link>
          </li>
          <li className="px-4 font-bold hover:text-yellow-500">
            <Link to="/Grocery">Grocery</Link>
          </li>
          <button
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            onClick={() => {
              btnname === "Signin"
                ? setbtnname("Signout")
                : setbtnname("Signin");
            }}
          >
            {btnname}
          </button>
          <li className="px-4 font-bold  ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
