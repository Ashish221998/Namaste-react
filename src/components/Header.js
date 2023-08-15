import { useState } from "react";
import { LOGO_URL } from "../Utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnname, setbtnname] = useState("login ");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo-img" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">AboutUs</Link>
          </li>
          <li>Cart</li>{" "}
          <li>
            <Link to="/Contact">ContactUs</Link>
          </li>
          <button
            className="login-btn"
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
