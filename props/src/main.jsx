import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ParentView from "./parent.jsx";
import HomeView from './HomeView.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ParentView />
    <HomeView/>
  </React.StrictMode>
);
