import React, { lazy, Suspense } from "react";
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
const Grocery = lazy(() => import("./components/Grocery"));
const AppLayout = () => {
  return (
    <div className="app">
      <React.Fragment>
        <Header />
        <Outlet />
      </React.Fragment>
    </div>
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
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
