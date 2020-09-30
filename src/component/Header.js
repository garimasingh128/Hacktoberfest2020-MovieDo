import React, { Fragment, Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Forkme from './Forkme';
import "bootstrap/dist/css/bootstrap.min.css";

export default class Header extends Component {
  render() {
    return (
      <Fragment>
       <Forkme />
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="https://moviedo.netlify.app">
            MovieGo
          </Navbar.Brand>
        </Navbar>
      </Fragment>
    );
  }
}
