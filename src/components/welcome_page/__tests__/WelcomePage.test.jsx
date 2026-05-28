import React from "react";
import { screen } from "@testing-library/react";
import { vi } from "vitest";

import WelcomePage from "../WelcomePage";
import { renderWithStore } from "../../../test-utils/renderWithStore";

// Avoid bringing the full tsparticles ESM engine into the test environment
// here — the App-level smoke test already exercises it. We just want to assert
// WelcomePage's structure.
vi.mock("@tsparticles/react", () => ({
  default: () => null,
  initParticlesEngine: () => Promise.resolve(),
}));
vi.mock("@tsparticles/slim", () => ({ loadSlim: () => Promise.resolve() }));

describe("WelcomePage", () => {
  beforeEach(() => {
    renderWithStore(<WelcomePage id="home" />);
  });

  it("renders the section with id and testid", () => {
    const section = screen.getByTestId("WelcomePage");
    expect(section).toHaveAttribute("id", "home");
    expect(section).toHaveClass("welcome-page_container");
  });

  it("renders the profile picture with alt text", () => {
    const img = screen.getByAltText("profile");
    expect(img).toHaveClass("img_profile-picture");
    expect(img.getAttribute("src")).toMatch(/profile\.JPG$/i);
  });

  it("renders three social-media anchors with correct hrefs and security attrs", () => {
    const expected = [
      ["facebook", "https://www.facebook.com/sergio.mejor.5/"],
      ["linkedin", "https://www.linkedin.com/in/sergii-kobyliaiev-570b46165/"],
      ["github", "https://www.github.com/flisergio"],
    ];
    for (const [alt, href] of expected) {
      const anchor = screen.getByAltText(alt).closest("a");
      expect(anchor).toHaveAttribute("href", href);
      expect(anchor).toHaveAttribute("target", "_blank");
      expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
    }
  });

  it("renders the call-to-action link to the about section", () => {
    // react-scroll <Link> renders a generic element (not an <a>) so we look
    // it up by the className we know is applied to it.
    const aboutLinks = document.querySelectorAll(".link_about");
    expect(aboutLinks).toHaveLength(1);
  });
});
