import React, { Fragment } from 'react';

import './SkillsPage.css';

const SkillsPage = ({ id }) => {
    return(
        <Fragment>
            <div className="skills-page_container" id={id}>
                <div className="skills-page_inside_container">
                    <p className="center">Skills</p>
                </div>
            </div>
        </Fragment>
    );
}

export default SkillsPage;