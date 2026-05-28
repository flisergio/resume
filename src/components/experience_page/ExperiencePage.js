import React, { Fragment } from "react";
import parse from "html-react-parser";

import "./ExperiencePage.css";
import { ExperiencePageEnum } from "./enums/ExperiencePageEnum";

// Order matches the chronological order of roles. The window class is a
// per-card hook (e.g. `experience-third-window_container` carries the
// `margin-top: 5vh` that breaks SAP onto a new layout row). Adding a new role
// is a one-line change in this array plus a new entry in ExperiencePageEnum.
const COMPANIES = [
  { key: "MORA", windowClass: "experience-first-window_container" },
  { key: "ING", windowClass: "experience-second-window_container" },
  { key: "SAP", windowClass: "experience-third-window_container" },
  { key: "EPAM", windowClass: "experience-fourth-window_container" },
];

const ExperiencePage = ({ id }) => (
  <Fragment>
    <div
      className="experience-page_container"
      id={id}
      data-testid="ExperiencePage"
    >
      <div className="experience-page_inside_container">
        {COMPANIES.map(({ key, windowClass }) => {
          const company = ExperiencePageEnum[key];
          return (
            <div
              key={key}
              className={`experience-window_container ${windowClass}`}
            >
              <div className="experience-window_company-container">
                <h1 className="company-title">{company.TITLE}</h1>

                <p className="company-location">{company.LOCATION}</p>

                <p className="company-description">
                  {parse(company.DESCRIPTION)}
                </p>
              </div>

              <div className="experience-window_position-container">
                <h3 className="position-name">{company.POSITION}</h3>

                <p className="position-dates">{company.PERIOD}</p>

                {Object.values(company.TASKS).map((task, taskIndex) => (
                  <div
                    className="experience-window_task-container"
                    key={taskIndex}
                  >
                    <p>{parse(task)}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </Fragment>
);

export default ExperiencePage;
