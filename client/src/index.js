import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import RegForm from "./components/RegForm";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GetRegisterUser from "./components/GetRegisterUser";
import EditDetails from "./components/EditDetails";

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <div></div>,
      },
      {
        path: "/register",
        element: <RegForm />,
      },
      {
        path:"/getUser",
        element:<GetRegisterUser/>
      },{
        path:"/edit/:_id",
        element:<EditDetails/>
      }
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={Router}/>
);
