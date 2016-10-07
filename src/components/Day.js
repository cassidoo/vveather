import React, { Component } from 'react';

class Day extends Component {
  displayDate() {
    var d = new Date();
    return this.dayOfWeek(d.getDay() + this.props.num);
  }

  dayOfWeek(day) {
    return ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'][day%7];
  }

  render() {
    return <div className="day">
      <p>{ this.displayDate() }</p>
      <p><span className="max">{Math.round(this.props.max)}˚</span> / {Math.round(this.props.min)}˚</p>
    </div>;
  }
}

export default Day;
