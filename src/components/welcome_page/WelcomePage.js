/* eslint-disable jsx-a11y/aria-role */
import React, { Fragment, useEffect, useMemo, useState } from "react";
import parse from "html-react-parser";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Tilt from "react-tilt";
import { Link } from "react-scroll";

import profilePicture from "./images/profile.JPG";
import facebookPicture from "./images/facebook.png";
import linkedinPicture from "./images/linkedin.png";
import githubPicture from "./images/github.png";

import "./WelcomePage.css";
import { WelcomePageEnum } from "./enums/WelcomePageEnum";

// Migrated from react-particles-js v3 (snake_case) to @tsparticles/react v3
// (camelCase). Preserves the previous look: 100 white circles drifting,
// hover-to-grab, click-to-repulse.
const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: { enable: true, area: 1000 },
    },
    color: { value: "#ffffff" },
    shape: {
      type: "circle",
      stroke: { width: 0, color: "#000000" },
      polygon: { sides: 5 },
    },
    size: {
      value: { min: 0.3, max: 3 },
      animation: { enable: false, speed: 4, sync: false },
    },
    opacity: {
      value: { min: 0, max: 1 },
      animation: { enable: true, speed: 1, sync: false },
    },
    links: {
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
      outModes: { default: "out" },
    },
  },
  interactivity: {
    detectsOn: "canvas",
    events: {
      onHover: { enable: true, mode: "grab" },
      onClick: { enable: true, mode: "repulse" },
      resize: true,
    },
    modes: {
      grab: { distance: 150, links: { opacity: 0.5 } },
      bubble: { distance: 300, size: 0, duration: 3, opacity: 0, speed: 3 },
      repulse: { distance: 200, duration: 0.3 },
      push: { quantity: 4 },
      remove: { quantity: 2 },
    },
  },
  detectRetina: true,
};

const WelcomePage = ({ id }) => {
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

  const memoizedOptions = useMemo(() => particlesOptions, []);

  const handleClickAbout = () => {
    setTimeout(() => {
      window.scrollBy(0, 5);
    }, 1050);
  };

  return (
    <Fragment>
      <div className="welcome-page_container" id={id} data-testid="WelcomePage">
        {particlesReady && (
          <Particles
            id="welcome-particles"
            className="particles"
            options={memoizedOptions}
          />
        )}

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
              {parse(WelcomePageEnum.WELCOME.DESCRIPTION_MAIN)}
            </p>

            <p className="p_quote" role="InnerDescription_p">
              {parse(WelcomePageEnum.WELCOME.DESCRIPTION_SPECIAL)}
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
