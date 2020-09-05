import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./store/reducer";
import { I18nextProvider } from "react-i18next";
import i18n from "../i18n";

import "./index.scss";
import HomeOne from "./HomeOne";
// import HomeTwo from "./HomeTwo";
// import HomeThree from "./HomeThree";
import About from "./pages/About";
import AcctOpening from "./pages/Accountopening";
import Services from "./service/Services";
// import ServiceDetailsLeftSidebar from "./service/ServiceDetailsLeftSidebar";
import Clearing from "./service/Clearing";
import Cfd from "./service/Cfd";
import Idb from "./service/Idb";
// import ServiceDetailsRightSidebar from "./service/ServiceDetailsRightSidebar";
import Projects from "./project/Projects";
import ProjectDetails from "./project/ProjectDetails";
import BlogLeftSidebar from "./blog/BlogLeftSidebar";
import BlogRightSidebar from "./blog/BlogRightSidebar";
import BlogDetailsLeftSidebar from "./blog/BlogDetailsLeftSidebar";
import BlogDetailsRightSidebar from "./blog/BlogDetailsRightSidebar";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/404";
import NoMAtch from "./pages/404";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

class Root extends Component {
  render() {
    return (
      <BrowserRouter basename={"/"}>
        <Switch>
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/`}
            component={HomeOne}
          />
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/home`}
            component={HomeOne}
          /> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/about-us`}
            component={About}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/services`}
            component={Services}
          />
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details-left-sidebar`}
            component={ServiceDetailsLeftSidebar}
          /> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/clearing`}
            component={Clearing}
          />
          <Route exact path={`${process.env.PUBLIC_URL}/cfd`} component={Cfd} />
          <Route exact path={`${process.env.PUBLIC_URL}/idb`} component={Idb} />
          {/* <Route
            exact
            path={`${process.env.PUBLIC_URL}/service-details-right-sidebar`}
            component={ServiceDetailsRightSidebar}
          /> */}
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/openaccount`}
            component={AcctOpening}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/projects`}
            component={Projects}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/project-details`}
            component={ProjectDetails}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-left-sidebar`}
            component={BlogLeftSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-right-sidebar`}
            component={BlogRightSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-details-left-sidebar`}
            component={BlogDetailsLeftSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/blog-details-right-sidebar`}
            component={BlogDetailsRightSidebar}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/contact-us`}
            component={Contact}
          />
          <Route
            exact
            path={`${process.env.PUBLIC_URL}/404`}
            component={PageNotFound}
          />
          <Route component={NoMAtch} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <Root />
    </I18nextProvider>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.register();
