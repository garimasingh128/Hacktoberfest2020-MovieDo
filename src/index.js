import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Main from "./component/Main";
import "./Index.css";

const Place = () => {
  return (
    <Fragment>
      <Header />
      <Main />
      <Footer />
    </Fragment>
  );
};

ReactDOM.render(<Place />, document.getElementById("root"));
