import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./pages/Products";
import HomePage from "./pages/index.jsx";
import DetailProduct from "./pages/Products/DetailProduct.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:id",
    element: <DetailProduct />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
