import React, { Component } from 'react';
import cloudyDay from './../svg/cloudyday.svg';
import cloudyNight from './../svg/cloudynight.svg';
import cloudy from './../svg/cloudy.svg';
import fog from './../svg/fog.svg';
import night from './../svg/night.svg';
import rain from './../svg/rain.svg';
import snow from './../svg/snow.svg';
import storm from './../svg/storm.svg';
import sun from './../svg/sun.svg';
import wind from './../svg/wind.svg';

class Day extends Component {
  displayDate() {
    var d = new Date();
    return this.dayOfWeek(d.getDay() + this.props.num);
  }

  dayOfWeek(day) {
    return ['monday','tuesday','wednesday','thursday','friday','saturday','sunday'][day%7];
  }

  getIcon() {
    var condition = '' + this.props.icon;
    switch (condition) {
      case 'clear-night':
        return <img src={night} alt={condition} />;
      case 'rain':
      case 'sleet':
        return <img src={rain} alt={condition} />;
      case 'snow':
        return <img src={snow} alt={condition} />;
      case 'thunderstorm':
        return <img src={storm} alt={condition} />;
      case 'wind':
        return <img src={wind} alt={condition} />;
      case 'fog':
        return <img src={fog} alt={condition} />;
      case 'cloudy':
        return <img src={cloudy} alt={condition} />;
      case 'partly-cloudy-day':
        return <img src={cloudyDay} alt={condition} />;
      case 'partly-cloudy-night':
        return <img src={cloudyNight} alt={condition} />;
      case 'clear-day':
      default:
        return <img src={sun} alt={condition} />;
    }
  }

  render() {
    return <div className="day">
      { this.getIcon() }
      <p>{ this.displayDate() }</p>
      <p><span className="max">{ Math.round(this.props.max) }˚</span> / { Math.round(this.props.min) }˚</p>
    </div>;
  }
}

export default Day;
