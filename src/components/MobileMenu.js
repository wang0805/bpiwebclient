import React, { Component } from "react";
import { Link } from "react-router-dom";

class MobileMenu extends Component {
  state = {
    active: false,
  };

  toggleMobileMenu = () => {
    this.setState({
      active: !this.state.active,
    });
  };

  componentDidMount() {
    var offCanvasNav = document.getElementById("offcanvas-navigation");
    var offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i></i></span>"
      );
    }

    var menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    var numMenuExpand = menuExpand.length;

    function sideMenuExpand() {
      if (this.parentElement.classList.contains("active") === true) {
        this.parentElement.classList.remove("active");
      } else {
        for (let i = 0; i < numMenuExpand; i++) {
          menuExpand[i].parentElement.classList.remove("active");
        }
        this.parentElement.classList.add("active");
      }
    }

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", sideMenuExpand);
    }
  }

  render() {
    return (
      <div>
        {/*=======  offcanvas mobile menu  =======*/}
        <div
          className={`offcanvas-mobile-menu ${
            this.state.active ? "active" : ""
          } `}
          id="mobile-menu-overlay"
        >
          <a
            href="#/"
            className="offcanvas-menu-close"
            id="mobile-menu-close-trigger"
            onClick={this.toggleMobileMenu}
          >
            <i className="ion-android-close" />
          </a>
          <div className="offcanvas-wrapper">
            <div className="offcanvas-inner-content">
              {/* <div className="offcanvas-mobile-search-area">
                <form action="#">
                  <input type="search" placeholder="Search ..." />
                  <button type="submit">
                    <i className="fa fa-search" />
                  </button>
                </form>
              </div> */}
              <nav className="offcanvas-navigation" id="offcanvas-navigation">
                <ul>
                  <li className="menu-item-has-children">
                    <Link to={`${process.env.PUBLIC_URL}/`}>HOME</Link>
                    {/* <ul className="sub-menu">
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/`}>Home</Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/home-two`}>
                          Homepage Two
                        </Link>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/home-three`}>
                          Homepage Three
                        </Link>
                      </li>
                    </ul> */}
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/about-us`}>ABOUT</Link>
                  </li>
                  <li className="menu-item-has-children">
                    <Link to={`${process.env.PUBLIC_URL}/services`}>
                      SERVICE
                    </Link>
                    <ul className="sub-menu">
                      <li className="">
                        <Link to={`${process.env.PUBLIC_URL}/services`}>
                          Service
                        </Link>
                          <ul className="sub-menu">
                            <li>
                              <Link to={`${process.env.PUBLIC_URL}/clearing`}>
                                Global Clearing
                              </Link>
                              <Link to={`${process.env.PUBLIC_URL}/cfd`}>
                                Emerging Market CFD
                              </Link>
                              <Link to={`${process.env.PUBLIC_URL}/idb`}>
                                Inter-Dealer Broking
                              </Link>
                            </li>
                          </ul>
                      </li>
                      <li>
                        <Link to={`${process.env.PUBLIC_URL}/clearing`}>
                          Software
                        </Link>
                        <Link to={`${process.env.PUBLIC_URL}/`}>
                          FAQ
                        </Link>
           
                        {/* <Link to={`${process.env.PUBLIC_URL}/advisory`}>
                          Advisory
                        </Link> */}
                      </li>
                      {/* <li>
                        <Link
                          to={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}
                        >
                          Service Details Right Sidebar
                        </Link>
                      </li> */}
                    </ul>
                  </li>
                  {/* <li className="menu-item-has-children">
                                        <Link to={`${process.env.PUBLIC_URL}/projects`} >PROJECT</Link>
                                        <ul className="sub-menu">
                                            <li><Link to={`${process.env.PUBLIC_URL}/projects`} >Project Page</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/project-details`}>Project Details</Link></li>
                                        </ul>
                                    </li> */}
                  {/* <li className="menu-item-has-children">
                                        <Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>BLOG</Link>
                                        <ul className="sub-menu">
                                            <li><Link to={`${process.env.PUBLIC_URL}/blog-left-sidebar`}>Blog Left Sidebar</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/blog-right-sidebar`}>Blog Right Sidebar</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}>Blog Details Left Sidebar</Link></li>
                                            <li><Link to={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}>Blog Details Right Sidebar</Link></li>
                                        </ul>
                                    </li> */}
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/contact-us`}>
                      CONTACT
                    </Link>{" "}
                  </li>
                  <li>
                    <Link to={`${process.env.PUBLIC_URL}/openaccount`}>
                      OPEN ACCOUNT
                    </Link>{" "}
                  </li>
                </ul>
              </nav>
              <div className="offcanvas-widget-area">
                <div className="off-canvas-contact-widget">
                  <div className="header-contact-info">
                    <ul className="header-contact-info__list">
                      <li>
                        <i className="ion-android-phone-portrait" />{" "}
                        <a href="tel://12452456012">+65 6499 0618 </a>
                      </li>
                      <li>
                        <i className="ion-android-mail" />{" "}
                        <a href="mailto:info@yourdomain.com">
                          Sales@bpifinancial.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*Off Canvas Widget Social Start*/}
                <div className="off-canvas-widget-social">
                  <a
                    href="https://www.facebook.com/BPIFinancial/"
                    title="Facebook"
                  >
                    <i className="fa fa-facebook" />
                  </a>
                  {/* <a href="#/" title="Twitter">
                    <i className="fa fa-twitter" />
                  </a> */}
                  <a
                    href="https://www.linkedin.com/company/bpifinancial/"
                    title="LinkedIn"
                  >
                    <i className="fa fa-linkedin" />
                  </a>
                  {/* <a href="#/" title="Youtube">
                    <i className="fa fa-youtube-play" />
                  </a>
                  <a href="#/" title="Vimeo">
                    <i className="fa fa-vimeo-square" />
                  </a> */}
                </div>
                {/*Off Canvas Widget Social End*/}
              </div>
            </div>
          </div>
        </div>
        {/*=======  End of offcanvas mobile menu  =======*/}
      </div>
    );
  }
}

export default MobileMenu;
