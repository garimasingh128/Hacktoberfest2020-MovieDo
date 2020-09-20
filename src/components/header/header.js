// @flow
import React, { Component } from "react";
import { Link } from "gatsby";
import { OutboundLink } from "gatsby-plugin-gtag";

import Logo from "../../images/logo.png";
import "./header.scss";

type Props = {
  onClick?: Function
};

class Header extends Component<Props> {
  render() {
    return (
      <nav
        className="navbar is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="https://moviedo.netlify.app">
              <OutboundLink
                href="https://moviedo.netlify.app"
                className="button is-primary"
              >
                MovieDo
              </OutboundLink>
            </Link>
          </div>
          <div className="navbar-item">
            <OutboundLink
              href="https://github.com/garimasingh128/Hacktoberfest2020-MovieDo"
              className="button is-primary"
            >
              Get your reviews featured here!
            </OutboundLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
