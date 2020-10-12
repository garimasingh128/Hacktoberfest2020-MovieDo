import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";

import "./ownStyle.css";

import data from "../data/data.json";

const newdata = data.map((data) => {
  return (
    <div class="card" key={data.name}>
      <div class="card-header">{data.name} <br></br> <a className="btn-primary">{data.rate}</a></div>
        <div class="card-body">{data.desc} </div>
    </div>
  );
});

export default class Main extends Component {
  render() {
    return <CardColumns className="mt-2 mr-2 ml-2"> {newdata} </CardColumns>;
  }
}

