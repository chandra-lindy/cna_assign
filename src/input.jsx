import React, { Component } from 'react';

export default class Input extends Component {

  render() {
    return (
      <div>
        <h1>CNA Assign ...</h1>
        <div id="maininput">
          <input
            type="text"
            placeholder="Enter commands here ..."
            onKeyDown={this.props.enter}
            autoFocus={true}
            id="main"
          />
        </div>
      </div>
    );
  }
}
