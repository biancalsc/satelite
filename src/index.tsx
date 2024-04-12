import ReactDOM from "react-dom/client";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { EmployeeAdd, Error404Page, LoginPage, MainPage } from "./routes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    errorElement: <Error404Page />
  },
  {
    path: "/Login",
    element: <LoginPage />,
  },
  {
    path: "/EmployeeAdd",
    element: <EmployeeAdd />,
  }
]);

root.render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>
);
