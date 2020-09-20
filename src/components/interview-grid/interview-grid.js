// @flow
import React from 'react';

import CardGridItem from './interview-grid-item.component'
import './interview-grid.scss';

type Props = {
  items: [],
  onClick: Function
};

const InterviewGrid = (props: Props) => {
  return (
    <div className="container">
    <div className="columns is-multiline is-8">
      {(props.items || []).map(item => (
        <CardGridItem
          interview={item}
          onClick={slug => props.onClick(slug)}
          key={item.slug}
        />
      ))}
    </div>
  </div>
  );
};

export default InterviewGrid;
