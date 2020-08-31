import React, { Fragment, Component } from 'react';

import Navigation from './components/navigation/Navigation';  
import WelcomePage from './components/welcome_page/WelcomePage';  
import AboutPage from './components/about_page/AboutPage';  
import SkillsPage from './components/skills_page/SkillsPage';  
import ExperiencePage from './components/experience_page/ExperiencePage';  
import LinksPage from './components/links_page/LinksPage';  
import ContactForm from './components/contact_form/ContactForm';  

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.myRef = React.createRef();

    this.state = {
      scrolled: false,
    }
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    if (window.pageYOffset >= 80) {
      this.setState({scrolled: true});
    } else {
      this.setState({scrolled: false});
    }
  }

  handleClickAbout = () => {
    setTimeout(() => {
      window.scrollBy(0, 10);
    }, 550);
  }

  handleClickSkills = () => {
    setTimeout(() => {
      window.scrollBy(0, 10);
    }, 550);
  }

  handleClickExperience = () => {
    setTimeout(() => {
      window.scrollBy(0, 10);
    }, 550);
  }

  handleClickLinks = () => {
    setTimeout(() => {
      window.scrollBy(0, 10);
    }, 550);
  }

  handleClickContact = () => {
    setTimeout(() => {
      window.scrollBy(0, 10);
    }, 550);
  }

  render() {
    const { scrolled } = this.state;

    return (
      <Fragment>
        <div className="container_App">  
          <Navigation 
            scrolled={scrolled}

            handleClickAbout={this.handleClickAbout}
            handleClickSkills={this.handleClickSkills}
            handleClickExperience={this.handleClickExperience}
            handleClickLinks={this.handleClickLinks}
            handleClickContact={this.handleClickContact}
          />

          <WelcomePage 
            id="home"

            handleClickAbout={this.handleClickAbout}
          />

          <AboutPage 
            id="aboutpage"
          />

          <SkillsPage 
            id="skillspage" 
          />

          <ExperiencePage 
            id="experiencepage"
          />

          <LinksPage 
            id="linkspage"
          />

          <ContactForm 
            id="contact"
          />
        </div>
      </Fragment>
    );
  }
}

export default App;
