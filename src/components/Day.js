import React, { Component } from 'react';

class Day extends Component {
  render() {
    return <div className="day">
      <p>Minimum: {this.props.min}</p>
      <p>Maximum: {this.props.max}</p>
    </div>;
  }
}

export default Day;
