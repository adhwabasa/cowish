import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage";
import LivestockPage from "../pages/LivestockPage";
import ProductPage from "../pages/ProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {path: "/livestock", element: <LivestockPage />},
  {path: "/livestock/:id", element: <ProductPage />}
]);

export default router;
