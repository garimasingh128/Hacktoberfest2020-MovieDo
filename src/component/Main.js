import React, { Component } from "react";

import Card from "react-bootstrap/Card";

import CardColumns from "react-bootstrap/CardColumns";

import "./ownStyle.css";

import data from "../data/data.json";

const newdata = data.map((data) => {
  return (
    <Card style={{flex: '0 0 32.22222%'}} key={data.name}>
      <Card.Body>
        <Card.Title>{data.desc}</Card.Title>
        <Card.Text>{data.name}</Card.Text>

        <button className="btn-primary">{data.rate}</button>
      </Card.Body>
    </Card>
  );
});

export default class Main extends Component {
  render() {
    return <CardColumns style={{display: 'inline-flex', flexDirection: 'row',flexWrap:'wrap'}} className=" m-3 p-3 owncard "> {newdata} </CardColumns>;
  }
}
