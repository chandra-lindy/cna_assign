import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Nurses extends Component {

  render() {
    return (
      <div>
        <h1>CNA Assign</h1>
          <input name="emptyBeds"
            type="text"
            placeholder="Empty beds ..."
            onKeyDown={this.props.enter}
            autoFocus={true}>
          </input>
          {this.props.nurses.map((el, i) => {
            return <p key={i}>name: {el.name} role: {el.role}</p>;
          })}
      </div>
    );
  }
}
