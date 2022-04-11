import React, { Fragment } from 'react'

import './LinksPage.css'

const LinksPage = ({ id }) => (
    <Fragment>
        <div className="links-page_container" id={id}>
            <div className="links-page_inside_container">
                <div className="links-card_container">
                    <div className="links_link-box_container" data-text="Spectrum">
                        <p>Spectrum filaments</p>
                    </div>

                    <div className="links_content_container">
                        <div className="links_content_inside_container links_content_inside_container_spectrumfilaments">
                            <p>
                                Big back-end system (developed using <span>Python</span>) that communicates with PLC controller by <span>TCP</span>. 
                                Developed and used for controlling <span>filament quality</span>. After entering an ID of filament spool 
                                (generated in Python), system searches for such spool in <span>PostgreSQL database </span> and shows it's 
                                characteristics that declare quality of the spool along with the raph that visualises it's quality.
                            </p>

                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://verify.spectrumfilaments.com/"
                                className="link_button link_spectrumfilaments">
                                    Visit Link
                            </a>
                        </div>                           
                    </div>
                </div>

                <div className="links-card_container">
                    <div className="links_link-box_container" data-text="RoboFriends">
                        <p>RoboFriends</p>
                    </div>

                    <div className="links_content_container">
                        <div className="links_content_inside_container">
                            <p>
                                Simple and one of my first <span>React.JS application</span>, that shows general way 
                                of <span>creating</span> React.JS <span>components</span>, has <span>searching functionality</span> and <span>scrolling window</span> component. 
                                Just a <span>practice</span> mixed with a <span>fun</span>, nothing more :)
                            </p>

                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://flisergio.github.io/robofriends/"
                                className="link_button link_robofriends">
                                    Visit Link
                            </a>
                        </div>                           
                    </div>
                </div>

                <div className="links-card_container">
                    <div className="links_link-box_container" data-text="FaceReco">
                        <p>Face Recognition</p>
                    </div>

                    <div className="links_content_container">
                        <div className="links_content_inside_container">
                            <p>
                                <span>Front-End React.JS</span> application connected with a <span>Back-End (Node & Express.js)</span>. 
                                Application shows how simple <span>functionality of login/register</span> works in <span>NodeJS</span> and it is connected with 
                                open-source <span>Machine Learning</span> API that makes face recognition possible (only for <span>one-face images</span>).
                            </p>

                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://flisergio.github.io/Face-Recognition-App/"
                                className="link_button link_facerecognition">
                                    Visit Link
                            </a>
                        </div>                           
                    </div>
                </div>

                <div className="links-card_container">
                    <div className="links_link-box_container" data-text="Covid Cases">
                        <p>Covid Cases</p>
                    </div>

                    <div className="links_content_container">
                        <div className="links_content_inside_container">
                            <p>
                                Simple <span>Static Web Page</span> that shows how <span>COVID-19 cases quantity</span> was changing in 2020. 
                                Created with <span>Vanilla JS</span>. Can be <span>run</span> only <span>locally</span> in browser.
                            </p>

                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://github.com/flisergio/covid-cases"
                                className="link_button link_facerecognition">
                                    Visit Link
                            </a>
                        </div>                           
                    </div>
                </div>

                <div className="links-card_container">
                    <div className="links_link-box_container" data-text="Cinema">
                        <p>Simple cinema system</p>
                    </div>

                    <div className="links_content_container">
                        <div className="links_content_inside_container">
                            <p>
                                <span>Back-End application</span>, which was a <span> university project</span> used for simple maintaining of 
                                the <span>cinema system</span>. It was developed by me and two other friends 
                                in <span>Java</span> on 2nd year of studies. Application is connected with a <span>MySQL</span> database. 
                                Needs Java to be installed for running the project.
                            </p>

                            <a 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                href="https://github.com/flisergio/CultureCenter"
                                className="link_button link_culturecenter">
                                    Visit Link
                            </a>
                        </div>  
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
)

export default LinksPage