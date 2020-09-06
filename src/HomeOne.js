import React, { Component } from "react";
import NavBar from "./components/NavBar";
import HeroSliderOne from "./components/HeroSliderOne";
// import ServiceGridSlider from "./components/ServiceGridSlider";
import ServiceTab from "./components/ServiceTab";
// import Funfact from "./components/Funfact";
import VideoCta from "./components/VideoCta";
// import ProjectSlider from "./components/ProjectSlider";
// import TeamJob from "./components/TeamJob";
import TeamMemberGrid from "./components/TeamMemberGrid";
// import TestimonialSlider from "./components/TestimonialSlider";
// import BlogGrid from "./components/BlogGrid";
// import BrandLogoSlider from "./components/BrandLogoSlider";
import Footer from "./components/Footer";

class HomeOne extends Component {
  render() {
    return (
      <div>
        {/* Navigation bar */}
        <NavBar />

        {/* Hero slider */}
        <HeroSliderOne />

        {/* Fun fact */}
        {/* <Funfact /> */}

        {/* Video CTA */}
        <VideoCta />

        {/* Service grid slider */}
        <ServiceTab />

        {/* Project Slider */}
        {/* <ProjectSlider /> */}

        {/* Team job */}
        {/* <TeamJob /> */}

        {/* Team */}
        <TeamMemberGrid />

        {/* Testimonial Slider */}
        {/* <TestimonialSlider /> */}

        {/* Blog grid */}
        {/* <BlogGrid background="grey-bg" /> */}

        {/* Brand logo */}
        {/* <BrandLogoSlider background="" /> */}

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default HomeOne;
