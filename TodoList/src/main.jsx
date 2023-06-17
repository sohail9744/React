import React from "react";
import ReactDOM from "react-dom/client";
import AddTodoList from "./components/AddTodo.jsx";
import "./css/index.css";
// import "./css/AddTodo. css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddTodoList />
  </React.StrictMode>
);
