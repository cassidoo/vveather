import React, { Component } from 'react';
import loaderback from './../svg/loaderback.svg';
import loaderfront from './../svg/loaderfront.svg';

class Loader extends Component {
  render() {
    return <div className="loader">
      <img src={loaderback} className="loader1" alt="Loading..." />
      <img src={loaderfront} className="loader2" alt="Loading..." />
    </div>;
  }
}
export default Loader;
