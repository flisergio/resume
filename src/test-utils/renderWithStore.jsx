import React from "react";
import { render } from "@testing-library/react";
import { Provider as ReduxProvider } from "react-redux";

import configureStore from "../redux/configureStore";

// Wraps render() with a fresh Redux store. Each call gets its own store so
// test cases never share state. Returns everything render() returns plus the
// store, so individual tests can inspect dispatched state if they want to.
export function renderWithStore(ui, options = {}) {
  const store = configureStore(options.preloadedState);
  const wrapper = ({ children }) => (
    <ReduxProvider store={store}>{children}</ReduxProvider>
  );
  return { store, ...render(ui, { wrapper, ...options }) };
}
