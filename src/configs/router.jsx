import { createBrowserRouter } from "react-router";
import MainPage from "../pages/MainPage";
import LivestockPage from "../pages/LivestockPage";
import ProductPage from "../pages/ProductPage";
import CartPage from "../pages/CartPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {path: "/livestock", element: <LivestockPage />},
  {path: "/livestock/:id", element: <ProductPage />},
  {path: "/cart", element: <CartPage />}
]);

export default router;
