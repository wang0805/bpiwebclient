import React, { Component } from "react";
import { withTranslation } from "react-i18next";

class TeamMemberGrid extends Component {
  render() {
    const { t } = this.props;

    /* team member data */

    let data = [
      {
        profileImage: "team-1-small.jpg",
        profileTitle: t("kennymah"),
        profileDesignation: "Group CEO",
        profileEmail: "Kennymah@bpifinancial.com",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "team-1-small.jpg",
        profileTitle: t("songhua"),
        profileDesignation: "Deputy Head of Clearing",
        profileEmail: "shfan@bpifinancial.com",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      {
        profileImage: "team-1-small.jpg",
        profileTitle: t("rouying"),
        profileDesignation: "Head Of Sales",
        profileEmail: "rywang@bpifinancial.com",
        socialLinks: {
          facebook: "//www.facebook.com",
          twitter: "//www.twitter.com",
          linkedin: "//www.linkedin.com",
          googlePlus: "//plus.google.com",
        },
      },
      // {
      //   profileImage: "team-4.jpg",
      //   profileTitle: "Coco Chan",
      //   profileDesignation: "Head Of Finance",
      //   profileEmail: "cocochan@bpifinancial.com",
      //   socialLinks: {
      //     facebook: "//www.facebook.com",
      //     twitter: "//www.twitter.com",
      //     linkedin: "//www.linkedin.com",
      //     googlePlus: "//plus.google.com",
      //   },
      // },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-3 col-sm-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="team">
            <div className="image">
              <img src={`assets/img/team/${val.profileImage}`} alt="" />
            </div>
            <div className="content">
              <h3 className="title">{val.profileTitle}</h3>
              <span>{val.profileDesignation}</span>
              <a href={"mailto:" + val.profileEmail} className="email">
                {val.profileEmail}
              </a>
              <div className="social">
                <a href={val.socialLinks.facebook} className="facebook">
                  <i className="fa fa-facebook" />
                </a>
                {/* <a href={val.socialLinks.twitter} className="twitter">
                  <i className="fa fa-twitter" />
                </a> */}
                <a href={val.socialLinks.linkedin} className="linkedin">
                  <i className="fa fa-linkedin" />
                </a>
                {/* <a href={val.socialLinks.googlePlus} className="google">
                  <i className="fa fa-google-plus" />
                </a> */}
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        {/*====================  team member area ====================*/}
        <div className="team-member-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Team <span className="title-icon" />
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="team-member-wrapper">
                  <div className="row justify-content-md-center">
                    {/* team member list */}
                    {Datalist}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of team member area  ====================*/}
      </div>
    );
  }
}

export default withTranslation("translations")(TeamMemberGrid);
