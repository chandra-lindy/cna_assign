import React, { Component } from 'react';

const EmptyBeds = (props) => (
  <div className={props.classStr}>
    <h2>Empty beds:</h2>
    {props.emptyBeds.map((el, i) => {
      return (
        <span className="room" key={i}>{el}</span>
      );
    })}
  </div>
);

export default EmptyBeds;
