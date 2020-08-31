import React, { Fragment } from 'react';

import './AboutPage.css';

const AboutPage = ({ id }) => {
    return(
        <Fragment>
            <div className="about-page_container" id={id}>
                <div className="about-page_inside_container">
                    <p className="center">About Me</p>
                </div>
            </div>
        </Fragment>
    );
}

export default AboutPage;