import React from "react";
import { screen } from "@testing-library/react";

import SkillsPage from "../SkillsPage";
import { SkillsPageEnum } from "../enums/SkillsPageEnum";
import { renderWithStore } from "../../../test-utils/renderWithStore";

// One parametrized describe block replaces the four near-identical blocks in
// the old App.test.js (each had the missing-`.length` bug in its inner loop).
const WINDOWS = [
  {
    label: "Front-End",
    enumKey: "FRONTEND",
    expectedSkillCount: 7,
    skillTestId: "SkillsPage_FrontEndSkillContainer",
  },
  {
    label: "Back-End",
    enumKey: "BACKEND",
    expectedSkillCount: 6,
    skillTestId: "SkillsPage_BackEndSkillContainer",
  },
  {
    label: "Other",
    enumKey: "OTHER",
    expectedSkillCount: 7,
    skillTestId: "SkillsPage_OtherSkillContainer",
  },
  {
    label: "Language",
    enumKey: "LANG",
    expectedSkillCount: 4,
    skillTestId: "SkillsPage_LanguageSkillContainer",
  },
];

describe("SkillsPage", () => {
  beforeEach(() => {
    renderWithStore(<SkillsPage id="skillspage" />);
  });

  it("renders the section with id and class", () => {
    const section = screen.getByTestId("SkillsPage");
    expect(section).toHaveAttribute("id", "skillspage");
    expect(section).toHaveClass("skills-page_container");
  });

  it("renders four skills windows", () => {
    expect(screen.getAllByTestId("SkillsPage_WindowContainer")).toHaveLength(4);
  });

  describe.each(WINDOWS)(
    "$label window",
    ({ enumKey, expectedSkillCount, skillTestId }) => {
      it("renders its title from the enum", () => {
        expect(
          screen.getByText(SkillsPageEnum[enumKey].TITLE)
        ).toBeInTheDocument();
      });

      it(`renders ${expectedSkillCount} skill containers`, () => {
        const skills = screen.getAllByTestId(skillTestId);
        expect(skills).toHaveLength(expectedSkillCount);
        for (const skill of skills) {
          expect(skill).toHaveClass("skill_container");
          // Each skill exposes its name in an <h3>. We use a tag query rather
          // than a role query because the components attach a custom role
          // attribute that suppresses the implicit "heading" ARIA role.
          expect(skill.querySelector("h3")).not.toBeNull();
        }
      });
    }
  );
});
