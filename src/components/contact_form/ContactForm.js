import React, { Fragment } from 'react';

import './ContactForm.css';
import locationPicture from "./images/location.png";
import emailPicture from "./images/email.png";
import phonePicture from "./images/phone.png";
import facebookPicture from "./images/facebook.png";
import instagramPicture from "./images/instagram.png";
import linkedinPicture from "./images/linkedin.png";

const ContactForm = ({ id, handleEmailSubmit, nameChange, emailChange, phoneChange, messageChange }) => {
    return(
        <Fragment>
            <div className="contact-form_container"  id={id}>
                <div className="contact-form_inside_container">
                    <div className="contact-info_container">
                        <div>
                            <h2>Contact Info</h2>

                            <ul className="ul_contact-info">
                                <li>
                                    <span className="span_contact-info_picture">
                                        <img 
                                            src={locationPicture}
                                            className="img_location"
                                            alt="location"
                                        />
                                    </span>

                                    <span className="span_contact-info_text">Katowice, Poland</span>
                                </li>

                                <li>
                                    <span className="span_contact-info_picture">
                                        <img 
                                            src={emailPicture}
                                            className="img_e-mail"
                                            alt="e-mail"
                                        />
                                    </span>

                                    <span className="span_contact-info_text">sergey.dko@gmail.com</span>
                                </li>

                                <li>
                                    <span className="span_contact-info_picture">
                                        <img 
                                            src={phonePicture}
                                            className="img_phone"
                                            alt="phone"
                                        />
                                    </span>

                                    <span className="span_contact-info_text">+48 666 946 559</span>
                                </li>
                            </ul>           
                        </div>

                        <ul className="ul_social-media_contact">
                            <li>
                                <a href="https://www.facebook.com/sergio.mejor.5/">
                                    <img 
                                        src={facebookPicture}
                                        className="img_facebook"
                                        alt="facebook"
                                    />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.instagram.com/flisergio/">
                                    <img 
                                        src={instagramPicture}
                                        className="img_instagram"
                                        alt="instagram"
                                    />
                                </a>
                            </li>

                            <li>
                                <a href="https://www.linkedin.com/in/sergii-kobyliaiev-570b46165/">
                                    <img 
                                        src={linkedinPicture}
                                        className="img_linkedin"
                                        alt="linkedin"
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>

                    <form className="contact-form_inner_container" onSubmit={handleEmailSubmit}>
                        <h2>Send me a message</h2>

                        <div className="form-box_container">
                            <div className="input-box_container w50">
                                <input type="text" name="" onChange={nameChange} required />
                                <span>Name</span>
                            </div>
                        </div>

                        <div className="form-box_container">
                            <div className="input-box_container w50">
                                <input type="email" name="" onChange={emailChange} required />
                                <span>Email</span>
                            </div>
                        </div>

                        <div className="form-box_container">
                            <div className="input-box_container input-box_container_phone w50">
                                <input type="tel" name="" pattern="+[1, 4][2, 8][0-9]{3}[0-9]{3}[0-9]{2}" 
                                onChange={phoneChange} required/>
                                <span>Phone</span>
                            </div>
                        </div>

                        <div className="form-box_container">
                            <div className="input-box_container w100">
                                <textarea name="" onChange={messageChange} required></textarea>
                                <span>Enter your message here . . .</span>
                            </div>
                        </div>

                        <div className="form-box_container">
                            <div className="input-box_container w100">
                                <input type="submit" value="send" name="" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactForm;