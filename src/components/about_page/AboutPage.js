import React, { Fragment } from "react";

import "./AboutPage.css";
import { AboutPageEnum } from "./enums/AboutPageEnum";

import personalInfoPicture from "./images/personal-info.svg";
import educationPicture from "./images/education.svg";
import hobbiesPicture from "./images/hobbies.svg";

const AboutPage = ({ id }) => (
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

                <h3>{AboutPageEnum.PERSONAL.TITLE}</h3>
              </div>
            </div>

            <div className="face face2">
              <div className="content">
                <div className="personal-info personal-info_content">
                  <p className="personal-info_name">
                    {AboutPageEnum.PERSONAL.NAME_PREFIX}<span>{AboutPageEnum.PERSONAL.NAME}</span>
                  </p>

                  <p className="personal-info_birthdate">
                    {AboutPageEnum.PERSONAL.BORNDATE_PREFIX}<span>{AboutPageEnum.PERSONAL.BORNDATE}</span>
                  </p>

                  <p className="personal-info_birthplace">
                    {AboutPageEnum.PERSONAL.BORNPLACE_PREFIX}<span>{AboutPageEnum.PERSONAL.BORNPLACE}</span>
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

                <h3>{AboutPageEnum.EDUCATION.TITLE}</h3>
              </div>
            </div>

            <div className="face face2">
              <div className="content education_content">
                <div className="education-name">
                  <p>
                    <span>{AboutPageEnum.EDUCATION.UNIVERSITY}</span>{AboutPageEnum.EDUCATION.UNIVERSITY_PREFIX}
                  </p>
                </div>

                <div className="education-info">
                  <p>
                    {AboutPageEnum.EDUCATION.SPECIALIZATION_PREFIX}<span>{AboutPageEnum.EDUCATION.SPECIALIZATION}</span>
                    <br />
                    {AboutPageEnum.EDUCATION.LEVEL_PREFIX}<span>{AboutPageEnum.EDUCATION.LEVEL}</span>
                  </p>
                </div>

                <div className="education-time">
                  <p>
                    {AboutPageEnum.EDUCATION.START_PREFIX}<span>{AboutPageEnum.EDUCATION.START}</span>
                  </p>
                  <p>
                    {AboutPageEnum.EDUCATION.END_PREFIX}<span>{AboutPageEnum.EDUCATION.END}</span>
                  </p>
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

                <h3 className="hobbies">{AboutPageEnum.HOBBIES.TITLE}</h3>
              </div>
            </div>

            <div className="face face2">
              <div className="hobbies_flexbox">
                <div className="hobbies-column">
                  <div className="hobby-title">
                    <p>{AboutPageEnum.HOBBIES.DRIVING_TITLE}</p>
                  </div>

                  <div className="hobby-description">
                    <p>
                      {AboutPageEnum.HOBBIES.DRIVING_TEXT}
                    </p>
                  </div>
                </div>

                <div className="hobbies-column">
                  <div className="hobby-title">
                    <p>{AboutPageEnum.HOBBIES.MUSIC_TITLE}</p>
                  </div>

                  <div className="hobby-description">
                    <p>
                      {AboutPageEnum.HOBBIES.MUSIC_TEXT}
                    </p>
                  </div>
                </div>

                <div className="hobbies-column">
                  <div className="hobby-title">
                    <p>{AboutPageEnum.HOBBIES.SPORT_TITLE}</p>
                  </div>

                  <div className="hobby-description">
                    <p>
                      {AboutPageEnum.HOBBIES.SPORT_TEXT}
                    </p>
                  </div>
                </div>

                <div className="hobbies-column">
                  <div className="hobby-title">
                    <p>{AboutPageEnum.HOBBIES.GUITAR_TITLE}</p>
                  </div>

                  <div className="hobby-description">
                    <p>
                      {AboutPageEnum.HOBBIES.GUITAR_TEXT}
                    </p>
                  </div>
                </div>

                <div className="hobbies-column">
                  <div className="hobby-title">
                    <p>{AboutPageEnum.HOBBIES.TRAVEL_TITLE}</p>
                  </div>

                  <div className="hobby-description">
                    <p>
                      {AboutPageEnum.HOBBIES.TRAVEL_TEXT}
                    </p>
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

export default AboutPage;
