import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import MainPage from "./pages/MainPage";
import { RouterProvider } from "react-router";
import router from "./configs/router";
import "swiper/css";
import "swiper/css/pagination";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
