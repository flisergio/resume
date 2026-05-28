/* eslint-disable jsx-a11y/aria-role */
import React, { Fragment } from "react";
import parse from "html-react-parser";

import "./SkillsPage.css";
import { SkillsPageEnum } from "./enums/SkillsPageEnum";

const SkillsPage = ({ id }) => (
  <Fragment>
    <div className="skills-page_container" id={id} data-testid="SkillsPage">
      <div className="skills-page_inside_container">
        <div
          className="skills-window_container front-end-skills-window_container"
          data-testid="SkillsPage_WindowContainer"
          role="FrontEndSkillsContainer"
        >
          <h1 role="FrontEndSkillsMainTitle">
            {SkillsPageEnum.FRONTEND.TITLE}
          </h1>
          <p role="FrontEndSkillsMainText">{parse(SkillsPageEnum.FRONTEND.TEXT)}</p>

          <div
            className="skill_container skill-js_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnum.FRONTEND.JSTS_TITLE}
              </h3>


              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-js-progress_container"
                role="FrontEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-react_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnum.FRONTEND.REACT_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-react-progress_container"
                role="FrontEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-sapui5_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnum.FRONTEND.UI5_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-sapui5-progress_container"
                role="FrontEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-ts_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnum.FRONTEND.TS_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-ts-progress_container"
                role="FrontEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-css_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnum.FRONTEND.CSS_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-css-progress_container"
                role="FrontEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-wc_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnum.FRONTEND.WC_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-wc-progress_container"
                role="FrontEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-bundlers_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnum.FRONTEND.BUNDLERS_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-bundlers-progress_container"
                role="FrontEndSkillProgress"
              ></div>
            </div>
          </div>
        </div>

        <div
          className="skills-window_container back-end-skills-window_container"
          data-testid="SkillsPage_WindowContainer"
          role="BackEndSkillsContainer"
        >
          <h1 role="BackEndSkillsMainTitle">
            {SkillsPageEnum.BACKEND.TITLE}
          </h1>
          <p role="BackEndSkillsMainText">{parse(SkillsPageEnum.BACKEND.TEXT)}</p>

          <div
            className="skill_container skill-capbtp_container"
            data-testid="SkillsPage_BackEndSkillContainer"
          >
            <div className="skill-label_container" role="BackEndSkillLabel">
              <h3 role="BackEndSkillTitle">
                {SkillsPageEnum.BACKEND.CAPBTP_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="BackEndSkillBar">
              <div
                className="skill-progress_container skill-capbtp-progress_container"
                role="BackEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-node_container"
            data-testid="SkillsPage_BackEndSkillContainer"
          >
            <div className="skill-label_container" role="BackEndSkillLabel">
              <h3 role="BackEndSkillTitle">
                {SkillsPageEnum.BACKEND.NODE_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="BackEndSkillBar">
              <div
                className="skill-progress_container skill-node-progress_container"
                role="BackEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-api_container"
            data-testid="SkillsPage_BackEndSkillContainer"
          >
            <div className="skill-label_container" role="BackEndSkillLabel">
              <h3 role="BackEndSkillTitle">
                {SkillsPageEnum.BACKEND.API_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="BackEndSkillBar">
              <div
                className="skill-progress_container skill-api-progress_container"
                role="BackEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-cds_container"
            data-testid="SkillsPage_BackEndSkillContainer"
          >
            <div className="skill-label_container" role="BackEndSkillLabel">
              <h3 role="BackEndSkillTitle">
                {SkillsPageEnum.BACKEND.CDS_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="BackEndSkillBar">
              <div
                className="skill-progress_container skill-cds-progress_container"
                role="BackEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-db_container"
            data-testid="SkillsPage_BackEndSkillContainer"
          >
            <div className="skill-label_container" role="BackEndSkillLabel">
              <h3 role="BackEndSkillTitle">
                {SkillsPageEnum.BACKEND.DB_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="BackEndSkillBar">
              <div
                className="skill-progress_container skill-db-progress_container"
                role="BackEndSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-python_container"
            data-testid="SkillsPage_BackEndSkillContainer"
          >
            <div className="skill-label_container" role="BackEndSkillLabel">
              <h3 role="BackEndSkillTitle">
                {SkillsPageEnum.BACKEND.PYTHON_TITLE}
              </h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="BackEndSkillBar">
              <div
                className="skill-progress_container skill-python-progress_container"
                role="BackEndSkillProgress"
              ></div>
            </div>
          </div>
        </div>

        <div
          className="skills-window_container other-skills-window_container"
          data-testid="SkillsPage_WindowContainer"
          role="OtherSkillsContainer"
        >
          <h1 role="OtherSkillsMainTitle">{SkillsPageEnum.OTHER.TITLE}</h1>
          <p role="OtherSkillsMainText">{parse(SkillsPageEnum.OTHER.TEXT)}</p>

          <div
            className="skill_container skill-git_container"
            data-testid="SkillsPage_OtherSkillContainer"
          >
            <div className="skill-label_container" role="OtherSkillLabel">
              <h3 role="OtherSkillTitle">{SkillsPageEnum.OTHER.GIT_TITLE}</h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="OtherSkillBar">
              <div
                className="skill-progress_container skill-git-progress_container"
                role="OtherSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-agile"
            data-testid="SkillsPage_OtherSkillContainer"
          >
            <div className="skill-label_container" role="OtherSkillLabel">
              <h3 role="OtherSkillTitle">{SkillsPageEnum.OTHER.AGILE_TITLE}</h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="OtherSkillBar">
              <div
                className="skill-progress_container skill-agile-progress_container"
                role="OtherSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-unit"
            data-testid="SkillsPage_OtherSkillContainer"
          >
            <div className="skill-label_container" role="OtherSkillLabel">
              <h3 role="OtherSkillTitle">{SkillsPageEnum.OTHER.UNIT_TITLE}</h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="OtherSkillBar">
              <div
                className="skill-progress_container skill-unit-progress_container"
                role="OtherSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-genai"
            data-testid="SkillsPage_OtherSkillContainer"
          >
            <div className="skill-label_container" role="OtherSkillLabel">
              <h3 role="OtherSkillTitle">{SkillsPageEnum.OTHER.GENAI_TITLE}</h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="OtherSkillBar">
              <div
                className="skill-progress_container skill-genai-progress_container"
                role="OtherSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-security"
            data-testid="SkillsPage_OtherSkillContainer"
          >
            <div className="skill-label_container" role="OtherSkillLabel">
              <h3 role="OtherSkillTitle">{SkillsPageEnum.OTHER.SECURITY_TITLE}</h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="OtherSkillBar">
              <div
                className="skill-progress_container skill-security-progress_container"
                role="OtherSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-cicd"
            data-testid="SkillsPage_OtherSkillContainer"
          >
            <div className="skill-label_container" role="OtherSkillLabel">
              <h3 role="OtherSkillTitle">{SkillsPageEnum.OTHER.CICD_TITLE}</h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="OtherSkillBar">
              <div
                className="skill-progress_container skill-cicd-progress_container"
                role="OtherSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-kub"
            data-testid="SkillsPage_OtherSkillContainer"
          >
            <div className="skill-label_container" role="OtherSkillLabel">
              <h3 role="OtherSkillTitle">{SkillsPageEnum.OTHER.KUB_TITLE}</h3>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="OtherSkillBar">
              <div
                className="skill-progress_container skill-kub-progress_container"
                role="OtherSkillProgress"
              ></div>
            </div>
          </div>
        </div>

        <div
          className="skills-window_container language-skills-window_container"
          data-testid="SkillsPage_WindowContainer"
          role="LanguageSkillsContainer"
        >
          <h1 role="LanguageSkillsMainTitle">{SkillsPageEnum.LANG.TITLE}</h1>
          <p className="language-skills-text" role="LanguageSkillsMainText">
            {parse(SkillsPageEnum.LANG.TEXT)}
          </p>

          <div
            className="skill_container skill-ua_container"
            data-testid="SkillsPage_LanguageSkillContainer"
          >
            <div className="skill-label_container" role="LanguageSkillLabel">
              <h3 role="LanguageSkillTitle">{SkillsPageEnum.LANG.UA_TITLE}</h3>

              <span className="skill-percentage" role="LanguageSkillPercentage">
                {SkillsPageEnum.LANG.UA_LVL}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="LanguageSkillBar">
              <div
                className="skill-progress_container skill-ua-progress_container"
                role="LanguageSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-ru_container"
            data-testid="SkillsPage_LanguageSkillContainer"
          >
            <div className="skill-label_container" role="LanguageSkillLabel">
              <h3 role="LanguageSkillTitle">{SkillsPageEnum.LANG.RU_TITLE}</h3>

              <span className="skill-percentage" role="LanguageSkillPercentage">
                {SkillsPageEnum.LANG.RU_LVL}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="LanguageSkillBar">
              <div
                className="skill-progress_container skill-ru-progress_container"
                role="LanguageSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-pl_container"
            data-testid="SkillsPage_LanguageSkillContainer"
          >
            <div className="skill-label_container" role="LanguageSkillLabel">
              <h3 role="LanguageSkillTitle">{SkillsPageEnum.LANG.PL_TITLE}</h3>

              <span className="skill-percentage" role="LanguageSkillPercentage">
                {SkillsPageEnum.LANG.PL_LVL}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="LanguageSkillBar">
              <div
                className="skill-progress_container skill-pl-progress_container"
                role="LanguageSkillProgress"
              ></div>
            </div>
          </div>

          <div
            className="skill_container skill-en_container"
            data-testid="SkillsPage_LanguageSkillContainer"
          >
            <div className="skill-label_container" role="LanguageSkillLabel">
              <h3 role="LanguageSkillTitle">{SkillsPageEnum.LANG.EN_TITLE}</h3>

              <span className="skill-percentage" role="LanguageSkillPercentage">
                {SkillsPageEnum.LANG.EN_LVL}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="LanguageSkillBar">
              <div
                className="skill-progress_container skill-en-progress_container"
                role="LanguageSkillProgress"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default SkillsPage;
