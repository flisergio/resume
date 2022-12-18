import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/configureStore.js";
import App from "../App.js";
import { toHaveClass } from "@testing-library/jest-dom/dist/matchers.js";

describe("App", () => {
  const store = configureStore(),
    testIdValues = {
      appTestId: "",
      navigationTestId: "",
      welcomePageTestId: "",
      skillsPageTestId: "",
      experiencePageTestId: "",
      linksPageTestId: "",
      contactFormTestId: "",
    };

  const testIdValuesEntries = Object.entries(testIdValues);
  // const testIds = [
  //   "App",
  //   "Navigation",
  //   "WelcomePage",
  //   "SkillsPage",
  //   "ExperiencePage",
  //   "LinksPage",
  //   "ContactForm",
  // ];

  const assignTestIdValues = (...args) => {
    testIdValuesEntries.map(
      ([key, value], index) => (testIdValues[key] = args[index])
    );
  };

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <ReduxProvider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ReduxProvider>
    );

    assignTestIdValues(
      "App",
      "Navigation",
      "WelcomePage",
      "SkillsPage",
      "ExperiencePage",
      "LinksPage",
      "ContactForm"
    );
  });

  it("App component renders successfully", () => {});

  it("App component renders all other components inside", () => {
    const realAppTestId = screen.getByTestId("App");
    Object.values(testIdValues).map((val) =>
      expect(realAppTestId).toContainElement(screen.getByTestId(val))
    );
  });

  describe("Navigation", () => {
    it("Navigation component renders nav inside", () => {
      const navTag = screen.getAllByRole("navigation")[0];
      const realNavigationTestId = screen.getByTestId("Navigation");
      const navTagClass = navTag.getAttribute("class");

      expect(navTagClass.includes("nav_main")).toBeTruthy();
      expect(realNavigationTestId).toContainElement(navTag);
    });
  });

  describe("WelcomePage", () => {
    let realWelcomePageTestId;

    beforeEach(() => {
      realWelcomePageTestId = screen.getByTestId("WelcomePage");
    });

    it("WelcomePage component to have right class and id", () => {
      const welcomePageId = realWelcomePageTestId.getAttribute("id");

      expect(welcomePageId).toEqual("home");
      expect(realWelcomePageTestId).toHaveClass("welcome-page_container");
    });

    // it("WelcomePage component renders particles with options inside", () => {
    //   const particlesTestId = screen.getByRole("Particles");
    //   const particleParams = particlesTestId.getAttribute("params");

    //   expect(particlesTestId).toHaveClass("particles");
    //   expect(particlesTestId).toHaveAttribute("params");
    //   expect(typeof (particleParams)).toBe("Object");
    //   expect(realWelcomePageTestId).toContainElement(particlesTestId);
    // });

    describe("Description Container", () => {
      let descriptionContainerTestId;

      beforeEach(() => {
        descriptionContainerTestId = screen.getByTestId(
          "WelcomePage_DescriptionContainer"
        );
      });

      it("WelcomePage component renders description container inside", () => {
        expect(realWelcomePageTestId).toContainElement(
          descriptionContainerTestId
        );
        expect(descriptionContainerTestId).toHaveClass("description_container");
      });

      it("Description container renders welcome header inside", () => {
        const welcomeHeaderTag = screen.getByRole("header_welcome");

        expect(descriptionContainerTestId).toContainElement(welcomeHeaderTag);
        expect(welcomeHeaderTag).toHaveClass("header_welcome");
      });

      it("tests Inner Description container", () => {
        const innerDescriptionContainerTestId = screen.getByTestId(
          "WelcomePage_InnerDescriptionContainer"
        ),
          innerDescriptionPTags = screen.getAllByRole("InnerDescription_p");


        expect(descriptionContainerTestId).toContainElement(
          innerDescriptionContainerTestId
        );
        expect(innerDescriptionPTags).toHaveLength(2);
        innerDescriptionPTags.map(p => expect(innerDescriptionContainerTestId).toContainElement(p));
        expect(innerDescriptionPTags[0]).toHaveClass("p_welcome-description");
        expect(innerDescriptionPTags[1]).toHaveClass("p_quote");
      });
    });
  });
});
