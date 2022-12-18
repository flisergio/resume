import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/configureStore.js";

import App from "../App.js";
import Navigation from "../components/navigation/Navigation.js";

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
    Object.values(testIdValues).map(val => expect(realAppTestId).toContainElement(screen.getByTestId(val)))
  });

  describe("Navigation", () => {
    // beforeEach(() => {

    // });

    it("Navigation component renders nav inside", () => {
      const navTag = screen.getAllByRole("navigation")[0];
      const realNavigationTestId = screen.getByTestId("Navigation");
      expect(realNavigationTestId).toContainElement(navTag);
    });
  });
});
