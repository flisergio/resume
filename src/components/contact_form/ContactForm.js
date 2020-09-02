import React, { Fragment } from 'react';

import './ContactForm.css';
import locationPicture from "./images/location.png";
import emailPicture from "./images/email.png";
import phonePicture from "./images/phone.png";
import facebookPicture from "./images/facebook.png";
import instagramPicture from "./images/instagram.png";
import linkedinPicture from "./images/linkedin.png";

const ContactForm = ({ id }) => {
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

                    <div className="contact-form_inner_container">
                        <h2>Send a message</h2>

                        <div className="form-box_container">
                            <div className="input-box_container w50">
                                <input type="text" name="" required />
                                <span>Last Name</span>
                            </div>
                        </div>

                        <div className="form-box_container">
                            <div className="input-box_container w50">
                                <input type="email" name="" required />
                                <span>Email Address</span>
                            </div>
                        </div>

                        <div className="form-box_container">
                            <div className="input-box_container w50">
                                <input type="text" name="" required/>
                                <span>Phone Number</span>
                            </div>
                        </div>

                        <div className="form-box_container">
                            <div className="input-box_container w100">
                                <textarea name="" required></textarea>
                                <span>Enter your message here . . .</span>
                            </div>
                        </div>

                        <div className="form-box_container">
                            <div className="input-box_container w100">
                                <input type="submit" value="send" name="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactForm;