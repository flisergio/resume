/* eslint-disable jsx-a11y/aria-role */
import React, { Fragment } from "react";

import "./SkillsPage.css";
import { SkillsPageEnums } from "./enums/SkillsPageEnum";

const SkillsPage = ({ id }) => (
  <Fragment>
    <div className="skills-page_container" id={id} data-testid="SkillsPage">
      <div className="skills-page_inside_container">
        <div
          className="skills-window_container front-end-skills-window_container"
          data-testid="SkillsPage_WindowContainer"
          role="FrontEndSkillsContainer"
        >
          <h1>{SkillsPageEnums.FRONTEND.TITLE}</h1>
          <p>{SkillsPageEnums.FRONTEND.TEXT}</p>
          <p>{SkillsPageEnums.COMMON.PERCENTAGE_REMARK}</p>

          <div
            className="skill_container skill-js_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnums.FRONTEND.JS_TITLE}
              </h3>

              <span className="skill-percentage" role="FrontEndSkillPercentage">
                {SkillsPageEnums.FRONTEND.JS_PERCENT}
              </span>

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
            className="skill_container skill-html-css_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnums.FRONTEND.HTML_TITLE}
              </h3>

              <span className="skill-percentage" role="FrontEndSkillPercentage">
                {SkillsPageEnums.FRONTEND.HTML_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-html-css-progress_container"
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
                {SkillsPageEnums.FRONTEND.REACT_TITLE}
              </h3>

              <span className="skill-percentage" role="FrontEndSkillPercentage">
                {SkillsPageEnums.FRONTEND.REACT_PERCENT}
              </span>

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
            className="skill_container skill-redux_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnums.FRONTEND.REDUX_TITLE}
              </h3>

              <span className="skill-percentage" role="FrontEndSkillPercentage">
                {SkillsPageEnums.FRONTEND.REDUX_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-redux-progress_container"
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
                {SkillsPageEnums.FRONTEND.TS_TITLE}
              </h3>

              <span className="skill-percentage" role="FrontEndSkillPercentage">
                {SkillsPageEnums.FRONTEND.TS_PERCENT}
              </span>

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
            className="skill_container skill-sapui5_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnums.FRONTEND.UI5_TITLE}
              </h3>

              <span className="skill-percentage" role="FrontEndSkillPercentage">
                {SkillsPageEnums.FRONTEND.UI5_PERCENT}
              </span>

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
            className="skill_container skill-lit-wc_container"
            data-testid="SkillsPage_FrontEndSkillContainer"
          >
            <div className="skill-label_container" role="FrontEndSkillLabel">
              <h3 role="FrontEndSkillTitle">
                {SkillsPageEnums.FRONTEND.LIT_TITLE}
              </h3>

              <span className="skill-percentage" role="FrontEndSkillPercentage">
                {SkillsPageEnums.FRONTEND.LIT_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container" role="FrontEndSkillBar">
              <div
                className="skill-progress_container skill-lit-wc-progress_container"
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
          <h1>{SkillsPageEnums.BACKEND.TITLE}</h1>

          <p>{SkillsPageEnums.BACKEND.TEXT}</p>

          <p>{SkillsPageEnums.COMMON.PERCENTAGE_REMARK}</p>

          <div className="skill_container skill-node_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.BACKEND.NODE_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.BACKEND.NODE_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-node-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-api_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.BACKEND.JSON_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.BACKEND.JSON_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-api-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-cloud_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.BACKEND.CLOUD_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.BACKEND.CLOUD_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-cloud-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-cap_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.BACKEND.CAP_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.BACKEND.CAP_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-cap-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-server_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.BACKEND.SERVER_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.BACKEND.SERVER_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-server-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-databases_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.BACKEND.DB_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.BACKEND.DB_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-databases-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-python_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.BACKEND.PYTHON_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.BACKEND.PYTHON_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-python-progress_container"></div>
            </div>
          </div>
        </div>

        <div
          className="skills-window_container other-skills-window_container"
          data-testid="SkillsPage_WindowContainer"
          role="OtherSkillsContainer"
        >
          <h1>{SkillsPageEnums.OTHER.TITLE}</h1>

          <p>{SkillsPageEnums.OTHER.TEXT}</p>

          <p>{SkillsPageEnums.COMMON.PERCENTAGE_REMARK}</p>

          <div className="skill_container skill-git_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.OTHER.GIT_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.OTHER.GIT_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-git-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-unit">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.OTHER.UNIT_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.OTHER.UNIT_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-unit-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-agile_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.OTHER.AGILE_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.OTHER.AGILE_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-agile-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-deployment_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.OTHER.DEPLOY_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.OTHER.DEPLOY_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-deployment-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-ms_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.OTHER.MS_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.OTHER.MS_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-ms-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-wordpress_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.OTHER.WP_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.OTHER.WP_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-wordpress-progress_container"></div>
            </div>
          </div>
        </div>

        <div
          className="skills-window_container language-skills-window_container"
          data-testid="SkillsPage_WindowContainer"
          role="LanguageSkillsContainer"
        >
          <h1>{SkillsPageEnums.LANG.TITLE}</h1>
          <p className="language-skills-text">{SkillsPageEnums.LANG.TEXT}</p>

          <div className="skill_container skill-ua_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.LANG.UA_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.LANG.UA_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-ua-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-rus_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.LANG.RU_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.LANG.RU_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-rus-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-pl_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.LANG.PL_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.LANG.PL_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-pl-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-en_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.LANG.EN_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.LANG.EN_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
            </div>

            <div className="skill-bar_container">
              <div className="skill-progress_container skill-en-progress_container"></div>
            </div>
          </div>

          <div className="skill_container skill-de_container">
            <div className="skill-label_container">
              <h3>{SkillsPageEnums.LANG.DE_TITLE}</h3>

              <span className="skill-percentage">
                {SkillsPageEnums.LANG.DE_PERCENT}
              </span>

              <div style={{ clear: "both" }}></div>
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

export default SkillsPage;
