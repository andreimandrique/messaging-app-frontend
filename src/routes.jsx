import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import Welcome from "./pages/Welcome";
import Room from "./pages/Room";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      { index: true, element: <Welcome /> },
      { path: "room/:roomId", element: <Room /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
