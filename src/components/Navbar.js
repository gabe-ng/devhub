import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem } from "react-materialize";

export default () => (
  <Navbar brand="DevHub" right>
    <NavItem>
       <NavLink to="/">
         Jobs
       </NavLink>
    </NavItem>
    <NavItem>
        <NavLink to="/articles">
          Articles
        </NavLink>
    </NavItem>
  </Navbar>
);
