import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { withTranslation } from "react-i18next";

class Cfd extends Component {
  render() {
    const { t } = this.props;

    let service_obj = [
      {
        sidebarListLink: "cfd",
        sidebarListIcon: "flaticon-015-cart",
        sidebarListText: "Products",
      },
      {
        sidebarListLink: "cfd",
        sidebarListIcon: "flaticon-010-tank-1",
        sidebarListText: "Software",
      },
      {
        sidebarListLink: "cfd",
        sidebarListIcon: "flaticon-002-welding",
        sidebarListText: "FAQs",
      },
      {
        sidebarListLink: "openaccount",
        sidebarListIcon: "flaticon-004-walkie-talkie",
        sidebarListText: "Open New Account",
      },
    ];
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
                  <h1>Emerging Markets CFD</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/services`}>
                        Services
                      </a>
                    </li>
                    <li>Emerging Markets CFDs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 col-12 order-1 order-lg-2">
                  <div className="service-details">
                    {/* service gallery */}
                    <ServiceGallery />

                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-12">
                          <h2>{t("emergingmarketcfd")}</h2>
                          <p>
                            We support trading into Emerging Markets Derivatives
                            which are not easily accessible by the global
                            participants
                          </p>
                          <p>
                            Our products offerings right now includes all
                            Commodities Derivatives (both Futures and Options)
                            that are currently listed on regulated Chinese
                            Exchanges
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>{t("software")}</h3>
                          <ul>
                            <li>ATPlatform Technology Limited</li>
                            <li>
                              ATP is able to provide cost-effective Spreader and
                              AutoTrader functions for traders doing onshore vs
                              offshore trading strategies
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>{t("faqs")}</h3>
                          <ul>
                            <li>{t("faqs1")}</li>
                          </ul>
                        </div>
                        {/* <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Advisory</h3>
                          <p>Hedging solutions</p>
                        </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-12 order-2 order-lg-1">
                  <Sidebar data={service_obj} />
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

        {/* Brand logo */}
        {/* <BrandLogoSlider background="grey-bg" /> */}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default withTranslation("translations")(Cfd);
