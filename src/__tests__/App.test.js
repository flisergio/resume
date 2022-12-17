import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../App.js";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/configureStore.js";

describe("App", () => {
  const store = configureStore();

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <ReduxProvider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ReduxProvider>
    );
  });

  it("App component renders successfully", () => {});

  it("App component renders all other components inside", () => {
    const appTestId = screen.getByTestId("App"),
      welcomePageTestId = screen.getByTestId("WelcomePage"),
      aboutPageTestId = screen.getByTestId("AboutPage"),
      skillsPageTestId = screen.getByTestId("SkillsPage"),
      experiencePageTestId = screen.getByTestId("ExperiencePage"),
      linksPageTestId = screen.getByTestId("LinksPage"),
      contactFormTestId = screen.getByTestId("ContactForm");

    expect(appTestId).toContainElement(welcomePageTestId);
    expect(appTestId).toContainElement(aboutPageTestId);
    expect(appTestId).toContainElement(skillsPageTestId);
    expect(appTestId).toContainElement(experiencePageTestId);
    expect(appTestId).toContainElement(linksPageTestId);
    expect(appTestId).toContainElement(contactFormTestId);
  });
});
