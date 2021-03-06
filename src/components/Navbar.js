import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow sticky-top">
        <h5 className="my-0 mr-md-auto font-weight-bold text-dark">DEV HUB.</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <NavLink to="/devhub" className="p-2 text-dark">
            Jobs
          </NavLink>
          <NavLink to="/devhub/articles" className="p-2 text-dark">
            Articles
          </NavLink>
          <NavLink to="/devhub/links" className="p-2 text-dark">
            Links
          </NavLink>
        </nav>
      </div>
    );
  }
}
