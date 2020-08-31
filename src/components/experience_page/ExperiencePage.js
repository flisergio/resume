import React, { Fragment } from 'react';

import './ExperiencePage.css';

const ExperiencePage = ({ id }) => {
    return(
        <Fragment>
            <div className="experience-page_container" id={id}>
                <div className="experience-page_inside_container">
                    <p className="center">Experience</p>
                </div>
            </div>
        </Fragment>
    );
}

export default ExperiencePage;