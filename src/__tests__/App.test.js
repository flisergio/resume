import React from "react";
import { screen } from "@testing-library/react";

import App from "../App";
import { renderWithStore } from "../test-utils/renderWithStore";

// Smoke test only. Per-section assertions live in
// src/components/<section>/__tests__/<Section>.test.jsx.
describe("App", () => {
  beforeEach(() => {
    renderWithStore(<App />);
  });

  it("renders every top-level section", () => {
    const expected = [
      "App",
      "Navigation",
      "WelcomePage",
      "AboutPage",
      "SkillsPage",
      "ExperiencePage",
      "LinksPage",
      "ContactForm",
    ];
    for (const id of expected) {
      expect(screen.getByTestId(id)).toBeInTheDocument();
    }
  });

  it("nests every section inside the App container", () => {
    const root = screen.getByTestId("App");
    const ids = [
      "Navigation",
      "WelcomePage",
      "AboutPage",
      "SkillsPage",
      "ExperiencePage",
      "LinksPage",
      "ContactForm",
    ];
    for (const id of ids) {
      expect(root).toContainElement(screen.getByTestId(id));
    }
  });
});
