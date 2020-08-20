import React, { Component } from "react";
import NavBar from "../components/NavBar";
import FeatureIcon from "../components/FeatureIcon";
// import Funfact from "../components/Funfact";
import TeamMemberGrid from "../components/TeamMemberGrid";
// import TestimonialSlider from "../components/TestimonialSlider";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import ModalVideo from "react-modal-video";
class About extends Component {
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
                  <h1>About Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>About Us</li>
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
            <div className="container">
              <div className="row row-25 align-items-center">
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-image-two">
                    <img src="assets/img/about/about-3.jpg" alt="" />
                    <span className="video-popup">
                      <ModalVideo
                        channel="youtube"
                        isOpen={this.state.isOpen}
                        videoId="WEDIj9JBTC8"
                        onClose={() => this.setState({ isOpen: false })}
                      />
                      <button onClick={this.openModal}>
                        <i className="ion-ios-play-outline" />
                      </button>
                    </span>
                  </div>
                </div>
                <div className="col-lg-6 col-12 mb-30">
                  <div className="about-content-two">
                    <h3>Welcome to BPI Financial Group Limited</h3>
                    {/* <h1>50 Years of Experience in Industry</h1> */}
                    <p>
                      BPI Financial Group Limited. (BPIF Group) through its
                      subsidiaries is licenced to operate regulated businesses
                      in Hong Kong and Singapore. BPIF is a subsidiary of a Hong
                      Kong Exchange listed company – Theme International
                      Holdings Limited
                    </p>
                    <h3>Mission</h3>
                    <p>
                      BPIF Group aspires to establish a financial services
                      platform facilitating international trade in commodities
                      with combined access to both physical and derivatives
                      market. The spirit and aspiration in starting BPIF Group
                      is to establish a financial services platform facilitating
                      international trade in commodities with combined access to
                      both physical and derivatives market. The service
                      providers in the market in general and more so in Asia,
                      are fragmented. Traditional market participants operate
                      either solely in physical commodity market or entirely in
                      the financial space.. The ability to combine services
                      access to both the derivatives and physical market
                      powerful and allows firms in that combined space with
                      greater reach to its customers
                    </p>
                    <a
                      href="services"
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Our Services
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Feature Icon */}
          <FeatureIcon background="grey-bg" />

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
                      <span>Our Shareholders</span>
                    </h3>
                    <p>
                      Our shareholders are diversified and purposefully cherry
                      picked to represent different segments of the industry
                      making up of top producer, consumer and funds collectively
                      <br />
                      <br />
                      In addition to Theme International Holdings Limited,
                      minority shareholders in BPIF includes one of the largest
                      privately Iron Ore miner globally, one of the largest
                      privately owned steel mills in Mainland China, as well as
                      one of the active commodity focused investment fund in the
                      industry
                    </p>
                  </div>
                </div>
                <div className="col-lg-6 col-12 order-4">
                  <div className="about-content about-content-2">
                    <h3>
                      <span>Subsidaries under BPIF</span>
                    </h3>
                    <p>
                      Bright Point International Futures Limited (HK)
                      <br />
                      Bright Point International Futures (SG) Pte Ltd
                      <br />
                      BPI Trading (SG) Pte Ltd
                      <br />
                      Guang Dian International Trading Limited (CN)
                    </p>
                    <a
                      href={`${process.env.PUBLIC_URL}/contact-us`}
                      className="ht-btn--default ht-btn--default--dark-hover section-space--top--20"
                    >
                      Contact us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*About section end*/}

          {/* Fun fact */}
          {/* <Funfact/> */}

          {/* Team member */}
          <TeamMemberGrid />

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

export default About;
