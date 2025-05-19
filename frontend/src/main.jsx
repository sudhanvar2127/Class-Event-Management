import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { EventProvider } from "./context/EventContext.jsx";

createRoot(document.getElementById("root")).render(
  <EventProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EventProvider>
);
