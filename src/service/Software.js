import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
// import Funfact from "../components/Funfact";
// import TestimonialSlider from "../components/TestimonialSlider";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { withTranslation } from "react-i18next";

class Software extends Component {
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
        {/* Navigation bar */}
        <NavBar />

        {/* breadcrumb */}
        {/*====================  breadcrumb area ====================*/}
        <div className="breadcrumb-area breadcrumb-bg">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="page-banner text-center">
                  <h1>Software</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Software</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper">

          {/*About section start*/}
          <div className="about-section section-space--inner--120">
            <div className="container">
              <div className="about-wrapper row">
                <div className="col-sm-6 col-12 order-1 order-lg-2">
                  <div className="about-image about-image-1">
                    <img src="assets/img/about/about-1.jpg" alt="" />
                  </div>
                </div>
                <div className="col-sm-6 col-12 order-2 order-lg-3">
                  <div className="about-image about-image-2">
                    <img src="assets/img/about/about-2.jpg" alt="" />
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-3 order-lg-1">
                  <div className="about-content about-content-1">
                    <h3>
                      <span><a href="http://www.atplatform.com.cn/index/about.html?id=contact">ATPlatform</a></span>
                    </h3>
                    <p>
                      After a decade of efforts, ATPlatform Technology Limited went through program development, system testing, practical application, and was finally formed in Hong Kong in 2013. It provides a stable and global financial derivatives trading system, a risk control console and a settlement system. With fast trading speed and professional technical support, ATPlatform provides premium products and quality services to customers. 
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <h3>
                     <span><a href="http://www.cqg.com/about-cqg/contact-us">CQG, Inc</a></span>
                    </h3>
                    <p>
                       CQG provides high-performance trade routing, global market data, and advanced technical analysis. CQG partners with more than one hundred Futures Commission Merchant environments and provides Direct Market Access to more than forty exchanges through its global network of co-located Hosted Exchange Gateways. CQG's server-side order management tools for spreading, market aggregation, and smart orders are unsurpassed for speed and ease-of-use.    
                    </p>
                    {/* <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      {t("contact")}
                    </a> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

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

export default withTranslation("translations")(Software);
