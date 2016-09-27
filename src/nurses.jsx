import React from 'react';

export default class Nurses extends React.Component {

  render() {
    return (
      <div className="container">
          {this.props.nurses.map((el, i) => {
            return (
              <div className="nurse" key={i}>
                <input
                  type="checkbox"
                  value={`${el.first} ${el.last}`}
                  onChange={this.props.select}
                />
                <span className="name">{`${el.first} ${el.last}`}</span>
              </div>
            );
          })}
      </div>
    );
  }
}
