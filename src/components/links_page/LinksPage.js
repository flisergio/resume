import React, { Fragment } from 'react';
import parse from 'html-react-parser';

import './LinksPage.css';
import { LinksPageEnum } from './enums/LinksPageEnum';

const LinksPage = ({ id }) => (
  <Fragment>
    <div className="links-page_container" id={id} data-testid="LinksPage">
      <div className="links-page_inside_container">
        <div className="links-card_container">
          <div className="links_link-box_container" data-text="Spectrum">
            <p>{LinksPageEnum.SPECTRUM.TITLE}</p>
          </div>

          <div className="links_content_container">
            <div className="links_content_inside_container links_content_inside_container_smallFont">
              <p>{parse(LinksPageEnum.SPECTRUM.DESCRIPTION)}</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://verify.spectrumfilaments.com/"
                className="link_button link_spectrumfilaments"
              >
                {LinksPageEnum.COMMON.LINK}
              </a>
            </div>
          </div>
        </div>

        <div className="links-card_container">
          <div className="links_link-box_container" data-text="RoboFriends">
            <p>{LinksPageEnum.ROBO.TITLE}</p>
          </div>

          <div className="links_content_container">
            <div className="links_content_inside_container">
              <p>{parse(LinksPageEnum.ROBO.DESCRIPTION)}</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/flisergio/robofriends"
                className="link_button link_robofriends"
              >
                {LinksPageEnum.COMMON.LINK}
              </a>
            </div>
          </div>
        </div>

        <div className="links-card_container">
          <div className="links_link-box_container" data-text="FaceReco">
            <p>{LinksPageEnum.FR.TITLE}</p>
          </div>

          <div className="links_content_container">
            <div className="links_content_inside_container links_content_inside_container_smallFont">
              <p>{parse(LinksPageEnum.FR.DESCRIPTION)}</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/flisergio/Face-Recognition-App"
                className="link_button link_facerecognition"
              >
                {LinksPageEnum.COMMON.LINK}
              </a>
            </div>
          </div>
        </div>

        <div className="links-card_container">
          <div className="links_link-box_container" data-text="Cinema">
            <p>{LinksPageEnum.CINEMA.TITLE}</p>
          </div>

          <div className="links_content_container">
            <div className="links_content_inside_container links_content_inside_container_smallFont">
              <p>{parse(LinksPageEnum.CINEMA.DESCRIPTION)}</p>

              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/flisergio/CultureCenter"
                className="link_button link_culturecenter"
              >
                {LinksPageEnum.COMMON.LINK}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
);

export default LinksPage;