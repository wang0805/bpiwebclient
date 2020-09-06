import React, { Component } from "react";
import NavBar from "../components/NavBar";
// import BrandLogoSlider from "../components/BrandLogoSlider";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { withTranslation } from "react-i18next";

class Services extends Component {
  render() {
    const { t } = this.props;

    let data = [
      {
        pageLink: "clearing",
        img: "service1.jpg",
        iconClass: "flaticon-002-welding",
        serviceTitle: "Global Clearing Services",
        serviceSubtitle: t("clearing"),
      },
      {
        pageLink: "cfd",
        img: "service2.jpg",
        iconClass: "flaticon-004-walkie-talkie",
        serviceTitle: "Emerging Markets CFD",
        serviceSubtitle:
          "BPIF provides Electronic Trading Access to Emerging Commodity Derivatives, specifically Chinese Exchanges cleared Commoditiy Derivatives",
      },
      {
        pageLink: "idb",
        img: "service3.jpg",
        iconClass: "flaticon-015-cart",
        serviceTitle: "Inter-Dealer Broker",
        serviceSubtitle:
          "BPIFG acts as an intermediary to facilitate price discovery and enhance liquidity in OTC brokered derivatives such as SGX cleared iron ore and coking products",
      },
      // {
      //   pageLink: "advisory",
      //   img: "service-3.jpg",
      //   iconClass: "flaticon-010-tank-1",
      //   serviceTitle: "Advisory",
      //   serviceSubtitle:
      //     "Working in close collaboration with our institutional clients, BPIF Group not only helps develop tailored hedging solutions but also facilitates in the execution of such hedging strategies",
      // },
      //   {
      //     pageLink: "service-details-left-sidebar",
      //     img: "service-2.jpg",
      //     iconClass: "flaticon-004-walkie-talkie",
      //     serviceTitle: "Land Minning",
      //     serviceSubtitle:
      //       "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor",
      //   },
      //   {
      //     pageLink: "service-details-left-sidebar",
      //     img: "service-1.jpg",
      //     iconClass: "flaticon-002-welding",
      //     serviceTitle: "Work Management",
      //     serviceSubtitle:
      //       "Lorem ipsum dolor sit amet consect adipisi elit sed do eiusm tempor",
      //   },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="service-grid-item">
            <div className="service-grid-item__image">
              <div className="service-grid-item__image-wrapper">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  <img
                    src={`assets/img/service/${val.img}`}
                    className="img-fluid"
                    alt="Service Grid"
                  />
                </a>
              </div>
              <div className="icon">
                <i className={val.iconClass} />
              </div>
            </div>
            <div className="service-grid-item__content">
              <h3 className="title">
                <a href={`${process.env.PUBLIC_URL}/${val.pageLink}`}>
                  {val.serviceTitle}
                </a>
              </h3>
              <p className="subtitle">{val.serviceSubtitle}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.pageLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </div>
      );
    });

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
                  <h1>Service</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Services</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  service page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Service section start*/}
          <div className="service-section">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="service-item-wrapper">
                    <div className="row">{Datalist}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Service section end*/}
        </div>

        {/*====================  End of service page content  ====================*/}

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

export default withTranslation("translations")(Services);
