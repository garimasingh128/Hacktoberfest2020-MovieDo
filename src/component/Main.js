import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";

import "./ownStyle.css";

import data from "../data/data.json";

const newdata = data.map((data) => {
  return (
    <Card key={data.name}>
      <Card.Body>
        <Card.Text>{data.name}</Card.Text>
        <p className="h5">{data.desc}</p>
        <a className="btn-primary">{data.rate}</a>
      </Card.Body>
    </Card>
  );
});

export default class Main extends Component {
  render() {
    return <div style={{ minHeight: '84vh', height: 'auto' }}>
      <CardColumns className=" m-3 p-3 owncard "> {newdata} </CardColumns>
    </div>;
  }
}
