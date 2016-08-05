import React, { Component } from 'react';
import Run from './run.jsx';

export default class Assign extends Component {

  render() {
    return (
      <div className="container">
        {this.props.assignment.map((ar, i) => {
          return (
            <div key={i}>
              <div className="header">
                <span className="name">{this.props.nurses[i]}</span>
                <span className="num">{ar.length}</span>
              </div>
              <div className="body">
                <Run run={ar}/>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
