import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
class ServiceTabExample extends Component {
  render() {
    /* service tab menu */
    let serviceTabMenuData = [
      {
        iconName: "flaticon-002-welding",
        tabMenuName: "Global Clearing",
      },
      {
        iconName: "flaticon-004-walkie-talkie",
        tabMenuName: "Emerging Markets CFD",
      },
      {
        iconName: "flaticon-015-cart",
        tabMenuName: "Inter-Dealer Broker",
      },
      { iconName: "flaticon-010-tank-1", tabMenuName: "Advisory" },
    ];

    let serviceTabMenuDatalist = serviceTabMenuData.map((val, i) => {
      return (
        <Tab key={i}>
          {" "}
          <span className="icon">
            <i className={val.iconName} />
          </span>{" "}
          <span className="text">{val.tabMenuName}</span>
        </Tab>
      );
    });

    /* service tab content */

    let serviceTabContentData = [
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Global Clearing Services",
        contentDesc:
          "BPIFG provides market trading access and clearing services for global derivative markets across most Exchanges and asset classes including Internationalized derivatives from Chinese Exchanges",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Access to Emerging Markets Derivatives via CFD",
        contentDesc:
          "BPIF provides Electronic Trading Access to Emerging Commodity Derivatives, specifically Chinese Exchanges (DCE, ZCE, INE) cleared Commoditiy Derivatives",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Inter-Dealer Broking Services",
        contentDesc:
          "BPIFG acts as an intermediary to facilitate price discovery and enhance liquidity in OTC brokered derivatives such as SGX cleared iron ore and coking products",
        serviceLink: "service-details-left-sidebar",
      },
      {
        bgUrl: "service-tab1.jpg",
        contentTitle: "Advisory",
        contentDesc:
          "Working in close collaboration with our institutional clients, BPIF Group not only helps develop tailored hedging solutions but also facilitates in the execution of such hedging strategies",
        serviceLink: "service-details-left-sidebar",
      },
    ];

    let serviceTabContentDatalist = serviceTabContentData.map((val, i) => {
      return (
        <TabPanel key={i}>
          <div
            className="service-tab__single-content-wrapper"
            style={{
              backgroundImage: `url(assets/img/backgrounds/${val.bgUrl})`,
            }}
          >
            <div className="service-tab__single-content">
              <h3 className="service-tab__title">{val.contentTitle}</h3>
              <p className="service-tab__text">{val.contentDesc}</p>
              <a
                href={`${process.env.PUBLIC_URL}/${val.serviceLink}`}
                className="see-more-link"
              >
                SEE MORE
              </a>
            </div>
          </div>
        </TabPanel>
      );
    });

    return (
      <div>
        {/*====================  service tab area ====================*/}
        <div className="service-tab-area section-space--inner--120">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area text-center">
                  <h2 className="section-title section-space--bottom--50">
                    Our Services <span className="title-icon" />
                  </h2>
                </div>
              </div>
              <div className="col-lg-12">
                {/* service tab wrapper */}

                <div className="service-tab-wrapper">
                  <Tabs>
                    <div className="row no-gutters">
                      <div className="col-md-4">
                        <TabList>
                          <div className="service-tab__link-wrapper">
                            {serviceTabMenuDatalist}
                          </div>
                        </TabList>
                      </div>

                      <div className="col-md-8">
                        {serviceTabContentDatalist}
                      </div>
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of service tab area  ====================*/}
      </div>
    );
  }
}

export default ServiceTabExample;
