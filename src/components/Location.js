import React, { Component } from 'react';
import Zipcode from './Zipcode';

class Location extends Component {
  constructor() {
    super();
    this.state = { geoSupport: true, location: null };
    this.setZipLocation = this.setZipLocation.bind(this);
  }

  getGeoLocation() {
    var self = this;
    function success(position) {
      var latitude  = position.coords.latitude;
      var longitude = position.coords.longitude;
      self.setState({ location: [latitude, longitude] });
      self.props.weather(self.state.location);
    };

    function error() {
      self.setState({ location: [null, null] });
      self.setState({ geoSupport: false });
    };

    if (!navigator.geolocation) {
      console.log('Browser doesn\'t support geolocation');
      self.setState({ geoSupport: false });
    }

    navigator.geolocation.getCurrentPosition(success, error);
  }

  setZipLocation(l) {
    this.setState({ location: [l[0], l[1]] });
    this.props.weather([l[0], l[1]]);
  }

  getZipcode() {
    var self = this;
    return <div>
      <Zipcode onValueChange={self.setZipLocation} />
    </div>;
  }

  render() {
    if (!navigator.geolocation) {
      return this.getZipcode();
    } else {
      this.getGeoLocation();
      return this.getZipcode();
    }
  }
}

export default Location;
