import React, { Component } from "react";
import brochure from "../../../public/assets/pdf/brochure.pdf";

class Sidebar extends Component {
  render() {
    const { data } = this.props;
    console.log(data);

    let Datalist = data.map((val, i) => {
      return (
        <li key={i}>
          <a href={val.sidebarListLink}>
            <i className={val.sidebarListIcon} />
            {val.sidebarListText}
          </a>
        </li>
      );
    });

    return (
      <div>
        <div className="sidebar-wrapper">
          <div className="sidebar">
            <h3 className="sidebar-title">Services</h3>
            <ul className="sidebar-list">{Datalist}</ul>
          </div>
          <div className="sidebar">
            <h3 className="sidebar-title">Download Brochure</h3>
            <ul className="sidebar-list">
              <li>
                <a href={brochure}>
                  <i className="fa fa-file-pdf-o" />
                  Brochure.pdf
                </a>
              </li>
              {/* <li>
                <a href="/">
                  <i className="fa fa-file-word-o" />
                  Brochure.doc
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
