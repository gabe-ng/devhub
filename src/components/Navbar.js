import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { star } from 'react-icons-kit/fa/star'

export default class Nav extends Component {
  render() {
    return <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
        <h5 className="my-0 mr-md-auto font-weight-normal">DEV HUB.</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <NavLink to="/favorites" className="p-2 text-dark">
            <Icon icon={star} />
          </NavLink>
          <NavLink to="/devhub" className="p-2 text-dark">
            Jobs
          </NavLink>
          <NavLink to="/articles" className="p-2 text-dark">
            Articles
          </NavLink>
        </nav>
      </div>;
  }
}
