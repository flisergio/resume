import React, { Fragment } from 'react';

import './LinksPage.css';

const LinksPage = ({ id }) => {
    return(
        <Fragment>
            <div className="links-page_container" id={id}>
                <div className="links-page_inside_container">
                    <p className="center">Links</p>
                </div>
            </div>
        </Fragment>
    );
}

export default LinksPage;