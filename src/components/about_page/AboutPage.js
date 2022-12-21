/* eslint-disable jsx-a11y/aria-role */
import React, { Fragment } from "react";
import parse from "html-react-parser";

import "./AboutPage.css";
import { AboutPageEnum } from "./enums/AboutPageEnum";

import personalInfoPicture from "./images/personal-info.svg";
import educationPicture from "./images/education.svg";
import hobbiesPicture from "./images/hobbies.svg";

const AboutPage = ({ id }) => (
  <Fragment>
    <div className="about-page_container" id={id} data-testid="AboutPage">
      <div
        className="about-page_inside_container"
        data-testid="AboutPage_InnerContainer"
      >
        <div
          className="about-page_left_container"
          data-testid="AboutPage_LeftContainer"
        >
          <div
            className="about-page_card_container about-page_personal-info_container"
            data-testid="AboutPage_CardContainer"
            role="PersonalInfoContainer"
          >
            <div className="face face1">
              <div
                className="content"
                data-testid="AboutPage_Card_Content"
                role="PersonalInfoContent"
              >
                <img
                  src={personalInfoPicture}
                  className="img_about-page_card img_personal-info"
                  alt="personal-info"
                  role="PersonalInfoPicture"
                />

                <h3 role="PersonalInfoTitle">{AboutPageEnum.PERSONAL.TITLE}</h3>
              </div>
            </div>

            <div className="face face2">
              <div
                className="content"
                data-testid="AboutPage_Card_Content2"
                role="PersonalInfoContent2"
              >
                <div className="personal-info personal-info_content">
                  <p className="personal-info_name" role="PersonalInfoName">
                    {parse(AboutPageEnum.PERSONAL.NAME)}
                  </p>

                  <p
                    className="personal-info_birthdate"
                    role="PersonalInfoBirthDate"
                  >
                    {parse(AboutPageEnum.PERSONAL.BORNDATE)}
                  </p>

                  <p
                    className="personal-info_birthplace"
                    role="PersonalInfoBirthPlace"
                  >
                    {parse(AboutPageEnum.PERSONAL.BORNPLACE)}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className="about-page_card_container about-page_education_container"
            data-testid="AboutPage_CardContainer"
            role="EducationContainer"
          >
            <div className="face face1">
              <div
                className="content"
                data-testid="AboutPage_Card_Content"
                role="EducationContent"
              >
                <img
                  src={educationPicture}
                  className="img_about-page_card img_education"
                  alt="education"
                  role="EducationPicture"
                />

                <h3 role="EducationTitle">{AboutPageEnum.EDUCATION.TITLE}</h3>
              </div>
            </div>

            <div className="face face2">
              <div
                className="content education_content"
                data-testid="AboutPage_Card_Content2"
                role="EducationContent2"
              >
                <div className="education-name" role="EducationName">
                  <p>{parse(AboutPageEnum.EDUCATION.UNIVERSITY)}</p>
                </div>

                <div className="education-info" role="EducationInfo">
                  <p>
                    {parse(AboutPageEnum.EDUCATION.SPECIALIZATION)}
                    <br />
                    {parse(AboutPageEnum.EDUCATION.LEVEL)}
                  </p>
                </div>

                <div className="education-time" role="EducationTime">
                  <p>{parse(AboutPageEnum.EDUCATION.START)}</p>

                  <p>{parse(AboutPageEnum.EDUCATION.END)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          className="about-page_right_container"
          data-testid="AboutPage_RightContainer"
        >
          <div
            className="about-page_card_container about-page_hobbies_container"
            data-testid="AboutPage_CardContainer"
            role="HobbiesContainer"
          >
            <div className="face face1">
              <div
                className="content"
                data-testid="AboutPage_Card_Content"
                role="HobbiesContent"
              >
                <img
                  src={hobbiesPicture}
                  className="img_about-page_card img_hobbies"
                  alt="hobbies"
                  role="HobbiesPicture"
                />

                <h3 className="hobbies" role="HobbiesTitle">
                  {AboutPageEnum.HOBBIES.TITLE}
                </h3>
              </div>
            </div>

            <div className="face face2">
              <div
                className="hobbies_flexbox"
                data-testid="AboutPage_Card_Content2"
                role="HobbiesContent2"
              >
                <div
                  className="hobbies-column"
                  data-testid="AboutPage_HobbiesColumn"
                >
                  <div
                    className="hobby-title"
                    data-testid="AboutPage_HobbiesTitle"
                  >
                    <p>{AboutPageEnum.HOBBIES.DRIVING_TITLE}</p>
                  </div>

                  <div
                    className="hobby-description"
                    data-testid="AboutPage_HobbiesDescription"
                  >
                    <p>{AboutPageEnum.HOBBIES.DRIVING_TEXT}</p>
                  </div>
                </div>

                <div
                  className="hobbies-column"
                  data-testid="AboutPage_HobbiesColumn"
                >
                  <div
                    className="hobby-title"
                    data-testid="AboutPage_HobbiesTitle"
                  >
                    <p>{AboutPageEnum.HOBBIES.MUSIC_TITLE}</p>
                  </div>

                  <div
                    className="hobby-description"
                    data-testid="AboutPage_HobbiesDescription"
                  >
                    <p>{AboutPageEnum.HOBBIES.MUSIC_TEXT}</p>
                  </div>
                </div>

                <div
                  className="hobbies-column"
                  data-testid="AboutPage_HobbiesColumn"
                >
                  <div
                    className="hobby-title"
                    data-testid="AboutPage_HobbiesTitle"
                  >
                    <p>{AboutPageEnum.HOBBIES.SPORT_TITLE}</p>
                  </div>

                  <div
                    className="hobby-description"
                    data-testid="AboutPage_HobbiesDescription"
                  >
                    <p>{AboutPageEnum.HOBBIES.SPORT_TEXT}</p>
                  </div>
                </div>

                <div
                  className="hobbies-column"
                  data-testid="AboutPage_HobbiesColumn"
                >
                  <div
                    className="hobby-title"
                    data-testid="AboutPage_HobbiesTitle"
                  >
                    <p>{AboutPageEnum.HOBBIES.GUITAR_TITLE}</p>
                  </div>

                  <div
                    className="hobby-description"
                    data-testid="AboutPage_HobbiesDescription"
                  >
                    <p>{AboutPageEnum.HOBBIES.GUITAR_TEXT}</p>
                  </div>
                </div>

                <div
                  className="hobbies-column"
                  data-testid="AboutPage_HobbiesColumn"
                >
                  <div
                    className="hobby-title"
                    data-testid="AboutPage_HobbiesTitle"
                  >
                    <p>{AboutPageEnum.HOBBIES.TRAVEL_TITLE}</p>
                  </div>

                  <div
                    className="hobby-description"
                    data-testid="AboutPage_HobbiesDescription"
                  >
                    <p>{AboutPageEnum.HOBBIES.TRAVEL_TEXT}</p>
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
