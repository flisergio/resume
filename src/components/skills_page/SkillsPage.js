import React, { Fragment } from 'react';

import './SkillsPage.css';

const SkillsPage = ({ id }) => {
    return(
        <Fragment>
            <div className="skills-page_container" id={id}>
                <div className="skills-page_inside_container">
                    <div className="skills-window_container front-end-skills-window_container">
                        <h1>Front-End Skills</h1>
                        <p>
                            Front-End development is the most exciting IT sphere for me. I enjoy creating and designing
                            the web pages and applications. I have a good knowledge of HTML + CSS and can easily manipulate
                            DOM with JavaScript. Besides that I am familiar with advanced JS concepts, jQuery and Bootstrap. 
                            I started learning of React.JS in March 2020 as self-development and when I tried it I really 
                            loved how it works. Now I can create some simple web applications and I am always ready to conribute 
                            in some big projects.
                        </p>

                        <div className="skill_container skill-html-css_container">
                            <div className="skill-label_container">
                                <h3>HTML5 & CSS3</h3>
                                <span className="skill-percentage">90%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-html-css-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-js_container">
                            <div className="skill-label_container">
                                <h3>JavaScript</h3>
                                <span className="skill-percentage">80%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-js-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-lit-wc_container">
                            <div className="skill-label_container">
                                <h3>Lit Elements & WebComponents</h3>
                                <span className="skill-percentage">70%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-lit-wc-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-react_container">
                            <div className="skill-label_container">
                                <h3>React.JS</h3>
                                <span className="skill-percentage">65%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-react-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-backbone_container">
                            <div className="skill-label_container">
                                <h3>Backbone & Marionette.js</h3>
                                <span className="skill-percentage">50%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-backbone-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-redux_container">
                            <div className="skill-label_container">
                                <h3>Redux</h3>
                                <span className="skill-percentage">30%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-redux-progress_container"></div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-window_container back-end-skills-window_container">
                        <h1>Back-End Skills</h1>
                        <p>
                            The most of my Back-End development skills are a part of a Full-Stack developer tasks. I have a knowledge 
                            how Express.js and Node.js communicate with Front-End part. Also I know how to connect PostgreSQL databases 
                            so it works with React application. About two years ago I was learning Python in Machine Learning and Artificial 
                            Intelligence sphere as a hobby. Java and C++ were the most important programming languages on the first and 
                            second years of studying, but I don't have big experience in that languages.
                        </p>

                        <div className="skill_container skill-node-express_container">
                            <div className="skill-label_container">
                                <h3>Node & Express.js</h3>
                                <span className="skill-percentage">55%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-node-express-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-python_container">
                            <div className="skill-label_container">
                                <h3>Python & ML + AI</h3>
                                <span className="skill-percentage">40%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-python-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-databases_container">
                            <div className="skill-label_container">
                                <h3>Databases & PostgreSQL</h3>
                                <span className="skill-percentage">40%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-databases-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-java_container">
                            <div className="skill-label_container">
                                <h3>Java</h3>
                                <span className="skill-percentage">25%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-java-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-cpp_container">
                            <div className="skill-label_container">
                                <h3>C++</h3>
                                <span className="skill-percentage">20%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-cpp-progress_container"></div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-window_container other-skills-window_container">
                        <h1>Other Skills</h1>
                        <p>
                            When it goes to other programming skills I know how to use Git Bash Terminal to connect the project 
                            to a GitHub repository and also how to conribute in an open-source projects. I have an experience in 
                            WordPress and I know how to create a template, which I can maintain in WordPress, from-scratch. I know 
                            all the basics of Microsoft Word, Excel and PowerPoint, while also familiar with MS Project. I have a 
                            knowledge about how asynchronous programming work and what is JSON format. Also I know how to develop 
                            web application with Heroku.
                        </p>

                        <div className="skill_container skill-git_container">
                            <div className="skill-label_container">
                                <h3>Git Bash, Git & GitLab</h3>
                                <span className="skill-percentage">80%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-git-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-api_container">
                            <div className="skill-label_container">
                                <h3>JSON & API Communication</h3>
                                <span className="skill-percentage">75%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-api-progress_container"></div>
                            </div>
                        </div>


                        <div className="skill_container skill-wordpress_container">
                            <div className="skill-label_container">
                                <h3>WordPress</h3>
                                <span className="skill-percentage">70%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-wordpress-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-ms_container">
                            <div className="skill-label_container">
                                <h3>Word & Excel & PowerPoint</h3>
                                <span className="skill-percentage">60%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-ms-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-server_container">
                            <div className="skill-label_container">
                                <h3>HTTP, AJAX & Server Communication</h3>
                                <span className="skill-percentage">50%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-server-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-heroku_container">
                            <div className="skill-label_container">
                                <h3>Heroku Deployment</h3>
                                <span className="skill-percentage">40%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-heroku-progress_container"></div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-window_container language-skills-window_container">
                        <h1>Languages</h1>
                        <p>
                            I was born in Ukraine, so my main (native) languages are Ukranian and Russian. I live in Poland since 
                            October 2016, so Polish language is on almost native level. And I truly love an English language, 
                            which I learn since 10 years old. Currently I have a C1 level of English.
                        </p>

                        <div className="skill_container skill-ua_container">
                            <div className="skill-label_container">
                                <h3>Ukranian</h3>
                                <span className="skill-percentage">Native</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-ua-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-rus_container">
                            <div className="skill-label_container">
                                <h3>Russian</h3>
                                <span className="skill-percentage">Native</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-rus-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-pl_container">
                            <div className="skill-label_container">
                                <h3>Polish</h3>
                                <span className="skill-percentage">Fluent</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-pl-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-en_container">
                            <div className="skill-label_container">
                                <h3>English</h3>
                                <span className="skill-percentage">Advanced</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-en-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-de_container">
                            <div className="skill-label_container">
                                <h3>Deutsch</h3>
                                <span className="skill-percentage">Beginner</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-de-progress_container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SkillsPage;