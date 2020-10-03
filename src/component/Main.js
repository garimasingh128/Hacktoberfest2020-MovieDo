import React, { Component } from "react";
import "./ownStyle.css";

import data from "../data/data.json";

const newdata = data.map((data) => {
  return (
        <div key={data.name} className="card">
          <img src={data.poster} />
            <div className="descriptions">
           <h1><b>{data.name}</b></h1>
                <p>
                {data.desc}
                </p>
                
  <div className="star btn-primary" ><span><b>Ratings:</b></span>{data.rate}</div>
            
            </div>
        </div>

  );
});

export default class Main extends Component {
  render() {
    return <div className="wrapper"> {newdata} </div>;
  }
}
