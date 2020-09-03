import React, { Fragment }  from 'react';

import Tilt from 'react-tilt';
import { Link, animateScroll as scroll } from "react-scroll";

import './Navigation.css';
import logo_main from './images/logo_main.png';
import facebookPicture from "./images/facebook.png";
import instagramPicture from "./images/instagram.png";
import linkedinPicture from "./images/linkedin.png";

const scrollToTop = () => {
    scroll.scrollToTop();
};

const scrollToBottom = () => {
    scroll.scrollToBottom();
};

const Navigation = (props) => {
    if (!props.scrolled) {
        return(
            <Fragment>
                <nav className="nav_main">
                    <div className="logo_container mt0">
                        <Tilt className="logo_main_container br2 shadow-2" options={{ max : 55 }} >
                            <div className="Tilt-inner"><img className="logo_main" src={logo_main} alt="logo" /></div>
                        </Tilt>
                    </div>

                    <ul className="ul_menu_main">
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="aboutpage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>About Me</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="skillspage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>Skills</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="experiencepage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>Experience</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="linkspage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>Links</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
                
                <nav className={`nav_main_mobile ${props.hamClicked ? "active" : ""}`}>
                    <Link
                        className="hamburger_container" 
                        to="#" 
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        onClick={props.showMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>

                    <div className="mobile_links-container">
                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            >
                                <span>Home</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="aboutpage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 
                                <span>About</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="skillspage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 
                                <span>Skills</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="experiencepage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 

                                <span>Experience</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="linkspage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 

                                <span>Links</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 

                                <span>Contact</span>
                            </Link>
                        </div>
                    </div>
                </nav>
            </Fragment>
        );
    } else {
        return(
            <Fragment>
                <nav className="nav_main sticky">
                    <div className="logo_container mt0">
                        <Tilt className="logo_main_container br2 shadow-2" options={{ max : 35 }} >
                            <div className="Tilt-inner"><img className="logo_main" src={logo_main} alt="logo"/></div>
                        </Tilt>
                    </div>

                    <ul className="ul_menu_main">
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                            >
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="aboutpage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>About Me</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="skillspage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>Skills</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="experiencepage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>Experience</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="linkspage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>Links</span>
                            </Link>
                        </li>
                        <li className="li_menu_main_item">
                            <Link
                                className="link_main_nav"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.handleNavClick}
                            >
                                <span>Contact</span>
                            </Link>
                        </li>
                    </ul>
                </nav>

                <nav className={`nav_main_mobile ${props.hamClicked ? "active" : ""}`}>
                    <Link
                        className="hamburger_container" 
                        to="#" 
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={1000}
                        onClick={props.showMobileMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>

                    <div className="mobile_links-container">
                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            >
                                <span>Home</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="aboutpage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            >                                 
                                <span>About</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="skillspage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 
                                <span>Skills</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="experiencepage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 
                                <span>Experience</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="linkspage"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 
                                <span>Links</span>
                            </Link>
                        </div>

                        <div className="mobile-link_container">
                            <Link
                                className="link_main_mobile_nav"
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={0}
                                duration={1000}
                                onClick={props.showMobileMenu}
                            > 
                                <span>Contact</span>
                            </Link>
                        </div>

                        <ul className="ul_social-media_mobile">
                            <li>
                                <a href="https://www.facebook.com/sergio.mejor.5/">
                                    <img 
                                        className="icon_social-media_mobile" 
                                        src={facebookPicture} 
                                        alt="facebook"
                                    />
                                </a>
                            </li>
                            
                            <li>
                                <a href="https://www.instagram.com/flisergio">
                                    <img 
                                        className="icon_social-media_mobile" 
                                        src={instagramPicture} 
                                        alt="instagram"
                                    />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/sergii-kobyliaiev-570b46165/">
                                    <img 
                                        className="icon_social-media_mobile" 
                                        src={linkedinPicture} 
                                        alt="linkedin"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </Fragment>
        );
    }
}

export default Navigation;