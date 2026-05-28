import React from "react";
import { createRoot } from "react-dom/client";
import { Provider as ReduxProvider } from "react-redux";
import "tachyons";

import configureStore from "./redux/configureStore";
import App from "./App";

import "./index.css";

const store = configureStore();

createRoot(document.getElementById("root")).render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>
);
