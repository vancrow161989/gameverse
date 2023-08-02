import { createBrowserRouter } from "react-router-dom";
import GameDetailsPage from "../components/GameDetailsPage";
import Homepage from "../components/Homepage";
import Layout from "../components/Layout";
import ErrorPage from "../pages/ErrorPage";
import "../index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        index: true,
        element: <Homepage />
      },
      {
        path: "games/:slug",
        element: <GameDetailsPage />
      }
    ]
  }
]);

export default router;
