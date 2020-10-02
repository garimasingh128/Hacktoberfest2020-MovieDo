import React, { Component } from "react";
import CardColumns from "react-bootstrap/CardColumns";
import Review from "./Review";

import "./ownStyle.css";
import data from "../data/data.json";

export default class Main extends Component {
  newdata = data.map((data, index) => {
    return (
      <Review key={index} description={data.desc} title={data.name} rating={data.rate} />
    )
  })

  render() {
    return (
      <section className="main">
        <div className="container-fluid">
          <CardColumns>{this.newdata}</CardColumns>
        </div>
      </section>
    )
  }
}
