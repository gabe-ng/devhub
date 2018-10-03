import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
  render() {
    const navStyle = {
      backgroundColor: "lightGreen"
    };

    return (
      <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 class="my-0 mr-md-auto font-weight-normal">DEV HUB.</h5>
        <nav class="my-2 my-md-0 mr-md-3">
          <NavLink to="/favorites" className="p-2 text-dark">
            STAR
          </NavLink>
          <NavLink to="/" className="p-2 text-dark">
            Jobs
          </NavLink>
          <NavLink to="/articles" className="p-2 text-dark">
            Articles
          </NavLink>
        </nav>
      </div>
    );
  }
}
