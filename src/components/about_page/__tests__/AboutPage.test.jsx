import React from "react";
import { screen } from "@testing-library/react";

import AboutPage from "../AboutPage";
import { AboutPageEnum } from "../enums/AboutPageEnum";
import { renderWithStore } from "../../../test-utils/renderWithStore";

describe("AboutPage", () => {
  beforeEach(() => {
    renderWithStore(<AboutPage id="aboutpage" />);
  });

  it("renders the section with id and class", () => {
    const section = screen.getByTestId("AboutPage");
    expect(section).toHaveAttribute("id", "aboutpage");
    expect(section).toHaveClass("about-page_container");
  });

  it("renders three card containers (personal, education, hobbies)", () => {
    expect(screen.getAllByTestId("AboutPage_CardContainer")).toHaveLength(3);
  });

  it("renders the three card images with their alt attributes", () => {
    expect(screen.getByAltText("personal-info")).toBeInTheDocument();
    expect(screen.getByAltText("education")).toBeInTheDocument();
    expect(screen.getByAltText("hobbies")).toBeInTheDocument();
  });

  it("renders enum-driven titles for each card", () => {
    expect(screen.getByText(AboutPageEnum.PERSONAL.TITLE)).toBeInTheDocument();
    expect(screen.getByText(AboutPageEnum.EDUCATION.TITLE)).toBeInTheDocument();
    expect(screen.getByText(AboutPageEnum.HOBBIES.TITLE)).toBeInTheDocument();
  });

  it("renders five hobby columns each with a title and description", () => {
    const columns = screen.getAllByTestId("AboutPage_HobbiesColumn");
    expect(columns).toHaveLength(5);
    expect(screen.getAllByTestId("AboutPage_HobbiesTitle")).toHaveLength(5);
    expect(screen.getAllByTestId("AboutPage_HobbiesDescription")).toHaveLength(5);
  });
});
