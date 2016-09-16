import React from 'react';

const Login = (props) => (
  <div>
    <h1>CNA Assign ...</h1>
    <div id="maininput">
      <input
        type="text"
        placeholder="Enter your username ..."
        onKeyDown={props.enter}
        autoFocus={true}
        id="main"
      />
    </div>
  </div>
);

export default Login;
