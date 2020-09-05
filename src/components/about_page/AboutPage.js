import React, { Fragment } from 'react';

import './AboutPage.css';

import personalInfoPicture from "./images/personal-info.svg";
import educationPicture from "./images/education.svg";
import hobbiesPicture from "./images/hobbies.svg";

const AboutPage = ({ id }) => {
    return(
        <Fragment>
            <div className="about-page_container" id={id}>
                <div className="about-page_inside_container">
                    <div className="about-page_left_container">
                        <div className="about-page_card_container about-page_personal-info_container">
                            <div className="face face1">
                                <div className="content">
                                    <img 
                                        src={personalInfoPicture}
                                        className="img_about-page_card img_personal-info"
                                        alt="personal-info"
                                    />

                                    <h3>                                  
                                        Personal information
                                    </h3>
                                </div>
                            </div>

                            <div className="face face2">
                                <div className="content">
                                    <div className="personal-info personal-info_content">
                                        <p className="personal-info_name">
                                            My name is <span>Sergii Kobyliaiev</span>
                                        </p>

                                        <p className="personal-info_birthdate">
                                            I was born on <span>12/10/1999</span>
                                        </p>

                                        <p className="personal-info_birthplace">
                                            in <span>Odessa, Ukraine</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="about-page_card_container about-page_education_container">
                            <div className="face face1">
                                <div className="content">
                                    <img 
                                        src={educationPicture}
                                        className="img_about-page_card img_education"
                                        alt="education"
                                    />

                                    <h3>                                  
                                        Education
                                    </h3>
                                </div>
                            </div>

                            <div className="face face2">
                                <div className="content education_content">
                                    <div className="education-name">
                                        <p><span>Politechnika Krakowska</span> im. Tadeusza Koszciuszki</p>
                                    </div>

                                    <div className="education-info">
                                        <p>
                                            Specialization: <span>IT</span><br />
                                            Level: <span>Bachelor's</span>
                                        </p>
                                    </div>

                                    <div className="education-time">
                                        <p>Started in <br /><span>October, 2016</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-page_right_container">
                        <div className="about-page_card_container about-page_hobbies_container">
                            <div className="face face1">
                                <div className="content">
                                    <img 
                                        src={hobbiesPicture}
                                        className="img_about-page_card img_hobbies"
                                        alt="hobbies"
                                    />

                                    <h3 className="hobbies">                                  
                                        Hobbies
                                    </h3>
                                </div>
                            </div>

                            <div className="face face2">
                                <div className="hobbies_flexbox">
                                    <div className="hobbies-column">
                                        <div className="hobby-title">
                                            <p>Driving</p>
                                        </div>

                                        <div className="hobby-description">
                                            <p>I have driving license cat. B and enjoy car driving process</p>
                                        </div>
                                    </div>

                                    <div className="hobbies-column">
                                        <div className="hobby-title">
                                            <p>Music</p>
                                        </div>

                                        <div className="hobby-description">
                                            <p>Almost every process in my life is always surrounded by music</p>
                                        </div>
                                    </div>

                                    <div className="hobbies-column">
                                        <div className="hobby-title">
                                            <p>Sport</p>
                                        </div>

                                        <div className="hobby-description">
                                            <p>Besides going to the gym I love playing football or billiard with friends</p>
                                        </div>
                                    </div>

                                    <div className="hobbies-column">
                                        <div className="hobby-title">
                                            <p>Guitar</p>
                                        </div>

                                        <div className="hobby-description">
                                            <p>I often spend my free time playing simple songs on guitar</p>
                                        </div>
                                    </div>

                                    <div className="hobbies-column">
                                        <div className="hobby-title">
                                            <p>Travelling</p>
                                        </div>

                                        <div className="hobby-description">
                                            <p>I am really excited about travelling and visiting new places</p>
                                        </div>
                                    </div>

                                    <div className="hobbies-column">
                                        <div className="hobby-title">
                                            <p>Outdoor</p>
                                        </div>

                                        <div className="hobby-description">
                                            <p>I like any outdoor activities and prefer moving by bike when it is possible</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default AboutPage;