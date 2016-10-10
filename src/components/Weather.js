import React, { Component } from 'react';
import Day from './Day';
import Loader from './Loader';
import Location from './Location';
import axios from 'axios';

class Weather extends Component {
  constructor() {
    super();
    this.state = { weather: null };
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather(location) {
    var self = this;
    axios({
      url: 'https://crossorigin.me/https://api.darksky.net/forecast/'+process.env.REACT_APP_DARK_SKY_KEY+'/'+location[0]+','+location[1],
      method: 'get',
      responseType: 'json'
    })
    .then(function(r) {
      var d = r.data;
      var days = d.daily.data;
      self.setState({
        weather: {
          'current': d.currently.temperature,
          'summary': d.hourly.summary,
          'daily': [days[1], days[2], days[3], days[4], days[5]]
        }
      });
    })
    .catch(function(r){
      console.log(r);
    });
  }

  getTodayForecast() {
    if (this.state.weather !== null) {
      return <div className="weather-temp">{ Math.round(this.state.weather.current) + '˚' }</div>;
    } else {
      return <Loader />;
    }
  }

  get5DayForecast() {
    if (this.state.weather !== null) {
      var days = [];
      var dayData = this.state.weather.daily;
      for(var i = 0; i < dayData.length; i++) {
        days.push(<Day icon={dayData[i].icon} min={dayData[i].temperatureMin} max={dayData[i].temperatureMax} num={i} key={'day'+i}/>);
      }
      return <div className="weather-forecast">
        {days}
      </div>;
    } else {
      return;
    }
  }

  render() {
    return <div>
      { this.getTodayForecast() }
      { this.get5DayForecast() }
      <Location weather={this.getWeather} />
    </div>;
  }
}

export default Weather;
