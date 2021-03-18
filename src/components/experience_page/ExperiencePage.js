import React, { Fragment } from 'react';

import './ExperiencePage.css';

const ExperiencePage = ({ id }) => {
    return(
        <Fragment>
            <div className="experience-page_container" id={id}>
                <div className="experience-page_inside_container">
                    <div className="experience-window_container experience-first-window_container">
                        <div className="experience-window_company-container">
                            <h1 className="company-title">Mora-Solutions<span>Sp. z o.o.</span></h1>
                            <p className="company-location">Kraków, Poland</p>
                            <p className="company-description">
                                A small company that <span>builds machines</span> and <span>creates IT systems</span> from scratch. 
                                The <span>main area</span> of operation is <span>3D-printing</span>, so the large part of produced 
                                items are machines used in 3D-printing for companies that work in this sphere.
                            </p>
                        </div>

                        <div className="experience-window_position-container">
                            <h3 className="position-name">Intern Programmer</h3>
                            <p className="position-dates">Oct 2018 - Oct 2019</p>

                            <div className="experience-window_task-container">
                                <p>
                                    Developing <span>web pages</span> for selected products, systems, as also help in creating of 
                                    company's web page (using <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>). 
                                    Integration and maintaining created from scratch web pages in <span>WordPress</span>.
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
                                    (<span>PostgreSQL</span> and <span>MySQL</span>).
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="experience-window_container experience-second-window_container">
                        <div className="experience-window_company-container">
                            <h1 className="company-title">ING Bank Śląski</h1>
                            <p className="company-location">Katowice, Poland</p>
                            <p className="company-description">
                                ING Bank is a <span>Dutch</span> multinational bank, headquartered in <span>Amsterdam, Netherlands</span>.
                                With total assets of <span>US$1.1 trillion</span>, it is one of the biggest banks in the world, and consistently 
                                ranks among the <span>top 30</span> largest banks globally. It is among the <span>top ten</span> in the list of 
                                largest European companies by revenue. It is also one of the most popular banks in <span>Poland</span>. Total 
                                number of <span>employees</span> is about <span>60 000</span> and total number of <span>clients</span> is more 
                                than <span>40 millions</span> in more than <span>40 countries</span>.
                            </p>
                        </div>

                        <div className="experience-window_position-container">
                            <h3 className="position-name">Junior Front-End Developer</h3>
                            <p className="position-dates">Nov 2020 - currently</p>

                            <div className="experience-window_task-container">
                                <p>
                                    Maintaining of company's <span>mobile banking system</span>, reworking and adding functionality 
                                    for <span>loan</span>, <span>credit cards</span> and <span>insurance</span> online products.                                   
                                </p>
                            </div>

                            <div className="experience-window_task-container">
                                <p>
                                    Developing new <span>Front-End features</span> and 
                                    reworking above products functionality into <span>web components</span> with <span>LitElements</span>.
                                </p>
                            </div>

                            <div className="experience-window_task-container">
                                <p>
                                    Creating <span>unit tests</span> for created software.
                                </p>
                            </div>

                            <div className="experience-window_task-container">
                                <p>
                                    <span>Communication</span> with Back-End <span>APIs</span> and <span>requests</span>.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* <div className="experience-window_container experience-second-window_container">
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
                    </div> */}
                </div>
            </div>
        </Fragment>
    );
}

export default ExperiencePage;