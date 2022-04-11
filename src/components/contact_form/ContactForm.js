import React, { Fragment } from "react";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import * as nameActions from "../../redux/actions/nameActions";
import * as emailActions from "../../redux/actions/emailActions";
import * as phoneActions from "../../redux/actions/phoneActions";
import * as messageActions from "../../redux/actions/messageActions";

import locationPicture from "./images/location.png";
import emailPicture from "./images/email.png";
import phonePicture from "./images/phone.png";
import facebookPicture from "./images/facebook.png";
import linkedinPicture from "./images/linkedin.png";
import githubPicture from "./images/github.png";

import "./ContactForm.css";
import { ContactFormEnum } from "./enums/ContactFormEnum";

init("user_rJdhk2nwJUZEezZbmiTq9");

const ContactForm = (props) => {
  const { id, name, email, phone, message, actions } = props;

  const nameChange = (event) => actions.updateName(event.target.value);
  const emailChange = (event) => actions.updateEmail(event.target.value);
  const phoneChange = (event) => actions.updatePhone(event.target.value);
  const messageChange = (event) => actions.updateMessage(event.target.value);

  const handleEmailSubmit = (event) => {
    event.preventDefault();
    const templateId = "template_97mdipt";

    sendFeedback(templateId, {
      message: message,
      from_name: name,
      from_email: email,
      from_phone: phone,
    });
  };

  const sendFeedback = (templateId, variables) => {
    emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        Swal.fire({
          title: "Email Successfully Sent",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: "Email Failed to Send",
          icon: "error",
        });
        console.error("Email Error:", err);
      });
  };

  return (
    <Fragment>
      <div className="contact-form_container" id={id}>
        <div className="contact-form_inside_container">
          <div className="contact-info_container">
            <div>
              <h2>{ContactFormEnum.CONTACT.TITLE}</h2>

              <ul className="ul_contact-info">
                <li>
                  <span className="span_contact-info_picture">
                    <img
                      src={locationPicture}
                      className="img_location"
                      alt="location"
                    />
                  </span>

                  <span className="span_contact-info_text">{ContactFormEnum.CONTACT.COUNTRY}</span>
                </li>

                <li>
                  <span className="span_contact-info_picture">
                    <img
                      src={emailPicture}
                      className="img_e-mail"
                      alt="e-mail"
                    />
                  </span>

                  <a
                    href="mailto:sergey.dko@gmail.com"
                    className="link_contact-info"
                  >
                    <span className="span_contact-info_text">
                      {ContactFormEnum.CONTACT.EMAIL}
                    </span>
                  </a>
                </li>

                <li>
                  <span className="span_contact-info_picture">
                    <img src={phonePicture} className="img_phone" alt="phone" />
                  </span>

                  <a href="tel:+48666946559" className="link_contact-info">
                    <span className="span_contact-info_text">
                      {ContactFormEnum.CONTACT.PHONE}
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <ul className="ul_social-media_contact">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.facebook.com/sergio.mejor.5/"
                >
                  <img
                    src={facebookPicture}
                    className="img_facebook"
                    alt="facebook"
                  />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/sergii-kobyliaiev-570b46165/"
                >
                  <img
                    src={linkedinPicture}
                    className="img_linkedin"
                    alt="linkedin"
                  />
                </a>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.github.com/flisergio/"
                >
                  <img
                    src={githubPicture}
                    className="img_github"
                    alt="github"
                  />
                </a>
              </li>
            </ul>
          </div>

          <form
            className="contact-form_inner_container"
            onSubmit={handleEmailSubmit}
          >
            <h2>{ContactFormEnum.MESSAGE.TITLE}</h2>

            <div className="form-box_container">
              <div className="input-box_container w50">
                <input
                  type="text"
                  name=""
                  onChange={nameChange}
                  placeholder={ContactFormEnum.MESSAGE.NAME}
                  required
                />
                <span>{ContactFormEnum.MESSAGE.NAME}</span>
              </div>
            </div>

            <div className="form-box_container">
              <div className="input-box_container w50">
                <input
                  type="email"
                  name=""
                  onChange={emailChange}
                  placeholder={ContactFormEnum.MESSAGE.EMAIL}
                  required
                />
                <span>{ContactFormEnum.MESSAGE.EMAIL}</span>
              </div>
            </div>

            <div className="form-box_container">
              <div className="input-box_container input-box_container_phone w50">
                <input
                  type="tel"
                  name=""
                  pattern="[/+/][1, 4][2, 8][0-9]{9}"
                  onChange={phoneChange}
                  placeholder={ContactFormEnum.MESSAGE.PHONE}
                  required
                />
                <span>{ContactFormEnum.MESSAGE.PHONE}</span>
              </div>
            </div>

            <div className="form-box_container">
              <div className="input-box_container w100">
                <textarea
                  name=""
                  minLength="10"
                  onChange={messageChange}
                  placeholder={ContactFormEnum.MESSAGE.TEXT}
                  required
                ></textarea>
                <span>{ContactFormEnum.MESSAGE.TEXT}</span>
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
};

ContactForm.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  actions: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  name: state.name,
  email: state.email,
  phone: state.phone,
  message: state.message,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    updateName: bindActionCreators(nameActions.updateName, dispatch),
    updateEmail: bindActionCreators(emailActions.updateEmail, dispatch),
    updatePhone: bindActionCreators(phoneActions.updatePhone, dispatch),
    updateMessage: bindActionCreators(messageActions.updateMessage, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
