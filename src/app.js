import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Restaurentmenu from "./components/Restaurentmenu";
import UserContext from "./Utils/UserContext";
import { Provider } from "react-redux";
import AppStore from "./Utils/AppStore";
import Cart from "./components/Cart";

/***
 * HEADER
 * -LOGO
 * -NAVBAR
 * BODY
 * -SEARCBH
 * -RES CCONTGAINER
 * ---RES CARDS
 * FOOTER
 * -COPYRIGHT
 * -LINKS
 * -ADDRESS
 * -CONTACT US
 */
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  const [userName, setUserName] = useState();
  useEffect(() => {
    const data = {
      name: "Ashish",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={AppStore}>
      <UserContext.Provider value={{ loggedInUser: userName }}>
        <div className="app">
          <Header />
          <Outlet />
        </div>
      </UserContext.Provider>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contactus />,
      },
      {
        path: "/Grocery",
        element: (
          <Suspense fallback={<h1>Loading please wait.....</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
      {
        path: "/restaurants/:resId",
        element: <Restaurentmenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
