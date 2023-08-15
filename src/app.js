import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Contactus from "./components/Contactus";
import Error from "./components/Error";
import Restaurentmenu from "./components/Restaurentmenu";
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

const AppLayout = () => {
  return (
    <div className="app">
<<<<<<< HEAD
      <React.Fragment>
        <Header />
        <Outlet />
      </React.Fragment>
=======
      <Header />
      <Outlet />
>>>>>>> 83ca254ddb38f47fe851dff2f1f345298bbec3c7
    </div>
  );
};

<<<<<<< HEAD
const appRouter = createBrowserRouter([
=======
const approuter = createBrowserRouter([
>>>>>>> 83ca254ddb38f47fe851dff2f1f345298bbec3c7
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
        path: "/restaurants/:resId",
        element: <Restaurentmenu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

<<<<<<< HEAD
root.render(<RouterProvider router={appRouter} />);
=======
root.render(<RouterProvider router={approuter} />);
>>>>>>> 83ca254ddb38f47fe851dff2f1f345298bbec3c7
