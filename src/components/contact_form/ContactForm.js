import React, { Fragment } from 'react';

import './ContactForm.css';

const ContactForm = ({ id }) => {
    return(
        <Fragment>
            <div className="contact-form_container"  id={id}>
                <div className="contact-form_inside_container">
                    <p className="center">Hire Me</p>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactForm;