import React from "react";
import { screen } from "@testing-library/react";

import LinksPage from "../LinksPage";
import { LinksPageEnum } from "../enums/LinksPageEnum";
import { renderWithStore } from "../../../test-utils/renderWithStore";

const PROJECTS = [
  {
    key: "FQCS",
    expectedHref: "https://verify.spectrumfilaments.com/",
  },
  {
    key: "FR",
    expectedHref: "https://github.com/flisergio/Face-Recognition-App",
  },
  {
    key: "CINEMA",
    expectedHref: "https://github.com/wazxse5/CultureCenter",
  },
];

describe("LinksPage", () => {
  beforeEach(() => {
    renderWithStore(<LinksPage id="linkspage" />);
  });

  it("renders the section with id and class", () => {
    const section = screen.getByTestId("LinksPage");
    expect(section).toHaveAttribute("id", "linkspage");
    expect(section).toHaveClass("links-page_container");
  });

  it("renders three project cards", () => {
    const cards = document.querySelectorAll(".links-card_container");
    expect(cards).toHaveLength(3);
  });

  describe.each(PROJECTS)("$key project", ({ key, expectedHref }) => {
    it("renders the project title from the enum", () => {
      expect(screen.getByText(LinksPageEnum[key].TITLE)).toBeInTheDocument();
    });

    it("renders an external anchor with the correct href and security attrs", () => {
      const anchor = screen
        .getAllByRole("link")
        .find((el) => el.getAttribute("href") === expectedHref);
      expect(anchor).toBeDefined();
      expect(anchor).toHaveAttribute("target", "_blank");
      expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
    });
  });
});
