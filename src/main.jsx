// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

import  "./css/App.css";
import  "./css/Login.css";
import  "./css/Lo.css";
import  "./css/AuthLayout.css";


createRoot(document.getElementById("root")).render(
  
    <BrowserRouter>
      <App />
    </BrowserRouter>
  
);