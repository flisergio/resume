import React, { Fragment } from 'react';

import './ExperiencePage.css';

const ExperiencePage = ({ id }) => {
    return(
        <Fragment>
            <div className="experience-page_container" id={id}>
                <div className="experience-page_inside_container">
                    <div className="experience-window_container experience-first-window_container">
                        <div className="experience-window_company-container">
                            <h1 className="company-title">Mora-Solutions<span>sp z o.o.</span></h1>
                            <p className="company-location">Kraków</p>
                            <p className="company-description">
                                A small company that build machines and creates IT systems from scratch. 
                                The main area of operation is 3D-printing, so the large part of produced 
                                items are machines used in 3D-printing for companies specializing in this.
                            </p>
                        </div>

                        <div className="experience-window_position-container">
                            <h3 className="position-name">Intern Programmer</h3>
                            <p className="position-dates">Oct 2018 - Sep 2019</p>

                            <div className="experience-window_task-container">
                                <p>
                                    Developing <span>web pages</span> for selected products, systems, as also help in creating of 
                                    company's web page (using <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>). 
                                    Integration and maintaining created from scratch web pages in <span>Wordpress</span>.
                                </p>
                            </div>

                            <div className="experience-window_task-container">
                                <p>
                                    Developing software and back-end functionality for IT systems 
                                    (mainly in <span>Python</span> including <span>Machine 
                                    Learning</span> and <span>Artificial Intelligence</span> sphere).
                                </p>
                            </div>

                            <div className="experience-window_task-container">
                                <p>
                                    Creating and maintaining <span>databases</span> for created products 
                                    (<span>MySQL</span> and <span>PostgreSQL</span>).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="experience-window_container experience-second-window_container">
                        <div className="experience-window_company-container">
                            <h1 className="company-title">Capgemini</h1>
                            <p className="company-location">Kraków</p>
                            <p className="company-description">
                                Global leader in consulting, digital transformation, technology and engineering services. 
                                It is headquartered in Paris, France. Capgemini has over 270,000 employees in over 50 countries.
                            </p>
                        </div>

                        <div className="experience-window_position-container">
                            <h3 className="position-name">Intern Front-End Developer</h3>
                            <p className="position-dates">Nov 2019 - Feb 2020</p>

                            <div className="experience-window_task-container">
                                <p>
                                    Creating <span>static web pages</span> using <span>HTML</span>, <span>CSS </span>
                                    and <span>JavaScript</span>.
                                </p>
                            </div>

                            <div className="experience-window_task-container">
                                <p>
                                    <span>Learning</span> how does the <span>working process</span> in a big software team look like.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ExperiencePage;