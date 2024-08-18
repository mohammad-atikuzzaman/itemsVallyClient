import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home.jsx";
import AddData from "./components/fakecomp/AddData.jsx";
import DetailsData from "./pages/DetailsData.jsx";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import ContextComponent from "./context/ContextComponent.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <AddData></AddData>,
      },
      {
        path: "/details/:id",
        element: <DetailsData></DetailsData>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextComponent>
      <RouterProvider router={router} />
    </ContextComponent>
  </StrictMode>
);
