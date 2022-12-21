/* eslint-disable array-callback-return */
import React from "react";
import { render, screen } from "@testing-library/react";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "../redux/configureStore.js";
import App from "../App.js";
import { toHaveClass } from "@testing-library/jest-dom/dist/matchers.js";

describe("App", () => {
  const store = configureStore(),
    testIdValues = {
      appTestId: "",
      navigationTestId: "",
      welcomePageTestId: "",
      skillsPageTestId: "",
      experiencePageTestId: "",
      linksPageTestId: "",
      contactFormTestId: "",
    };

  const testIdValuesEntries = Object.entries(testIdValues);
  // const testIds = [
  //   "App",
  //   "Navigation",
  //   "WelcomePage",
  //   "SkillsPage",
  //   "ExperiencePage",
  //   "LinksPage",
  //   "ContactForm",
  // ];

  const assignTestIdValues = (...args) => {
    testIdValuesEntries.map(
      ([key, value], index) => (testIdValues[key] = args[index])
    );
  };

  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(
      <ReduxProvider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ReduxProvider>
    );

    assignTestIdValues(
      "App",
      "Navigation",
      "WelcomePage",
      "SkillsPage",
      "ExperiencePage",
      "LinksPage",
      "ContactForm"
    );
  });

  it("App component renders successfully", () => {});

  it("App component renders all other components inside", () => {
    const realAppTestId = screen.getByTestId("App");

    Object.values(testIdValues).map((val) =>
      expect(realAppTestId).toContainElement(screen.getByTestId(val))
    );
  });

  describe("Navigation", () => {
    it("Navigation component renders nav inside", () => {
      const navTag = screen.getAllByRole("navigation")[0];
      const realNavigationTestId = screen.getByTestId("Navigation");
      const navTagClass = navTag.getAttribute("class");

      expect(navTagClass.includes("nav_main")).toBeTruthy();
      expect(realNavigationTestId).toContainElement(navTag);
    });
  });

  describe("WelcomePage", () => {
    let realWelcomePageTestId;

    beforeEach(() => {
      realWelcomePageTestId = screen.getByTestId("WelcomePage");
    });

    it("WelcomePage component to have right class and id", () => {
      const welcomePageId = realWelcomePageTestId.getAttribute("id");

      expect(welcomePageId).toEqual("home");
      expect(realWelcomePageTestId).toHaveClass("welcome-page_container");
    });

    // it("WelcomePage component renders particles with options inside", () => {
    //   const particlesTestId = screen.getByRole("Particles");
    //   const particleParams = particlesTestId.getAttribute("params");

    //   expect(particlesTestId).toHaveClass("particles");
    //   expect(particlesTestId).toHaveAttribute("params");
    //   expect(typeof (particleParams)).toBe("Object");
    //   expect(realWelcomePageTestId).toContainElement(particlesTestId);
    // });

    describe("Description Container", () => {
      let descriptionContainerTestId;

      beforeEach(() => {
        descriptionContainerTestId = screen.getByTestId(
          "WelcomePage_DescriptionContainer"
        );
      });

      it("WelcomePage component renders description container inside", () => {
        expect(realWelcomePageTestId).toContainElement(
          descriptionContainerTestId
        );

        expect(descriptionContainerTestId).toHaveClass("description_container");
      });

      it("Description container renders welcome header inside", () => {
        const welcomeHeaderTag = screen.getByRole("header_welcome");

        expect(descriptionContainerTestId).toContainElement(welcomeHeaderTag);
        expect(welcomeHeaderTag).toHaveClass("header_welcome");
      });

      it("tests Inner Description container", () => {
        const innerDescriptionContainerTestId = screen.getByTestId(
            "WelcomePage_InnerDescriptionContainer"
          ),
          innerDescriptionPTags = screen.getAllByRole("InnerDescription_p");

        expect(descriptionContainerTestId).toContainElement(
          innerDescriptionContainerTestId
        );

        expect(innerDescriptionPTags).toHaveLength(2);
        innerDescriptionPTags.map((p) =>
          expect(innerDescriptionContainerTestId).toContainElement(p)
        );

        expect(innerDescriptionPTags[0]).toHaveClass("p_welcome-description");
        expect(innerDescriptionPTags[1]).toHaveClass("p_quote");
      });

      it("Description container renders Link with appropriate class attribute inside", () => {
        const Link_AboutPage = screen.getByRole("WelcomePage_Link_AboutPage");

        expect(descriptionContainerTestId).toContainElement(Link_AboutPage);
        expect(Link_AboutPage).toHaveClass("link_about");
      });
    });

    describe("Profile Picture Container", () => {
      let profilePictureContainerTestId;

      beforeEach(() => {
        profilePictureContainerTestId = screen.getByTestId(
          "WelcomePage_ProfilePictureContainer"
        );
      });

      it("WelcomePage component renders profile picture container inside", () => {
        expect(realWelcomePageTestId).toContainElement(
          profilePictureContainerTestId
        );

        expect(profilePictureContainerTestId).toHaveClass(
          "profile-picture_container"
        );
      });

      it("Profile Picture container renders image with appropriate attributes inside", () => {
        const profilePictureTag = screen.getByRole("ProfilePicture");

        expect(profilePictureContainerTestId).toContainElement(
          profilePictureTag
        );

        expect(
          profilePictureTag.getAttribute("src").includes("profile.JPG")
        ).toBeTruthy();

        expect(profilePictureTag).toHaveClass("img_profile-picture");
        expect(profilePictureTag).toHaveAttribute("alt", "profile");
      });
    });

    describe("Social Media Links List", () => {
      let socialMediaLinksListTag;

      beforeEach(() => {
        socialMediaLinksListTag = screen.getByRole("SocialMediaLinksList");
      });

      it("WelcomePage component renders social media links list inside", () => {
        expect(realWelcomePageTestId).toContainElement(socialMediaLinksListTag);
        expect(socialMediaLinksListTag).toHaveClass("ul_social-media");
      });

      describe("Social Media Links", () => {
        let socialMediaLinkTags,
          socialMediaFacebook,
          socialMediaLinkedIn,
          socialMediaGitHub;

        beforeEach(() => {
          socialMediaLinkTags = screen.getAllByRole("Welcome_SocialMediaLink");
          socialMediaFacebook = socialMediaLinkTags[0];
          socialMediaLinkedIn = socialMediaLinkTags[1];
          socialMediaGitHub = socialMediaLinkTags[2];
        });

        it("Social Media Links List renders three links with right attributes inside", () => {
          expect(socialMediaLinkTags).toHaveLength(3);
          socialMediaLinkTags.map((tag) => {
            expect(socialMediaLinksListTag).toContainElement(tag);
            expect(tag).toHaveAttribute("target", "_blank");
            expect(tag).toHaveAttribute("rel", "noopener noreferrer");
          });

          expect(socialMediaFacebook).toHaveAttribute(
            "href",
            "https://www.facebook.com/sergio.mejor.5/"
          );

          expect(socialMediaLinkedIn).toHaveAttribute(
            "href",
            "https://www.linkedin.com/in/sergii-kobyliaiev-570b46165/"
          );

          expect(socialMediaGitHub).toHaveAttribute(
            "href",
            "https://www.github.com/flisergio"
          );
        });

        describe("Tilt Container", () => {
          let tiltTags;

          beforeEach(() => {
            tiltTags = screen.getAllByTestId(
              "Welcome_SocialMedia_TiltContainer"
            );
          });

          it("each link renders Tilt container inside", () => {
            expect(tiltTags).toHaveLength(3);

            for (let i = 0; i < socialMediaLinkTags.length; i++) {
              expect(socialMediaLinkTags[i]).toContainElement(tiltTags[i]);
              expect(tiltTags[i]).toHaveClass("Tilt-inner");
            }
          });

          it("each Tilt Container renders an icon with appropriate attributes inside", () => {
            const tiltIconTags = screen.getAllByRole("Welcome_SocialMediaIcon"),
              iconFacebook = tiltIconTags[0],
              iconLinkedIn = tiltIconTags[1],
              iconGitHub = tiltIconTags[2];

            expect(tiltIconTags).toHaveLength(3);
            tiltIconTags.map((tag) =>
              expect(tag).toHaveClass("icon_social-media")
            );

            expect(
              iconFacebook.getAttribute("src").includes("facebook.png")
            ).toBeTruthy();
            expect(iconFacebook).toHaveAttribute("alt", "facebook");

            expect(
              iconLinkedIn.getAttribute("src").includes("linkedin.png")
            ).toBeTruthy();
            expect(iconLinkedIn).toHaveAttribute("alt", "linkedin");

            expect(
              iconGitHub.getAttribute("src").includes("github.png")
            ).toBeTruthy();
            expect(iconGitHub).toHaveAttribute("alt", "github");
          });
        });
      });
    });
  });

  describe("AboutPage", () => {
    let realAboutPageTestId;

    beforeEach(() => {
      realAboutPageTestId = screen.getByTestId("AboutPage");
    });

    it("AboutPage component to have right class and id", () => {
      const aboutPageId = realAboutPageTestId.getAttribute("id");

      expect(aboutPageId).toEqual("aboutpage");
      expect(realAboutPageTestId).toHaveClass("about-page_container");
    });

    describe("Inner Container", () => {
      let innerContainerTestId;

      beforeEach(() => {
        innerContainerTestId = screen.getByTestId("AboutPage_InnerContainer");
      });

      it("AboutPage component renders inner container inside", () => {
        expect(realAboutPageTestId).toContainElement(innerContainerTestId);

        expect(innerContainerTestId).toHaveClass("about-page_inside_container");
      });

      describe("Left and Right Containers", () => {
        let leftContainerTestId, rightContainerTestId;

        beforeEach(() => {
          leftContainerTestId = screen.getByTestId("AboutPage_LeftContainer");
          rightContainerTestId = screen.getByTestId("AboutPage_RightContainer");
        });

        it("Inner container renders left container inside", () => {
          expect(innerContainerTestId).toContainElement(leftContainerTestId);
          expect(leftContainerTestId).toHaveClass("about-page_left_container");
        });

        it("Inner container renders right container inside", () => {
          expect(innerContainerTestId).toContainElement(rightContainerTestId);
          expect(rightContainerTestId).toHaveClass(
            "about-page_right_container"
          );
        });

        describe("Card Containers", () => {
          let cardContainersTestId,
            personalInfoContainer,
            educationContainer,
            hobbiesContainer;

          beforeEach(() => {
            cardContainersTestId = screen.getAllByTestId(
              "AboutPage_CardContainer"
            );
            personalInfoContainer = screen.getByRole("PersonalInfoContainer");
            educationContainer = screen.getByRole("EducationContainer");
            hobbiesContainer = screen.getByRole("HobbiesContainer");
          });

          it("About Page renders exactly three Card containers", () => {
            expect(cardContainersTestId).toHaveLength(3);
            cardContainersTestId.map((id) =>
              expect(id).toHaveClass("about-page_card_container")
            );
          });

          it("Left container renders personal info and education containers inside", () => {
            expect(leftContainerTestId).toContainElement(personalInfoContainer);
            expect(personalInfoContainer).toHaveClass(
              "about-page_personal-info_container"
            );

            expect(leftContainerTestId).toContainElement(educationContainer);
            expect(educationContainer).toHaveClass(
              "about-page_education_container"
            );
          });

          it("Right container renders hobbies container inside", () => {
            expect(rightContainerTestId).toContainElement(hobbiesContainer);
            expect(hobbiesContainer).toHaveClass(
              "about-page_hobbies_container"
            );
          });

          it("each Card renders Content Container inside", () => {
            const contentContainersTestId = screen.getAllByTestId(
              "AboutPage_Card_Content"
            );
            for (let i = 0; i < cardContainersTestId; i++) {
              expect(cardContainersTestId[i]).toContainElement(
                contentContainersTestId[i]
              );
              expect(contentContainersTestId[i]).toHaveClass("content");
            }
          });

          it("tests Personal Info Content container", () => {
            const personalInfoContentContainer = screen.getByRole(
                "PersonalInfoContent"
              ),
              personalInfoPicture = screen.getByRole("PersonalInfoPicture"),
              personalInfoTitle = screen.getByRole("PersonalInfoTitle");

            expect(personalInfoContentContainer).toContainElement(
              personalInfoPicture
            );
            expect(personalInfoPicture).toHaveClass("img_about-page_card");
            expect(personalInfoPicture).toHaveClass("img_personal-info");
            expect(personalInfoPicture).toHaveAttribute("alt", "personal-info");
            expect(
              personalInfoPicture
                .getAttribute("src")
                .includes("personal-info.svg")
            ).toBeTruthy();

            expect(personalInfoContentContainer).toContainElement(
              personalInfoTitle
            );
          });

          it("tests Education Content container", () => {
            const educationContentContainer =
                screen.getByRole("EducationContent"),
              educationPicture = screen.getByRole("EducationPicture"),
              educationTitle = screen.getByRole("EducationTitle");

            expect(educationContentContainer).toContainElement(
              educationPicture
            );
            expect(educationPicture).toHaveClass("img_about-page_card");
            expect(educationPicture).toHaveClass("img_education");
            expect(educationPicture).toHaveAttribute("alt", "education");
            expect(
              educationPicture.getAttribute("src").includes("education.svg")
            ).toBeTruthy();

            expect(educationContentContainer).toContainElement(educationTitle);
          });

          it("tests Hobbies Content container", () => {
            const hobbiesContentContainer = screen.getByRole("HobbiesContent"),
              hobbiesPicture = screen.getByRole("HobbiesPicture"),
              hobbiesTitle = screen.getByRole("HobbiesTitle");

            expect(hobbiesContentContainer).toContainElement(hobbiesPicture);
            expect(hobbiesPicture).toHaveClass("img_about-page_card");
            expect(hobbiesPicture).toHaveClass("img_hobbies");
            expect(hobbiesPicture).toHaveAttribute("alt", "hobbies");
            expect(
              hobbiesPicture.getAttribute("src").includes("hobbies.svg")
            ).toBeTruthy();

            expect(hobbiesContentContainer).toContainElement(hobbiesTitle);
          });

          it("each Card renders Content2 Container inside", () => {
            const content2ContainersTestId = screen.getAllByTestId(
              "AboutPage_Card_Content2"
            );
            for (let i = 0; i < cardContainersTestId; i++) {
              expect(cardContainersTestId[i]).toContainElement(
                content2ContainersTestId[i]
              );
            }
          });

          it("tests Personal Info Content2 container", () => {
            const personalInfoContent2Container = screen.getByRole(
                "PersonalInfoContent2"
              ),
              personalInfoName = screen.getByRole("PersonalInfoName"),
              personalInfoBirthDate = screen.getByRole("PersonalInfoBirthDate"),
              personalInfoBirthPlace = screen.getByRole(
                "PersonalInfoBirthPlace"
              );

            expect(personalInfoContent2Container).toContainElement(
              personalInfoName
            );
            expect(personalInfoName).toHaveClass("personal-info_name");

            expect(personalInfoContent2Container).toContainElement(
              personalInfoBirthDate
            );
            expect(personalInfoBirthDate).toHaveClass(
              "personal-info_birthdate"
            );

            expect(personalInfoContent2Container).toContainElement(
              personalInfoBirthPlace
            );
            expect(personalInfoBirthPlace).toHaveClass(
              "personal-info_birthplace"
            );
          });

          it("tests Education Content2 container", () => {
            const educationContent2Container = screen.getByRole(
                "EducationContent2"
              ),
              educationName = screen.getByRole("EducationName"),
              educationInfo = screen.getByRole("EducationInfo"),
              educationTime = screen.getByRole(
                "EducationTime"
              );
            
            expect(educationContent2Container).toContainElement(
              educationName
            );
            expect(educationName).toHaveClass("education-name");

            expect(educationContent2Container).toContainElement(
              educationInfo
            );
            expect(educationInfo).toHaveClass("education-info");

            expect(educationContent2Container).toContainElement(
              educationTime
            );
            expect(educationTime).toHaveClass("education-time");
          });
        });
      });
    });
  });
});
