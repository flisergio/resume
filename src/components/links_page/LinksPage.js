import React, { Fragment } from 'react';

import './LinksPage.css';

const LinksPage = ({ id }) => {
    return(
        <Fragment>
            <div className="links-page_container" id={id}>
                <div className="links-page_inside_container">
                    <div className="links-card_container">
                        <div className="links_link-box_container" data-text="Spectrum">
                            <p>Spectrum filaments</p>
                        </div>

                        <div className="links_content_container">
                            <div className="links_content_inside_container links_content_inside_container_spectrumfilaments">
                                <p>
                                    Big back-end system (developed using <span>Python</span>) that communicates with PLC controller by <span>TCP</span>. 
                                    Developed and used for controlling <span>filament quality</span>. After entering an ID of filament spool 
                                    (generated in Python), system searches for such spool in <span>PostgreSQL database </span> and shows it's 
                                    characteristics that declare quality of the spool along with the raph that visualises it's quality.
                                </p>

                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://verify.spectrumfilaments.com/"
                                    className="link_button link_spectrumfilaments">
                                        Visit Link
                                </a>
                            </div>                           
                        </div>
                    </div>

                    <div className="links-card_container">
                        <div className="links_link-box_container" data-text="GitHub">
                            <p>GitHub Profile</p>
                        </div>

                        <div className="links_content_container">
                            <div className="links_content_inside_container">
                                <p>
                                    My main <span>GitHub</span> profile where I gather all my self-development projects or other projects, 
                                    that can be shared. You can find there a <span>CultureCenter project</span>, which was a 
                                    <span> university project</span> used for simple maintaining of the <span>cinema system</span>. It was
                                    developed by me and two other friends in <span>Java</span> and <span>MySQL</span>.
                                </p>

                                <a 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    href="https://github.com/flisergio"
                                    className="link_button link_github">
                                        Visit Link
                                </a>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default LinksPage;