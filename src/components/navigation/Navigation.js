import React, { Fragment, useEffect, useCallback } from "react";
import Tilt from "react-tilt";
import { Link } from "react-scroll";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import * as scrolledActions from "../../redux/actions/scrolledActions";
import * as hamClickedActions from "../../redux/actions/hamClickedActions";

import logo_main from "./images/logo_main.png";
import facebookPicture from "./images/facebook.png";
import linkedinPicture from "./images/linkedin.png";
import githubPicture from "./images/github.png";

import "./Navigation.css";
import { NavigationEnum } from "./enums/NavigationEnum";

const SCROLL_THRESHOLD_PX = 80;
const NAV_LINK_OFFSET_CORRECTION_PX = 5;
const NAV_SCROLL_CORRECTION_DELAY_MS = 1050;

const NAV_ITEMS = [
  { to: "home", label: NavigationEnum.NAV.HOME, withCorrection: false },
  { to: "aboutpage", label: NavigationEnum.NAV.ABOUT, withCorrection: true },
  { to: "skillspage", label: NavigationEnum.NAV.SKILLS, withCorrection: true },
  { to: "experiencepage", label: NavigationEnum.NAV.EXPERIENCE, withCorrection: true },
  { to: "linkspage", label: NavigationEnum.NAV.LINKS, withCorrection: true },
  { to: "contact", label: NavigationEnum.NAV.CONTACT, withCorrection: true },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/sergio.mejor.5/",
    src: facebookPicture,
    alt: "facebook",
  },
  {
    href: "https://www.linkedin.com/in/sergii-kobyliaiev-570b46165/",
    src: linkedinPicture,
    alt: "linkedin",
  },
  {
    href: "https://www.github.com/flisergio",
    src: githubPicture,
    alt: "github",
  },
];

const Navigation = (props) => {
  const { scrolled, hamClicked, actions } = props;

  const showMobileMenu = () => actions.updateHamClicked(!hamClicked);

  const handleNavClick = () => {
    setTimeout(() => {
      window.scrollBy(0, NAV_LINK_OFFSET_CORRECTION_PX);
    }, NAV_SCROLL_CORRECTION_DELAY_MS);
  };

  // Stable reference so the scroll listener is registered exactly once.
  const handleScroll = useCallback(() => {
    actions.updateScrolled(window.pageYOffset >= SCROLL_THRESHOLD_PX);
  }, [actions]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const tiltMax = scrolled ? 35 : 55;

  return (
    <Fragment>
      <div data-testid="Navigation">
        <nav className={`nav_main${scrolled ? " sticky" : ""}`}>
          <div className="logo_container mt0">
            <Tilt
              className="logo_main_container br2 shadow-2"
              options={{ max: tiltMax }}
            >
              <div className="Tilt-inner">
                <img className="logo_main" src={logo_main} alt="logo" />
              </div>
            </Tilt>
          </div>

          <ul className="ul_menu_main">
            {NAV_ITEMS.map(({ to, label, withCorrection }) => (
              <li className="li_menu_main_item" key={to}>
                <Link
                  className="link_main_nav"
                  activeClass="active"
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  onClick={withCorrection ? handleNavClick : undefined}
                >
                  <span>{label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav className={`nav_main_mobile ${hamClicked ? "active" : ""}`}>
          <button className="hamburger_container" onClick={showMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="mobile_links-container">
            {NAV_ITEMS.map(({ to, label }) => (
              <div className="mobile-link_container" key={to}>
                <Link
                  className="link_main_mobile_nav"
                  activeClass="active"
                  to={to}
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                  onClick={showMobileMenu}
                >
                  <span>{label}</span>
                </Link>
              </div>
            ))}

            <ul className="ul_social-media_mobile">
              {SOCIAL_LINKS.map(({ href, src, alt }) => (
                <li key={alt}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={href}
                  >
                    <img
                      className="icon_social-media_mobile"
                      src={src}
                      alt={alt}
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </Fragment>
  );
};

Navigation.propTypes = {
  scrolled: PropTypes.bool.isRequired,
  hamClicked: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  scrolled: state.scrolled,
  hamClicked: state.hamClicked,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateScrolled: bindActionCreators(
      scrolledActions.updateScrolled,
      dispatch
    ),
    updateHamClicked: bindActionCreators(
      hamClickedActions.updateHamClicked,
      dispatch
    ),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
