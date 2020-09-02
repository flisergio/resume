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
                            Sit in sint dolor aliqua occaecat aliqua qui velit incididunt. Veniam consequat ad sit duis 
                            culpa ullamco fugiat ut dolor. Laboris anim enim id culpa Lorem commodo incididunt. Mollit 
                            tempor proident et duis eu culpa tempor dolor ullamco qui et quis anim laborum. Pariatur et 
                            amet sint Lorem sint laboris culpa occaecat elit. Irure ullamco cillum est id officia pariatur 
                            in nulla. Et non aliquip officia laboris aliqua nostrud consectetur incididunt ut proident.
                        </p>

                        <div className="skill_container skill-html_container">
                            <div className="skill-label_container">
                                <h3>HTML5</h3>
                                <span className="skill-percentage">90%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-html-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-css_container">
                            <div className="skill-label_container">
                                <h3>CSS3</h3>
                                <span class="skill-percentage">75%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-css-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-js_container">
                            <div className="skill-label_container">
                                <h3>JavaScript</h3>
                                <span class="skill-percentage">60%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-js-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-react_container">
                            <div className="skill-label_container">
                                <h3>React</h3>
                                <span class="skill-percentage">60%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-react-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-redux_container">
                            <div className="skill-label_container">
                                <h3>Redux</h3>
                                <span class="skill-percentage">30%</span>

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
                            Sit in sint dolor aliqua occaecat aliqua qui velit incididunt. Veniam consequat ad sit duis 
                            culpa ullamco fugiat ut dolor. Laboris anim enim id culpa Lorem commodo incididunt. Mollit 
                            tempor proident et duis eu culpa tempor dolor ullamco qui et quis anim laborum. Pariatur et 
                            amet sint Lorem sint laboris culpa occaecat elit. Irure ullamco cillum est id officia pariatur 
                            in nulla. Et non aliquip officia laboris aliqua nostrud consectetur incididunt ut proident.
                        </p>

                        <div className="skill_container skill-node_container">
                            <div className="skill-label_container">
                                <h3>Node.js</h3>
                                <span class="skill-percentage">60%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-node-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-express_container">
                            <div className="skill-label_container">
                                <h3>Express.js</h3>
                                <span class="skill-percentage">60%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-express-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-databases_container">
                            <div className="skill-label_container">
                                <h3>Databases & PostgreSQL</h3>
                                <span class="skill-percentage">50%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-databases-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-python_container">
                            <div className="skill-label_container">
                                <h3>Python</h3>
                                <span class="skill-percentage">30%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-python-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-java-cpp_container">
                            <div className="skill-label_container">
                                <h3>Java & C++</h3>
                                <span class="skill-percentage">10%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-java-cpp-progress_container"></div>
                            </div>
                        </div>
                    </div>

                    <div className="skills-window_container other-skills-window_container">
                        <h1>Other Skills</h1>
                        <p>
                            Sit in sint dolor aliqua occaecat aliqua qui velit incididunt. Veniam consequat ad sit duis 
                            culpa ullamco fugiat ut dolor. Laboris anim enim id culpa Lorem commodo incididunt. Mollit 
                            tempor proident et duis eu culpa tempor dolor ullamco qui et quis anim laborum. Pariatur et 
                            amet sint Lorem sint laboris culpa occaecat elit. Irure ullamco cillum est id officia pariatur 
                            in nulla. Et non aliquip officia laboris aliqua nostrud consectetur incididunt ut proident.
                        </p>

                        <div className="skill_container skill-git_container">
                            <div className="skill-label_container">
                                <h3>Git Bash, Git & GitHub</h3>
                                <span class="skill-percentage">70%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-git-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-wordpress_container">
                            <div className="skill-label_container">
                                <h3>WordPress</h3>
                                <span class="skill-percentage">60%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-wordpress-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-ms_container">
                            <div className="skill-label_container">
                                <h3>Word & Excel & PowerPoint</h3>
                                <span class="skill-percentage">50%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-ms-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-async_container">
                            <div className="skill-label_container">
                                <h3>HTTP & JSON & AJAX</h3>
                                <span class="skill-percentage">40%</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-async-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-heroku_container">
                            <div className="skill-label_container">
                                <h3>Heroku Deployment</h3>
                                <span class="skill-percentage">40%</span>

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
                            Sit in sint dolor aliqua occaecat aliqua qui velit incididunt. Veniam consequat ad sit duis 
                            culpa ullamco fugiat ut dolor. Laboris anim enim id culpa Lorem commodo incididunt. Mollit 
                            tempor proident et duis eu culpa tempor dolor ullamco qui et quis anim laborum. Pariatur et 
                            amet sint Lorem sint laboris culpa occaecat elit. Irure ullamco cillum est id officia pariatur 
                            in nulla. Et non aliquip officia laboris aliqua nostrud consectetur incididunt ut proident.
                        </p>

                        <div className="skill_container skill-ua_container">
                            <div className="skill-label_container">
                                <h3>Ukranian</h3>
                                <span class="skill-percentage">Native</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-ua-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-rus_container">
                            <div className="skill-label_container">
                                <h3>Russian</h3>
                                <span class="skill-percentage">Native</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-rus-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-pl_container">
                            <div className="skill-label_container">
                                <h3>Polish</h3>
                                <span class="skill-percentage">Fluent</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-pl-progress_container"></div>
                            </div>
                        </div>

                        <div className="skill_container skill-en_container">
                            <div className="skill-label_container">
                                <h3>English</h3>
                                <span class="skill-percentage">Advanced</span>

                                <div style={{clear:'both'}}></div>
                            </div>

                            <div className="skill-bar_container">
                                <div className="skill-progress_container skill-en-progress_container"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default SkillsPage;