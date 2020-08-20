import React, { Component } from "react";

class FeatureIcon extends Component {
  render() {
    let data = [
      {
        featureIcon: "feature-1.png",
        featureTitle: "SFC Type II Licence",
        featureDescription:
          "BPIF holds a Securities and Futures Commission (SFC) Type II Licence in Hong Kong to conduct clearing services of derivatives from global exchanges",
      },
      {
        featureIcon: "feature-2.png",
        featureTitle: "Commodities IDB",
        featureDescription:
          "BPIF has a regulatory exemption in Singapore to offer interdealer broking services for Negotiated Large Trades in commodities futures; SGX Iron Ore in particular",
      },
      {
        featureIcon: "feature-3.png",
        featureTitle: "Chinese derivatives CFD",
        featureDescription:
          "BPIF also offers electronic trading access on commodities derivatives from Chinese Exchanges such as DCE, INE and SHFE in the form of CFDs",
      },
    ];

    let Datalist = data.map((val, i) => {
      return (
        <div
          className="col-lg-4 col-md-6 col-12 section-space--bottom--30"
          key={i}
        >
          <div className="feature">
            <div className="icon">
              <img
                src={`assets/img/icons/${val.featureIcon}`}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="content">
              <h3>{val.featureTitle}</h3>
              <p>{val.featureDescription}</p>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        {/*Feature section start*/}
        <div
          className={`feature-section section-space--inner--100 ${this.props.background}`}
        >
          <div className="container">
            <div className="col-lg-12">
              <div className="feature-item-wrapper">
                <div className="row">{Datalist}</div>
              </div>
            </div>
          </div>
        </div>
        {/*Feature section end*/}
      </div>
    );
  }
}

export default FeatureIcon;
