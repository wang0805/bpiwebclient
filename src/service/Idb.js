import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { withTranslation } from "react-i18next";

class Idb extends Component {
  render() {
    const { t } = this.props;

    let service_obj = [
      {
        sidebarListLink: "idb",
        sidebarListIcon: "flaticon-015-cart",
        sidebarListText: "Products",
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
                  <h1>Inter-Dealer Broking</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>
                      <a href={`${process.env.PUBLIC_URL}/services`}>
                        Services
                      </a>
                    </li>
                    <li>Inter-Dealer Broking</li>
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
                <div className="col-lg-12 col-12 order-1 order-lg-2">
                  <div className="service-details">
                    {/* service gallery */}
                    <ServiceGallery />

                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-12">
                          <h2>{t("idb")}</h2>
                          <p>{t("idb1")}</p>
                        </div>
                      </div>
                    </div>
                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>Bulk Commodities Brokerage</h3>
                            <p>
                              BPI Financial offers over-the-counter broking across a range of commodities including bulk commodities, base and precious metals
                            </p>
                            <p>
                              This includes Iron Ore (platts 62% Index, MB 65% Index, Lump Premium), Forweight Freight Agreements (FFA), Coal and Energy products
                            </p>
                            <p>
                              By leveraging on our existing network and also working with a new client base, within about six months we have become the dominant provider in the broking of M42 coal derivatives
                            </p>                 
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>RMB Denominated Rrokerage</h3>
                          <p>
                            In early 2021, BPI Financial launched a team of brokers in Shanghai offering renminbi-denominated iron ore swaps, to target physical traders in the iron ore space that need to hedge their procurement and sales 
                          </p>
                           <p>
                            Building on its success, the team has expanded both in size and in terms of products to also focus on renminbi-denominated steel products
                          </p> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <div className="col-lg-4 col-12 order-2 order-lg-1">
                  <Sidebar data={service_obj} />
                </div> */}
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

export default withTranslation("translations")(Idb);
