import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { withTranslation } from "react-i18next";

class ServiceTabExample extends Component {
  render() {
    const { t } = this.props;

    /* service tab menu */
    let serviceTabMenuData = [
      {
        iconName: "flaticon-earth-globe",
        tabMenuName: t("globalclearing"),
      },
      {
        iconName: "flaticon-stats",
        tabMenuName: t("emergingmarketcfd"),
      },
      {
        iconName: "flaticon-customer-service",
        tabMenuName: t("idb"),
      },
      { iconName: "flaticon-advisor", tabMenuName: t("advisory") },
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
        bgUrl: "service1.png",
        contentTitle: t("globalclearing"),
        contentDesc: t("globalclearingwrite"),
        serviceLink: "clearing",
      },
      {
        bgUrl: "service2.png",
        contentTitle: t("emergingmarketcfd"),
        contentDesc: t("emwrite"),
        serviceLink: "cfd",
      },
      {
        bgUrl: "service3.png",
        contentTitle: t("idb"),
        contentDesc: t("idbwrite"),
        serviceLink: "idb",
      },
      {
        bgUrl: "service4.png",
        contentTitle: t("advisory"),
        contentDesc: t("advisorywrite"),
        serviceLink: "advisory",
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
                {t("seemore")}
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

export default withTranslation("translations")(ServiceTabExample);
