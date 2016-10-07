import React, { Component } from 'react';
import Day from './Day';
import loader from './../loader.svg';
import axios from 'axios';

class Weather extends Component {
  constructor() {
    super();
    this.state = { location: [null, null], weather: null };
  }

  componentWillMount() {
    this.getLocation();
  }

  getLocation() {
    var self = this;
    function success(position) {
      console.log('lol');
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      self.setState({ location: [latitude, longitude] });
      self.getWeather();
    };

    function error() {
      self.setState({ location: [null, null] });
      console.log('There was an error.');
    };

    if (!navigator.geolocation) {
      console.log('Browser doesn\'t support geolocation');
      error();
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  getWeather() {
    var self = this;
    axios({
      url: 'http://cors.io/?https://api.darksky.net/forecast/'+process.env.REACT_APP_DARK_SKY_KEY+'/'+this.state.location[0]+','+this.state.location[1],
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
    if(this.state.weather !== null) {
      return <div className="weather-temp">{ Math.round(this.state.weather.current) + '˚' }</div>;
    } else {
      return <div><img src={loader} className="loader" alt="Loading..." /></div>
    }
  }

  get5DayForecast() {
    if(this.state.weather !== null) {
      var days = [];
      var dayData = this.state.weather.daily;
      for(var i = 0; i < dayData.length; i++) {
        days.push(<Day min={dayData[i].temperatureMin} max={dayData[i].temperatureMax} num={i} key={'day'+i}/>);
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
    </div>;
  }
}

export default Weather;
