import React, { Fragment, Component } from 'react';

import { init } from 'emailjs-com';
import emailjs from 'emailjs-com';
import Swal from 'sweetalert2';

import { Link, animateScroll as scroll } from "react-scroll";

import Navigation from './components/navigation/Navigation';  
import WelcomePage from './components/welcome_page/WelcomePage';  
import AboutPage from './components/about_page/AboutPage';  
import SkillsPage from './components/skills_page/SkillsPage';  
import ExperiencePage from './components/experience_page/ExperiencePage';  
import LinksPage from './components/links_page/LinksPage';  
import ContactForm from './components/contact_form/ContactForm';  

import './App.css';

init("user_rJdhk2nwJUZEezZbmiTq9");

class App extends Component {
  constructor() {
    super();

    this.myRef = React.createRef();

    this.state = {
      scrolled: false,
      hamClicked: false,

      feedback: '',
      from_name: '',
      from_email: '',
      from_phone: ''
    }

    this.showMobileMenu = this.showMobileMenu.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  }

  showMobileMenu = () => {
    this.setState(state => ({
      hamClicked: !state.hamClicked
    }));
  }

  nameChange = (event) => {
    this.setState({from_name: event.target.value})
  }
  
  emailChange = (event) => {
    this.setState({from_email: event.target.value})
  }

  phoneChange = (event) => {
    this.setState({from_phone: event.target.value})
  }

  messageChange = (event) => {
    this.setState({feedback: event.target.value})
  }

  handleEmailSubmit = (event) => {
    event.preventDefault();

    const templateId = 'template_97mdipt';


    this.sendFeedback(templateId, {
                                    message: this.state.feedback, 
                                    from_name: this.state.from_name, 
                                    from_email: this.state.from_email,
                                    from_phone: this.state.from_phone
                                   }
                     )

  }

  sendFeedback = (templateId, variables) => {
    emailjs.send(
      'gmail', templateId,
      variables
      ).then(res => {
        Swal.fire({
          title: 'Email Successfully Sent',
          icon: 'success'
        })
      })
      .catch(err => {
        Swal.fire({
          title: 'Email Failed to Send',
          icon: 'error'
        })
        console.error('Email Error:', err)
      })
  }

  handleScroll = () => {
    if (window.pageYOffset >= 80) {
      this.setState({scrolled: true});
    } else {
      this.setState({scrolled: false});
    }
  }

  handleNavClick = () => {
    setTimeout(() => {
      window.scrollBy(0, 5);
    }, 1050);
  }

  render() {
    const { scrolled, hamClicked } = this.state;

    return (
      <Fragment>
        <div className="container_App">  
          <Navigation 
            scrolled={scrolled}
            hamClicked={hamClicked}

            showMobileMenu={this.showMobileMenu}
            handleNavClick={this.handleNavClick}
          />

          <WelcomePage 
            id="home"

            handleClickAbout={this.handleNavClick}
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

            handleEmailSubmit={this.handleEmailSubmit}
            nameChange={this.nameChange}
            emailChange={this.emailChange}
            phoneChange={this.phoneChange}
            messageChange={this.messageChange}
          />
        </div>
      </Fragment>
    )
  }
}

export default App;
