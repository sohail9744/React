import ReactDOM from "react-dom/client";
import ProductList from "./Homepage.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyCart from "./MyCart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProductList />,
  },
  {
    path: "/cart",
    element: <MyCart />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
