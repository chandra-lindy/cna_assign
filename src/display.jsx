import React from 'react';

export default class Display extends React.component {

  render() {
    return (
      <div className="container display">
        <div className="container-2col large-col">
          <h2>Empty beds:</h2>
            {this.props.emptyBeds.map((el, i) => <span className="room" key={i}>{el}</span>)}
        </div>
        <div className="container-2col small-col">
          <h2>Census: <span id="census">{this.props.census}</span></h2>
        </div>
      </div>
    );
  }
}
