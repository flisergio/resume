import React, { Fragment } from "react";
import parse from 'html-react-parser';

import "./ExperiencePage.css";
import { ExperiencePageEnum } from "./enums/ExperiencePageEnum";

const ExperiencePage = ({ id }) => (
  <Fragment>
    <div className="experience-page_container" id={id} data-testid="ExperiencePage">
      <div className="experience-page_inside_container">
        <div className="experience-window_container experience-first-window_container">
          <div className="experience-window_company-container">
            <h1 className="company-title">{ExperiencePageEnum.MORA.TITLE}</h1>

            <p className="company-location">
              {ExperiencePageEnum.MORA.LOCATION}
            </p>

            <p className="company-description">
              {parse(ExperiencePageEnum.MORA.DECRIPTION)}
            </p>
          </div>

          <div className="experience-window_position-container">
            <h3 className="position-name">
              {ExperiencePageEnum.MORA.POSITION}
            </h3>

            <p className="position-dates">{ExperiencePageEnum.MORA.PERIOD}</p>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.MORA.TASKS.T1)}</p>
            </div>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.MORA.TASKS.T2)}</p>
            </div>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.MORA.TASKS.T3)}</p>
            </div>
          </div>
        </div>

        <div className="experience-window_container experience-second-window_container">
          <div className="experience-window_company-container">
            <h1 className="company-title">{ExperiencePageEnum.ING.TITLE}</h1>

            <p className="company-location">
              {ExperiencePageEnum.ING.LOCATION}
            </p>

            <p className="company-description">
              {parse(ExperiencePageEnum.ING.DECRIPTION)}
            </p>
          </div>

          <div className="experience-window_position-container">
            <h3 className="position-name">{ExperiencePageEnum.ING.POSITION}</h3>
            <p className="position-dates">{ExperiencePageEnum.ING.PERIOD}</p>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.ING.TASKS.T1)}</p>
            </div>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.ING.TASKS.T2)}</p>
            </div>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.ING.TASKS.T3)}</p>
            </div>
          </div>
        </div>

        <div className="experience-window_container experience-third-window_container">
          <div className="experience-window_company-container">
            <h1 className="company-title">{ExperiencePageEnum.SAP.TITLE}</h1>

            <p className="company-location">
              {ExperiencePageEnum.SAP.LOCATION}
            </p>

            <p className="company-description">
              {parse(ExperiencePageEnum.SAP.DECRIPTION)}
            </p>
          </div>

          <div className="experience-window_position-container">
            <h3 className="position-name">{ExperiencePageEnum.SAP.POSITION}</h3>

            <p className="position-dates">{ExperiencePageEnum.SAP.PERIOD}</p>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.SAP.TASKS.T1)}</p>
            </div>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.SAP.TASKS.T2)}</p>
            </div>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.SAP.TASKS.T3)}</p>
            </div>

            <div className="experience-window_task-container">
              <p>{parse(ExperiencePageEnum.SAP.TASKS.T4)}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default ExperiencePage;
