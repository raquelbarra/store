import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/error-page";
import App from "../App";
import { Details, loaderProducts } from "../components/Details";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/:id",
      element: <Details />,
      loader: loaderProducts
    }
  ]);