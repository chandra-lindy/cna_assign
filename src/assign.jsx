import React from 'react';
import Run from './run.jsx';

export default class Assign extends React.Component {

  render() {
    return (
      <div className="container">
        {this.props.assignment.map((ar, i) =>
          (
          <div key={i}>
            <div className="header">
              <span className="name">{this.props.nurses[i]}</span>
              <span className="num">{ar.length}</span>
            </div>
            <div className="body">
              <Run run={ar} />
            </div>
          </div>
          )
        )}
      </div>
    );
  }
}
