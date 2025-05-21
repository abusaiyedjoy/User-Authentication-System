import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import Router from './Router/Router';
import { ThemeProvider } from "./components/ThemeContext/ThemeContext";
import { ToastContainer } from "react-toastify";



ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <React.StrictMode>
      <ToastContainer />
      <RouterProvider router={Router} />
    </React.StrictMode>
  </ThemeProvider>
);