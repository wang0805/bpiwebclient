import React, { Component } from "react";
import NavBar from "../components/NavBar";
// import Funfact from "../components/Funfact";
// import TestimonialSlider from "../components/TestimonialSlider";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

import MultiStep from "../components/Multistep/Multisteps";
import { withTranslation } from "react-i18next";

class AcctOpening extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { t } = this.props;

    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Open New Account</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Open New Account</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--top--120">
          {/*About section start*/}
          <div className="about-section section-space--inner--bottom--120">
            <MultiStep />
          </div>
          {/*Acct Open section end*/}

          {/* Fun fact */}
          {/* <Funfact/> */}

          {/* Testimonial Slider */}
          {/* <TestimonialSlider/> */}

          {/* Brand logo */}
          {/* <BrandLogoSlider background = "" /> */}
        </div>

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default withTranslation("translations")(AcctOpening);
