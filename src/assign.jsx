import React, { Component } from 'react';
import Run from './run.jsx';

export default class Assign extends Component {

  render() {
    console.log(this.props.assignment)
    return (
      <div className="container">
        {this.props.assignment.map((ar, i) => {
          return <Run run={ar} key={i}/>;
        })}
      </div>
    );
  }
}
