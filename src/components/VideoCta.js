import React, { Component } from "react";
import ModalVideo from "react-modal-video";
import { withTranslation } from "react-i18next";

class VideoCta extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({ isOpen: true });
  }
  render() {
    const { t } = this.props;

    return (
      <div>
        {/*====================  video cta area ====================*/}
        <div className="video-cta-area section-space--inner--120">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-6">
                <div className="video-cta-content">
                  <h4 className="video-cta-content__small-title">ABOUT US</h4>
                  <h3 className="video-cta-content__title">
                    {t("welcomecta")}
                  </h3>
                  <p className="video-cta-content__text">{t("welcomecta1")}</p>
                  <a
                    href={`${process.env.PUBLIC_URL}/contact-us`}
                    className="ht-btn ht-btn--round"
                  >
                    {t("contact")}
                  </a>
                </div>
              </div>
              <div className="col-lg-5 offset-lg-1 col-md-6">
                <div className="cta-video-image">
                  <div className="video-popup">
                    <ModalVideo
                      channel="youtube"
                      isOpen={this.state.isOpen}
                      videoId="WEDIj9JBTC8"
                      onClose={() => this.setState({ isOpen: false })}
                    />
                    {/* to use modal, delete this image tag and use 
                    the commented code below */}
                    <img
                      src="assets/img/backgrounds/video-cta.jpg"
                      className="img-fluid"
                      alt=""
                    />
                    {/* <button onClick={this.openModal}>
                      <div className="cta-video-image__image">
                        <img
                          src="assets/img/backgrounds/video-cta.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="cta-video-image__icon">
                        <i className="ion-ios-play" />
                      </div>
                    </button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of video cta area  ====================*/}
      </div>
    );
  }
}

export default withTranslation("translations")(VideoCta);
