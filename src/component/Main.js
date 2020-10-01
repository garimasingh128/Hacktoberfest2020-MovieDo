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
      </Card.Body>
    </Card>
  );
});

const Main = () => {
  return (
    <React.Fragment>
      <CardColumns className=" m-3 p-3 owncard "> {newdata} </CardColumns>;
    </React.Fragment>
  );
};

export default Main;
