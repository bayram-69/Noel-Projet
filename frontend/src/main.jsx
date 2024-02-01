import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";

import ProductsPage from "./pages/ProductsPage";
import ManufacturerPage from "./pages/ManufacturerPage";
import SantalistPage from "./pages/SantalistPage";
import RegistrationPage from "./pages/RegistrationPage";
import LoginPage from "./pages/LoginPage";
import SingleProductPage from "./pages/SingleProductPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import FavoritePage from "./pages/FavoritePage";
import AdminPage from "./pages/AdminPage";
import Notfound from "./pages/Notfound";
import ChristmasPage from "./pages/ChristmasPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/product`
          );
          const products = await response.json();
          return products;
        },
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
        loader: async ({ params }) => {
          const id = parseInt(params.id, 10);
          const products = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/product/${id}`
          );
          return products;
        },
      },
      {
        path: "/manufacturers",
        element: <ManufacturerPage />,
        loader: async () => {
          const response = await fetch(
            `${import.meta.env.VITE_BACKEND_URL}/api/manufacturer`
          );
          const products = await response.json();
          return products;
        },
      },
      {
        path: "/santalist",
        element: <SantalistPage />,
      },
      {
        path: "/registration",
        element: <RegistrationPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/favorite",
        element: <FavoritePage />,
      },
      {
        path: "/admin",
        element: <AdminPage />,
      },
      {
        path: "/game",
        element: <ChristmasPage />,
      },
      {
        path: "*",
        element: <Notfound />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
