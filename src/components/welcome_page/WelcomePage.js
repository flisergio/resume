import React, { Fragment } from 'react';

import Particles from 'react-particles-js';
import Tilt from 'react-tilt';
import { Link, animateScroll as scroll } from "react-scroll";

import './WelcomePage.css';
import profilePicture from "./images/profile.JPG";
import facebookPicture from "./images/facebook.png";
import instagramPicture from "./images/instagram.png";
import linkedinPicture from "./images/linkedin.png";

const particlesOptions = {
    particles: {
        number: {
            value: 100,
            density: {
                enable: true,
                value_area: 1000
            }
        },
        color: {
            value: "#ffffff"
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {

            }
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false
            }
        },
        opacity: {
            value: 1,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false
            }
        },
        line_linked: {
            enable: false,
            distance: 200,
            color: "#ffffff",
            opacity: 0.5,
            width: 1
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
                totateY: 600
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab"
            },
            onclick: {
                enable: true,
                mode: "repulse"
            },
            resize: true
            },
        modes: {
            grab: {
                distance: 150,
                line_linked: {
                opacity: 0.5
                }
            },
            bubble: {
                distance: 300,
                size: 0,
                duration: 3,
                opacity: 0,
                speed: 3
            },
            repulse: {
                distance: 200,
                duration: 0.3
            },
            push: {
                particles_nb: 4
            },
            remove: {
                particles_nb: 2
            }
        }
    },
    retina_detect: true,
    // config_demo: {
    //   hide_card: false,
    // }
}

const WelcomePage = ({ id, handleClickAbout }) => {
    return(
        <Fragment>
            <div className="welcome-page_container" id={id}>
                <Particles className="particles"
                    params={particlesOptions} 
                />

                {/* <div className="welcome-page_inside_container"> */}
                    <div className="description_container">
                        <h2 className="header_welcome">Hello, I'm<span><br></br>Sergii Kobyliaiev</span></h2>

                        <div className="welcome-description_container">
                            <p className="p_welcome-description">
                                My main goals are acquiring new skills and professional development. I am a hard-working person, 
                                so I am ready to spend a lot of time learning new things and doing work. Every created  project 
                                is my motivation. I am not scare of new tasks and always finish anything I start.
                            </p>

                            <p className="p_quote">
                                "If you can't do great things, do small things in a great way"
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
                        >
                            <span>About Me</span>
                        </Link>
                    </div>

                    <div className="profile-picture_container">
                        <img 
                            src={profilePicture}
                            className="img_profile-picture"
                            alt="profile"
                        />
                    </div>

                    <ul className="ul_social-media">
                        <li><a href="https://www.facebook.com/sergio.mejor.5/">
                            <Tilt className="icon_social-media_container br2 shadow-2" options={{ max : 35 }} >
                                <div className="Tilt-inner">
                                    <img 
                                        className="icon_social-media" 
                                        src={facebookPicture} 
                                        alt="facebook"
                                    />
                                </div>
                            </Tilt>
                        </a></li>
                        
                        <li><a href="https://instagram.com/flisergio">
                            <Tilt className="icon_social-media_container br2 shadow-2" options={{ max : 35 }} >
                                <div className="Tilt-inner">
                                    <img 
                                        className="icon_social-media" 
                                        src={instagramPicture} 
                                        alt="instagram"
                                    />
                                </div>
                            </Tilt>
                        </a></li>

                        <li><a href="https://www.linkedin.com/in/sergii-kobyliaiev-570b46165/">
                            <Tilt className="icon_social-media_container br2 shadow-2" options={{ max : 35 }} >
                                <div className="Tilt-inner">
                                    <img 
                                        className="icon_social-media" 
                                        src={linkedinPicture} 
                                        alt="linkedin"
                                    />
                                </div>
                            </Tilt>
                        </a></li>
                    </ul>
                {/* </div>   */}
            </div>
        </Fragment>
    );
}

export default WelcomePage;