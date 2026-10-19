import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import react from "react";
import reactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Cart from "./components/context/cartContext.jsx";

reactDOM.createRoot(document.getElementById("root")).render(
  <react.StrictMode>
    <BrowserRouter basename="/">
      <Cart>
        <App />
      </Cart>
    </BrowserRouter>
  </react.StrictMode>,
);
