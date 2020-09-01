import React, { Component } from 'react';

import Tilt from 'react-tilt';
import { Link, animateScroll as scroll } from "react-scroll";

import './Navigation.css';
import logo_main from './images/logo_main.png';

const scrollToTop = () => {
    scroll.scrollToTop();
};

const scrollToBottom = () => {
    scroll.scrollToBottom();
};

const Navigation = ({ scrolled, 
    handleClickAbout, handleClickSkills, handleClickExperience, handleClickLinks, handleClickContact
}) => {
    if (!scrolled) {
        return(
            <nav className="nav_main">
                <div className="logo_container mt0">
                    <Tilt className="logo_main_container br2 shadow-2" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
                        <div className="Tilt-inner"><img className="logo_main" src={logo_main} alt="logo" onClick={scrollToTop}/></div>
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
                            onClick={handleClickAbout}
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
                            onClick={handleClickSkills}
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
                            onClick={handleClickExperience}
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
                            onClick={handleClickLinks}
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
                            onClick={handleClickContact}
                        >
                            <span>Hire Me</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    } else {
        return(
            <nav className="nav_main sticky">
                <div className="logo_container mt0">
                    <Tilt className="logo_main_container br2 shadow-2" options={{ max : 35 }} style={{ height: 100, width: 100 }} >
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
                            onClick={handleClickAbout}
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
                            onClick={handleClickSkills}
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
                            onClick={handleClickExperience}
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
                            onClick={handleClickLinks}
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
                            onClick={handleClickContact}
                        >
                            <span>Hire Me</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navigation;