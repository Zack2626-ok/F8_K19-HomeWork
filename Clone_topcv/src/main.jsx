import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import HomePage from "./pages/index.jsx";
import EmployerPage from "./pages/employerPage/index.jsx";
import EmployerLogin from "./pages/auth/login/employerLogin/index.jsx";
import EmployerRegister from "./pages/auth/register/employerRes/index.jsx";
import "./css/reset.css";
import "./css/index.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/employer",
    element: <EmployerPage />,
  },
  {
    path: "/employer/login",
    element: <EmployerLogin />,
  },
  {
    path: "/employer/register",
    element: <EmployerRegister />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
