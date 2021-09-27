import React, { Component } from "react";
import NavBar from "../components/NavBar";
// import Sidebar from "./components/Sidebar";
import ServiceGallery from "./components/ServiceGallery";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { withTranslation } from "react-i18next";

class Clearing extends Component {
  render() {
    const { t } = this.props;

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
                    <li>Gloabl Clearing Services</li>
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
                {/* <div className="col-lg-8 col-12 order-1 order-lg-2"> */}
                <div className="col-lg-12 col-12 order-1 order-lg-2">
                  <div className="service-details">
                    {/* service gallery */}

                    <div className="align-items-center">
                      <ServiceGallery />
                    </div>

                    <div className="content section-space--top--30">
                      <div className="row">
                        <div className="col-12">
                          <h2>{t("globalclearing")}</h2>
                          <p>{t("clearing1")}</p>
                          {/* <p>{t("clearing2")}</p>
                          <p>{t("clearing3")}</p> */}
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>{t("Asia")}</h3>
                              <ul className="list-group list-group-flush">
                              <li className="list-group-item"><a href="https://www.asiapacificex.com/">Asia Pacific Exchange (APEX)</a></li>
                              <li className="list-group-item"><a href="https://www.bursamalaysia.com/">Bursa Malaysia (MDEX)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Dalian Commodity Exchange (DCE)</a></li>
                              <li className="list-group-item"><a href="https://www.dgcx.ae/">Dubai Gold & Commodities Exhcnage (DGCX)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Hong Kong Exchange (HKEX)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">ICE Futures Singapore</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Japan Exchange Group (JPX OSE TSE)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Korea Exchange (KRX)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Shanghai International Energy Exchange (INE)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Singapore Exchange (SGX)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Sydney Futures Exchange (SFE)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Taiwan Futures Exchange (TAIFEX)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Tokyo Financial Exchange (TIFFE)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Thailand Futures Exchange (TFEX)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Zhengzhou Commodity Exchange (ZCE)</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-6 col-12 section-space--top--30">
                          <h3>{t("europe")}</h3>
                              <ul className="list-group list-group-flush">
                                <li className="list-group-item"><a href="https://www.asiapacificex.com/">Eurex</a></li>
                                <li className="list-group-item"><a href="https://www.bursamalaysia.com/">London Metal Exchange (LME)</a></li>
                                <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Euronext Liffe (LIFFE)</a></li>
                                <li className="list-group-item"><a href="https://www.dgcx.ae/">ICE Futures Europe</a></li>
                              </ul>
                          <br/>
                          <h3>USA</h3>
                            <ul className="list-group list-group-flush">
                              <li className="list-group-item"><a href="https://www.asiapacificex.com/">Chicago Board of Trade (CBOT)</a></li>
                              <li className="list-group-item"><a href="https://www.bursamalaysia.com/">New York Merchantile Exchange (NYMEX)</a></li>
                              <li className="list-group-item"><a href="https://www.dce.com.cn/DCE/">Commodity Exchange Inc (COMEX)</a></li>
                              <li className="list-group-item"><a href="https://www.dgcx.ae/">Chicago Merchantile Exchange (CME)</a></li>
                              <li className="list-group-item"><a href="https://www.dgcx.ae/">Chicago Board Options Exchange (CBOE)</a></li>
                              <li className="list-group-item"><a href="https://www.dgcx.ae/">ICE Futures US (ICE US)</a></li>

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
                  {/* <Sidebar data={service_obj} /> */}
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

export default withTranslation("translations")(Clearing);
