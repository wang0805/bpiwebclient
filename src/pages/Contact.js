import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
class Contact extends Component {
  render() {
    let gourl = `https://www.google.com/maps/embed/v1/place?q=place_id:ChIJ60V1YBMZ2jER5-Hqxiv_iss&key=${process.env.REACT_APP_GOOGLE_API}`;
    console.log(process.env);
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
                  <h1>Contact Us</h1>
                  <ul className="page-breadcrumb">
                    <li>
                      <a href="/">Home</a>
                    </li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*====================  End of breadcrumb area  ====================*/}

        {/*====================  content page content ====================*/}
        <div className="page-wrapper section-space--inner--120">
          {/*Contact section start*/}
          <div className="conact-section">
            <div className="container">
              <div className="row section-space--bottom--50">
                <div className="col">
                  <div className="contact-map">
                    <iframe
                      title="google-map"
                      src={gourl}
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-12">
                  <div className="contact-information">
                    <h3>Contact Information</h3>
                    <ul>
                      <li>
                        <span className="icon">
                          <i className="ion-android-map" />
                        </span>
                        <span className="text">
                          <span>
                            3 Anson Road, Springleaf Tower #19-01, Singapore
                            079909
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-android-map" />
                        </span>
                        <span className="text">
                          <span>
                            Unit 3401-03, 34/F, China Merchants Tower, Shun Tak
                            Centre, No. 168-200 Connaught Road Central, Sheung
                            Wan, Hong Kong
                          </span>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-telephone-outline" />
                        </span>
                        <span className="text">
                          <a href="tel:1234567890">+65 6499 0618</a>
                          <a href="tel:1234567890">+852 3755 8228</a>
                        </span>
                      </li>
                      <li>
                        <span className="icon">
                          <i className="ion-ios-email-outline" />
                        </span>
                        <span className="text">
                          <a href="mailto:sales@bpifinancial.com">
                            Clearing@bpifinancial.com Sales@bpifinancial.com
                          </a>
                          {/* <a href="mailto:info@example.com">info@example.com</a> */}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-8 col-12">
                  <div className="contact-form">
                    <h3>Leave Your Message</h3>
                    <form
                      id="contact-form"
                      method="POST"
                      data-netlify="true"
                      data-netlify-recaptcha="true"
                      data-netlify-honeypot="bot-field"
                    >
                      {/* luring of bot */}
                      <input type="hidden" name="bot-field" />
                      <div className="row row-10">
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_name"
                            type="text"
                            placeholder="Your Name"
                          />
                        </div>
                        <div className="col-md-6 col-12 section-space--bottom--20">
                          <input
                            name="con_email"
                            type="email"
                            placeholder="Your Email"
                          />
                        </div>
                        <div className="col-12">
                          <textarea
                            name="con_message"
                            placeholder="Your Message"
                            defaultValue={""}
                          />
                        </div>
                        <div className="col-12">
                          <div data-netlify-recaptcha="true"></div>
                        </div>
                        <div className="col-12">
                          <button type="submit">Send Message</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*Contact section end*/}
        </div>
        {/*====================  End of content page content  ====================*/}

        {/* Footer */}
        <Footer />

        {/* Mobile Menu */}
        <MobileMenu />
      </div>
    );
  }
}

export default Contact;
