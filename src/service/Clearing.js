import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

class Clearing extends Component {
  render() {
    let service_obj = [
      {
        sidebarListLink: "clearing",
        sidebarListIcon: "flaticon-015-cart",
        sidebarListText: "Products",
      },
      {
        sidebarListLink: "clearing",
        sidebarListIcon: "flaticon-010-tank-1",
        sidebarListText: "Software",
      },
      {
        sidebarListLink: "clearing",
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
                  <h1>Global Clearing Services</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/services`}>
                        Services
                      </a>
                    </li>
                    <li>Global Clearing Services</li>
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
                          <h2>Global Clearing Services</h2>
                          <p>
                            We support trading into product derivatives listed
                            into almost all exchanges around the world including
                            but not limited to SGX, CME group of exchanges, ICE,
                            HKEX, OSE, etc
                          </p>
                          <p>
                            We are able to clear OTC and voice-brokered products
                            such as Forward Freight Agreement (FFA) into the
                            various exchanges as well such as CME Clearport, SGX
                            Titan and webICE
                          </p>
                          <p>
                            We also support trading into internationalized
                            products listed on Chinese exchanges such as Dalian
                            Commodity Exchange listed Iron ore futures and all
                            the derivatives listed under Shanghai International
                            Energy Exchange
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Software</h3>
                          <ul>
                            <li>ATPlatform Technology Limited</li>
                            <li>CQG suite of products</li>
                            <li>TT Futures Trading Platform</li>
                          </ul>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>FAQs</h3>
                          <ul>
                            <li>
                              Click on the Open New Account tab to obtain a
                              secure link via email for account opening forms
                            </li>
                            <li>{null}</li>
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

export default Clearing;
