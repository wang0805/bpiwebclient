import React, { Component } from "react";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { withTranslation } from "react-i18next";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { lang: "en" };
    this.handleScroll = this.handleScroll.bind(this);

    this.mobileMenuElement = React.createRef();
  }

  activeMobileMenu = () => {
    this.mobileMenuElement.current.toggleMobileMenu();
  };

  handleScroll() {
    if (this.mount) {
      this.setState({ scroll: window.scrollY });
    }
  }

  componentDidMount() {
    this.mount = true;
    const el = document.querySelector("nav");
    this.setState({ top: el.offsetTop, height: el.offsetHeight });
    window.addEventListener("scroll", this.handleScroll);
  }

  componentDidUpdate() {
    this.state.scroll > this.state.top
      ? (document.body.style.paddingTop = `${this.state.height}px`)
      : (document.body.style.paddingTop = 0);
  }

  componentWillUnmount() {
    this.mount = false;
  }

  handleClick = (x) => {
    let value = x;
    this.setState((prevState) => ({ lang: value }));
    this.props.i18n.changeLanguage(value);
  };

  render() {
    const { t } = this.props;

    return (
      <div>
        {/*====================  header area ====================*/}
        <div
          className={`header-area header-sticky header-sticky--default ${
            this.state.scroll > this.state.top ? "is-sticky" : ""
          }`}
        >
          <div className="header-area__desktop header-area__desktop--default">
            {/*=======  header top bar  =======*/}
            <div className="header-top-bar">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-4">
                    {/* top bar left */}
                    <div className="top-bar-left-wrapper">
                      <div className="social-links social-links--white-topbar d-inline-block">
                        <ul>
                          <li>
                            <a href="https://www.facebook.com/BPIFinancial/">
                              <i className="zmdi zmdi-facebook" />
                            </a>
                          </li>
                          {/* <li>
                            <a href="//twitter.com">
                              <i className="zmdi zmdi-twitter" />
                            </a>
                          </li>
                          <li>
                            <a href="//vimeo.com">
                              <i className="zmdi zmdi-vimeo" />
                            </a>
                          </li> */}
                          <li>
                            <a href="https://www.linkedin.com/company/bpifinancial/">
                              <i className="zmdi zmdi-linkedin-box" />
                            </a>
                          </li>
                          {/* <li>
                            <a href="//skype.com">
                              <i className="zmdi zmdi-skype" />
                            </a>
                          </li> */}
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-8">
                    {/* top bar right */}
                    <div className="top-bar-right-wrapper">
                      <ul className="nav justify-content-end">
                        {/* <li className="nav-item">
                          <a
                            className="nav-link"
                            href={`${process.env.PUBLIC_URL}/openaccount`}
                          >
                            {t("acctopening")}
                          </a>
                        </li> */}
                        <li className="nav-item">
                          <a
                            active
                            className="nav-link active"
                            href="#"
                            onClick={() => this.handleClick("en")}
                          >
                            ENG
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            onClick={() => this.handleClick("ch")}
                          >
                            中文
                          </a>
                        </li>
                      </ul>
                      {/* <a
                        href={`${process.env.PUBLIC_URL}/contact-us`}
                        className="ht-btn ht-btn--default d-inline-block"
                      >
                        CONTACT US
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header top bar  =======*/}
            {/*=======  header info area  =======*/}
            <div className="header-info-area">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-12">
                    <div className="header-info-wrapper align-items-center">
                      {/* logo */}
                      <div className="logo">
                        <Link to={`${process.env.PUBLIC_URL}/`}>
                          <img
                            src="assets/img/logo/bpi_logo.png"
                            className="img-fluid"
                            alt="Logo"
                            width="110"
                          />
                        </Link>
                      </div>
                      {/* header contact info */}
                      <div className="header-contact-info">
                        <div className="header-info-single-item">
                          <div className="header-info-single-item__icon">
                            <i className="zmdi zmdi-smartphone-android" />
                          </div>
                          <div className="header-info-single-item__content">
                            <h6 className="header-info-single-item__title">
                              {t("phone")}
                            </h6>
                            <p className="header-info-single-item__subtitle">
                              +65 6499 0618
                            </p>
                          </div>
                        </div>
                        <div className="header-info-single-item">
                          <div className="header-info-single-item__icon">
                            <i className="zmdi zmdi-home" />
                          </div>
                          <div className="header-info-single-item__content">
                            <h6 className="header-info-single-item__title">
                              {t("address")}
                            </h6>
                            <p className="header-info-single-item__subtitle">
                              Springleaf Tower #19-01 Singapore 079909
                            </p>
                          </div>
                        </div>
                      </div>
                      {/* mobile menu */}
                      <div
                        className="mobile-navigation-icon"
                        id="mobile-menu-trigger"
                        onClick={this.activeMobileMenu}
                      >
                        <i />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header info area =======*/}
            {/*=======  header navigation area  =======*/}
            <div className="header-navigation-area default-bg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    {/* header navigation */}
                    <div className="header-navigation header-navigation--header-default position-relative">
                      <div className="header-navigation__nav position-static">
                        <nav>
                          <ul>
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/`}>
                                {" "}
                                {t("home")}{" "}
                              </Link>
                            </li>
                            {/* <li className="has-children has-children--multilevel-submenu">
                              <Link to={`${process.env.PUBLIC_URL}/home`}>
                                {" "}
                                {t("home")}{" "}
                              </Link> 
                            <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/home-one`}
                                  >
                                    Homepage One
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/home-two`}
                                  >
                                    Homepage Two
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/home-three`}
                                  >
                                    Homepage Three
                                  </Link>
                                </li>
                              </ul> 
                            </li>*/}
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/about-us`}>
                                {t("about")}
                              </Link>
                            </li>
                            <li className="has-children has-children--multilevel-submenu">
                              <Link to={`${process.env.PUBLIC_URL}/services`}>
                                {t("service")}
                              </Link>
                              <ul className="submenu">
                                <li className="has-children has-children--multilevel-submenu">

                                  <Link
                                    to={`${process.env.PUBLIC_URL}/services`}
                                  >
                                    {t("service1")}
                                  </Link>
                                    <ul className="submenu">
                                      <li>
                                        <Link
                                          to={`${process.env.PUBLIC_URL}/clearing`}
                                        >
                                          {t("globalclearing")}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={`${process.env.PUBLIC_URL}/cfd`}>
                                          {t("emergingmarketcfd")}
                                        </Link>
                                      </li>
                                      <li>
                                        <Link to={`${process.env.PUBLIC_URL}/idb`}>
                                          {t("idb")}
                                        </Link>
                                      </li>
                                      <li>
                                       <a href="https://www.bpitradingsg.com/">
                                          Trade Facilitation
                                        </a>
                                      </li>
                                    </ul>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/software`}
                                  >
                                    Software
                                  </Link>
                                </li>
                                <li>
                                  <Link to={`${process.env.PUBLIC_URL}/`}>
                                    FAQ
                                  </Link>
                                </li>
                                {/* <li>
                                  <Link to={`${process.env.PUBLIC_URL}/idb`}>
                                    {t("idb")}
                                  </Link>
                                </li> */}
                                {/* <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/advisory`}
                                  >
                                    Advisory
                                  </Link>
                                </li> */}

                                {/* <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}
                                  >
                                    Service Details Right Sidebar
                                  </Link>
                                </li> */}
                              </ul>
                            </li>
                            {/* <li className="has-children has-children--multilevel-submenu">
                              <Link to={`${process.env.PUBLIC_URL}/projects`}>
                                PROJECT
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/projects`}
                                  >
                                    Project Page
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/project-details`}
                                  >
                                    Project Details
                                  </Link>
                                </li>
                              </ul>
                            </li> */}
                            {/* <li className="has-children has-children--multilevel-submenu">
                              <Link
                                to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
                              >
                                BLOG
                              </Link>
                              <ul className="submenu">
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
                                  >
                                    Blog Left Sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/blog-right-sidebar`}
                                  >
                                    Blog Right Sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}
                                  >
                                    Blog Details Left Sidebar
                                  </Link>
                                </li>
                                <li>
                                  <Link
                                    to={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}
                                  >
                                    Blog Details Right Sidebar
                                  </Link>
                                </li>
                              </ul>
                            </li> */}
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/contact-us`}>
                                {t("contact")}
                              </Link>{" "}
                            </li>
                            <li>
                              <Link
                                to={`${process.env.PUBLIC_URL}/openaccount`}
                              >
                                {t("acctopening")}
                              </Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*=======  End of header navigation area =======*/}
          </div>
        </div>
        {/*====================  End of header area  ====================*/}

        {/* Mobile Menu */}
        <MobileMenu ref={this.mobileMenuElement} />
      </div>
    );
  }
}

export default withTranslation("translations")(NavBar);
