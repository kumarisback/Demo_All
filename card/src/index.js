import React from "react";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from "react-dom/client";
import Card from "./Card";
const container = document.getElementById("root");
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <BrowserRouter>
    < Card/>
  </BrowserRouter>
);

