import React from "react";
import { screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navigation from "../Navigation";
import { NavigationEnum } from "../enums/NavigationEnum";
import { renderWithStore } from "../../../test-utils/renderWithStore";

describe("Navigation", () => {
  it("renders one Navigation root regardless of scroll state", () => {
    renderWithStore(<Navigation />);
    // Phase 1 collapsed the duplicated branches; both states share the same
    // testid now. Regression guard: this should never become "NavigationPage".
    expect(screen.getAllByTestId("Navigation")).toHaveLength(1);
    expect(screen.queryByTestId("NavigationPage")).toBeNull();
  });

  it("renders the six in-page nav labels", () => {
    renderWithStore(<Navigation />);
    const labels = Object.values(NavigationEnum.NAV);
    // Each label appears twice (desktop + mobile menus).
    for (const label of labels) {
      expect(screen.getAllByText(label).length).toBeGreaterThanOrEqual(1);
    }
  });

  it("renders the logo image", () => {
    renderWithStore(<Navigation />);
    expect(screen.getByAltText("logo")).toBeInTheDocument();
  });

  it("toggles hamClicked in the store when the hamburger is clicked", async () => {
    const user = userEvent.setup();
    const { store } = renderWithStore(<Navigation />);

    expect(store.getState().hamClicked).toBe(false);
    // The hamburger has no accessible name; its role is button.
    const hamburger = document.querySelector(".hamburger_container");
    expect(hamburger).not.toBeNull();
    await user.click(hamburger);
    expect(store.getState().hamClicked).toBe(true);
  });

  it("renders the three social-media links in the mobile menu", () => {
    renderWithStore(<Navigation />);
    expect(screen.getByAltText("facebook")).toBeInTheDocument();
    expect(screen.getByAltText("linkedin")).toBeInTheDocument();
    expect(screen.getByAltText("github")).toBeInTheDocument();
  });
});
