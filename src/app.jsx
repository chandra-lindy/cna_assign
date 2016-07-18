import React, { Component } from 'react';
import { render } from 'react-dom';

class App extends Component {
  render() {
    return (
      <form method="POST" action='/assign'>
        Enter empty beds in a comma separated list:</br>
        <input name="emptyBeds" type="text" placeholder="Empty beds ..."></input>
        <input type='submit' value="Assign">
      </form>
    );
  }
}

render(<App />, document.getElementById('content'));
