import React, { Component } from 'react';

export default class Nurses extends Component {

  render() {
    return (
      <div className="container">
          {this.props.nurses.map((el, i) => {
            return (
              <div className="nurse" key={i}>
                <input
                  type="checkbox"
                  value={el.name}
                  onChange={this.props.select}>
                </input><span className="name">{el.name}</span> role: {el.role}
              </div>
            );
          })}
      </div>
    );
  }
}
