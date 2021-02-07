import React, { Component } from "react";
import { Container } from "reactstrap";
import NavMenu from "./NavMenu";
import Footer from "./Footer";

import "./Layout.css";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div className="main-container">
        <NavMenu />
        <Container>{this.props.children}</Container>
        <Footer />
      </div>
    );
  }
}
