import React from 'react';

const Password = (props) => (
  <div>
    <h1>CNA Assign ...</h1>
    <div id="maininput">
      <input
        type="password"
        placeholder="Enter password here ..."
        onKeyDown={props.enter}
        autoFocus={true}
        id="main"
      />
    </div>
  </div>
);

export default Password;
