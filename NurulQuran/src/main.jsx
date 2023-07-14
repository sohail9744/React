import React from "react";
import ReactDOM from "react-dom/client";
import Login from "./components/HomePageLayout/LoginPage.jsx";
import Home from "./components/HomePageLayout/Home.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Home />
    {/* <Login /> */}
  </React.StrictMode>
);
