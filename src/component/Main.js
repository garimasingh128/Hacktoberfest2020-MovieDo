import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";

import "./ownStyle.css";

import data from "../data/data.json";

const newdata = data.map((data) => {
  return (
    <Card key={data.name}>
      <Card.Body>
        <Card.Title>{data.desc}</Card.Title>
        <Card.Text>{data.name}</Card.Text>
        <a className="btn-primary">{data.rate}</a>
        <p><a target="_blank" href={data.link} id="link">Read More From Wikipedia</a></p>
      </Card.Body>
    </Card>
  );
});

export default class Main extends Component {
  render() {
    return <CardColumns className=" m-3 p-3 owncard "> {newdata} </CardColumns>;
  }
}
