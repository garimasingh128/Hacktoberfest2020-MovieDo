// @flow
import React, { Component } from "react";
import Image from "gatsby-image";
import { Link } from "gatsby";

import "./interview-grid.scss";

type InterviewGridItemProps = {
  interview: any,
  onClick?: Function
};

class InterviewGridItem extends Component<InterviewGridItemProps> {
  render() {
    const { interview } = this.props;
    return (
      <div className="column is-one-third-desktop is-half-tablet is-full-mobile is-one-quarter-fullhd">
        <div className="box interview-grid-item has-text-centered">
          <div className="interview-grid-item__avatar">
            <figure className="image is-96x96">
              <Image
                fluid={interview.avatar.childImageSharp.fluid}
                alt={interview.title}
                style={{ width: 96, height: 96, borderRadius: "50%" }}
              />
            </figure>
          </div>
          <div style={{ marginBottom: 10 }}>
            <p className="title is-5">{interview.name}</p>
            <p className="subtitle is-7">{interview.position}</p>
          </div>
          <p className="has-text-grey">{interview.title}</p>
        </div>
      </div>
    );
  }
}

export default InterviewGridItem;
