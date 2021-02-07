import React from "react";
import { Container, Navbar } from "reactstrap";
import "./NavMenu.css";

import HoxWiLogo from "../assets/hoxwilogo.png";

function NavMenu() {
  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3"
        style={{ backgroundColor: "#da5899" }}
      >
        <Container>
          <a href="https://www.hoxwi.com">
            <img src={HoxWiLogo} alt="HoxWi logo" />
          </a>

          <a
            className="navbar-brand"
            href="https://www.hoxwi.com"
            style={{ color: "#fff" }}
          >
            HoxWi - Project
          </a>
        </Container>
      </Navbar>
    </header>
  );
}

export default NavMenu;
