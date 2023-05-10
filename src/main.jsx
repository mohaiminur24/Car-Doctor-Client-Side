import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import MainLayout from "./MainLayout";
import AuthContexts from "./AuthContextLayout/AuthContexts";
import { RouterProvider } from "react-router-dom";
import router from "./Routelayout/Route";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContexts>
      <RouterProvider router={router}/>
    </AuthContexts>
  </React.StrictMode>
);
