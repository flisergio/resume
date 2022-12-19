/* eslint-disable jsx-a11y/aria-role */
import React, { Fragment } from "react";
import parse from "html-react-parser";

import Particles from "react-particles-js";
import Tilt from "react-tilt";
import { Link } from "react-scroll";

import profilePicture from "./images/profile.JPG";
import facebookPicture from "./images/facebook.png";
import linkedinPicture from "./images/linkedin.png";
import githubPicture from "./images/github.png";

import "./WelcomePage.css";
import { WelcomePageEnum } from "./enums/WelcomePageEnum";

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000,
      },
    },
    color: {
      value: "#ffffff",
    },
    shape: {
      type: "circle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 5,
      },
      image: {},
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 4,
        size_min: 0.3,
        sync: false,
      },
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0,
        sync: false,
      },
    },
    line_linked: {
      enable: false,
      distance: 200,
      color: "#ffffff",
      opacity: 0.5,
      width: 1,
    },
    move: {
      enable: true,
      direction: "none",
      random: true,
      straight: false,
      speed: 1,
      out_mode: "out",
      attract: {
        enable: false,
        rotateX: 600,
        totateY: 600,
      },
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "grab",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 150,
        line_linked: {
          opacity: 0.5,
        },
      },
      bubble: {
        distance: 300,
        size: 0,
        duration: 3,
        opacity: 0,
        speed: 3,
      },
      repulse: {
        distance: 200,
        duration: 0.3,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
  // config_demo: {
  //   hide_card: false,
  // }
};

const WelcomePage = ({ id }) => {
  const handleClickAbout = () => {
    setTimeout(() => {
      window.scrollBy(0, 5);
    }, 1050);
  };

  return (
    <Fragment>
      <div className="welcome-page_container" id={id} data-testid="WelcomePage">
        <Particles className="particles" params={particlesOptions}></Particles>

        <div
          className="description_container"
          data-testid="WelcomePage_DescriptionContainer"
        >
          <h2 className="header_welcome" role="header_welcome">
            {parse(WelcomePageEnum.WELCOME.TITLE)}
          </h2>

          <div
            className="welcome-description_container"
            data-testid="WelcomePage_InnerDescriptionContainer"
          >
            <p className="p_welcome-description" role="InnerDescription_p">
              {WelcomePageEnum.WELCOME.DESCRIPTION_MAIN}
            </p>

            <p className="p_quote" role="InnerDescription_p">
              <span>{WelcomePageEnum.WELCOME.DESCRIPTION_SPECIAL}</span>
            </p>
          </div>

          <Link
            className="link_about"
            to="aboutpage"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
            onClick={handleClickAbout}
            role="WelcomePage_Link_AboutPage"
          >
            <span>{WelcomePageEnum.WELCOME.DESCRIPTION_BUTTON_TEXT}</span>
          </Link>
        </div>

        <div
          className="profile-picture_container"
          data-testid="WelcomePage_ProfilePictureContainer"
        >
          <img
            src={profilePicture}
            className="img_profile-picture"
            alt="profile"
            role="ProfilePicture"
          />
        </div>

        <ul className="ul_social-media" role="SocialMediaLinksList">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.facebook.com/sergio.mejor.5/"
              role="Welcome_SocialMediaLink"
            >
              <Tilt
                className="icon_social-media_container br2 shadow-2"
                options={{ max: 35 }}
              >
                <div
                  className="Tilt-inner"
                  data-testid="Welcome_SocialMedia_TiltContainer"
                >
                  <img
                    className="icon_social-media"
                    src={facebookPicture}
                    alt="facebook"
                    role="Welcome_SocialMediaIcon"
                  />
                </div>
              </Tilt>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sergii-kobyliaiev-570b46165/"
              role="Welcome_SocialMediaLink"
            >
              <Tilt
                className="icon_social-media_container br2 shadow-2"
                options={{ max: 35 }}
              >
                <div
                  className="Tilt-inner"
                  data-testid="Welcome_SocialMedia_TiltContainer"
                >
                  <img
                    className="icon_social-media"
                    src={linkedinPicture}
                    alt="linkedin"
                    role="Welcome_SocialMediaIcon"
                  />
                </div>
              </Tilt>
            </a>
          </li>

          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.github.com/flisergio"
              role="Welcome_SocialMediaLink"
            >
              <Tilt
                className="icon_social-media_container br2 shadow-2"
                options={{ max: 35 }}
              >
                <div
                  className="Tilt-inner"
                  data-testid="Welcome_SocialMedia_TiltContainer"
                >
                  <img
                    className="icon_social-media"
                    src={githubPicture}
                    alt="github"
                    role="Welcome_SocialMediaIcon"
                  />
                </div>
              </Tilt>
            </a>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default WelcomePage;
