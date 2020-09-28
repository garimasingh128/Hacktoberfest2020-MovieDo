import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";

import "./ownStyle.css";

import data from "../data/data.json";

const newdata = data.map((data) => {
  return (
    <Card key={data.id}>
      <Card.Body>
        <Card.Text>{data.name}</Card.Text>
        <p className="rating">{data.rate}</p>
        <Card.Title>
          <span>{data.desc}</span>
        </Card.Title>
      </Card.Body>
    </Card>
  );
});

export default class Main extends Component {
  render() {
    return <CardColumns className=" m-3 p-3 owncard "> {newdata} </CardColumns>;
  }
}
