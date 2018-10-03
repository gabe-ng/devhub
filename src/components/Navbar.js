import React from "react";
import { Navbar, NavItem } from "react-materialize";

export default () => (
    <Navbar brand='logo' right>
        <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
        <NavItem href='components.html'>Components</NavItem>
    </Navbar>
);
