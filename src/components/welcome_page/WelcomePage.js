import React, { Fragment } from 'react';

import Particles from 'react-particles-js';
import Tilt from 'react-tilt';
import { Link, animateScroll as scroll } from "react-scroll";

import './WelcomePage.css';
import profilePicture from "./images/profile.JPG";

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
                        <p className="p_welcome-description">
                            Sit in sint dolor aliqua occaecat aliqua qui velit incididunt. Veniam consequat ad sit duis culpa ullamco fugiat ut dolor. Laboris anim enim id culpa Lorem commodo incididunt. Mollit tempor proident et duis eu culpa tempor dolor ullamco qui et quis anim laborum. Pariatur et amet sint Lorem sint laboris culpa occaecat elit. Irure ullamco cillum est id officia pariatur in nulla. Et non aliquip officia laboris aliqua nostrud consectetur incididunt ut proident.
                            Sit laborum est aliqua sunt fugiat ea enim aute excepteur laboris. Occaecat amet dolor sunt amet veniam irure proident. Deserunt duis dolore reprehenderit minim aute in do dolore ullamco Lorem nulla adipisicing dolor consectetur. Pariatur ad minim mollit aliquip. Commodo eiusmod quis quis cillum aliquip laboris elit consectetur. Magna nulla tempor ex nulla reprehenderit. Ut labore eu tempor fugiat occaecat laborum commodo.
                        </p>
                        <Link
                            className="link_about"
                            to="aboutpage"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}
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
                        <li><a href="https://facebook.com">
                            <Tilt className="icon_social-media_container br2 shadow-2" options={{ max : 35 }} style={{ height: 50, width: 60 }} >
                                <div className="Tilt-inner">
                                    <img 
                                        className="icon_social-media" 
                                        src={'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png'} 
                                        alt="facebook"
                                    />
                                </div>
                            </Tilt>
                        </a></li>
                        
                        <li><a href="https://facebook.com">
                            <Tilt className="icon_social-media_container br2 shadow-2" options={{ max : 35 }} style={{ height: 50, width: 60 }} >
                                <div className="Tilt-inner">
                                    <img 
                                        className="icon_social-media" 
                                        src={'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png'} 
                                        alt="instagram"
                                    />
                                </div>
                            </Tilt>
                        </a></li>

                        <li><a href="https://facebook.com">
                            <Tilt className="icon_social-media_container br2 shadow-2" options={{ max : 35 }} style={{ height: 50, width: 60 }} >
                                <div className="Tilt-inner">
                                    <img 
                                        className="icon_social-media" 
                                        src={'https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png'} 
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