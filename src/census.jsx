import React from 'react';

const Census = (props) => (
  <div className={props.classStr}>
    <h2>Census: </h2>
    <span id="census">{props.census}</span>
  </div>
);

export default Census;
