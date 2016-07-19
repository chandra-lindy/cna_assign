import React, { Component } from 'react';
import { render } from 'react-dom';

export default class EmptyBeds extends Component {

  render() {
    if (this.props.emptyBeds.length) {
      return (
        <div>
          <h1>CNA Assign</h1>
            <input name="emptyBeds"
              type="text"
              placeholder="Empty beds ..."
              onKeyDown={this.props.enter}
              autoFocus={true}
              >
            </input>
            <h2>Not Empty</h2>
        </div>
      );
    } else {
      return (
        <div>
          <h1>CNA Assign</h1>
            <input name="emptyBeds"
              type="text"
              placeholder="Empty beds ..."
              onKeyDown={this.props.enter}
              autoFocus={true}>
            </input>
            <h2>Empty</h2>
        </div>
      );
    }
  }
}
