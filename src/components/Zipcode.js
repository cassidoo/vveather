import React, { Component } from 'react';
import axios from 'axios';

class Zipcode extends Component {
  componentWillMount() {
    this.setState({ value: '' });
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    if (this.state.value.length === 4 && !isNaN(this.state.value)) {
      console.log('Getting location...');
      this.getLocationFromZip(event.target.value);
    }
  }

  getLocationFromZip(zip) {
    var self = this;
    axios({
      url: 'https://crossorigin.me/http://ziplocate.us/api/v1/'+zip,
      method: 'get',
      responseType: 'json'
    })
    .then(function(r) {
      self.props.onValueChange([r.data.lat, r.data.lng]);
      console.log('Location obtained');
    })
    .catch(function(r){
      console.log(r);
    });
  }

  render() {
    return <div className="zip">
      <input type="text"
             maxLength="5"
             value={this.state.value}
             onChange={this.handleChange}
             placeholder="Enter zip code"/>
    </div>;
  }
}

export default Zipcode;
