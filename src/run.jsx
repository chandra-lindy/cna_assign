import React, { Component } from 'react';

const Run = (props) => (
  <div className="run">
    {props.run.map((el, i) => {
      return <span className="room" key={i}>{el}</span>;
    })}
  </div>
);

export default Run;
