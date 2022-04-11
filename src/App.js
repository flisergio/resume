import React, { Fragment } from "react";

import Navigation from "./components/navigation/Navigation";
import WelcomePage from "./components/welcome_page/WelcomePage";
import AboutPage from "./components/about_page/AboutPage";
import SkillsPage from "./components/skills_page/SkillsPage";
import ExperiencePage from "./components/experience_page/ExperiencePage";
import LinksPage from "./components/links_page/LinksPage";
import ContactForm from "./components/contact_form/ContactForm";

import "./App.css";

const App = () => (
  <Fragment>
    <div className="container_App">
      <Navigation />

      <WelcomePage id="home" />
      <AboutPage id="aboutpage" />
      <SkillsPage id="skillspage" />
      <ExperiencePage id="experiencepage" />
      <LinksPage id="linkspage" />
      <ContactForm id="contact" />
    </div>
  </Fragment>
);

export default App;
