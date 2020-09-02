import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";

class Idb extends Component {
  render() {
    let service_obj = [
      {
        sidebarListLink: "service-details-left-sidebar",
        sidebarListIcon: "flaticon-015-cart",
        sidebarListText: "Products",
      },
      {
        sidebarListLink: "service-details-left-sidebar",
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
                  <h1>Service Details</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/services`}>
                        Services
                      </a>
                    </li>
                    <li>Service Details</li>
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
                            BPIFG provides market trading access and clearing
                            services for global derivative markets across all
                            developed Exchanges around the world and asset
                            classes
                          </p>
                          <p>
                            We are also able to provide clearing services for
                            Internationalized derivatives from Chinese Exchanges
                            such as Dalian Commodity Exchange cleared Iron ore,
                            and all Shanghai International Energy Exchange
                            cleared commodity derivatives
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>
                            Access to Emerging Markets Derivatives via CFD
                          </h3>
                          <p>
                            BPIF also provides Electronic Trading Access to
                            Chinese Exchanges cleared commodity derivatives. On
                            top of internationalized products, we are also able
                            to clear all other derivatives via the CFD
                            instrument
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Inder-Dealer Broker</h3>
                          <p>
                            BPIFG acts as an intermediary for mainly but not
                            limited to SGX cleared Iron Ore (Platts 62%, MB 65%,
                            LP) and Coking Coal derivatives
                          </p>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Advisory</h3>
                          <p>Hedging solutions</p>
                        </div>
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

export default Idb;
