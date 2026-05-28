import React from "react";

import ExperiencePage from "../ExperiencePage";
import { ExperiencePageEnum } from "../enums/ExperiencePageEnum";
import { renderWithStore } from "../../../test-utils/renderWithStore";

const COMPANIES = [
  { key: "MORA", expectedTaskCount: 4 },
  { key: "ING", expectedTaskCount: 4 },
  { key: "SAP", expectedTaskCount: 8 },
  { key: "EPAM", expectedTaskCount: 7 },
];

// The component renders three .experience-window_container blocks in the same
// order as COMPANIES, so we match by index rather than by text (the company
// name string also appears wrapped in <span> inside the description).
function getCompanyWindow(index) {
  return document.querySelectorAll(".experience-window_container")[index];
}

describe("ExperiencePage", () => {
  beforeEach(() => {
    renderWithStore(<ExperiencePage id="experiencepage" />);
  });

  it("renders the section with id and class", () => {
    const section = document.querySelector('[data-testid="ExperiencePage"]');
    expect(section).toHaveAttribute("id", "experiencepage");
    expect(section).toHaveClass("experience-page_container");
  });

  it("renders four company windows", () => {
    expect(
      document.querySelectorAll(".experience-window_container")
    ).toHaveLength(4);
  });

  describe.each(COMPANIES.map((c, index) => ({ ...c, index })))(
    "$key role",
    ({ key, expectedTaskCount, index }) => {
      it("renders the company title, location, position, and period", () => {
        const window = getCompanyWindow(index);
        // Each company-title / company-location / position-name / position-dates
        // is a unique element within the company window. We grep by class to
        // bypass the overload of the same text appearing inside the description
        // span tree.
        expect(window.querySelector(".company-title").textContent).toBe(
          ExperiencePageEnum[key].TITLE
        );
        expect(window.querySelector(".company-location").textContent).toBe(
          ExperiencePageEnum[key].LOCATION
        );
        expect(window.querySelector(".position-name").textContent).toBe(
          ExperiencePageEnum[key].POSITION
        );
        expect(window.querySelector(".position-dates").textContent).toBe(
          ExperiencePageEnum[key].PERIOD
        );
      });

      it(`renders ${expectedTaskCount} task entries`, () => {
        const window = getCompanyWindow(index);
        const tasks = window.querySelectorAll(".experience-window_task-container");
        expect(tasks).toHaveLength(expectedTaskCount);
      });
    }
  );
});
