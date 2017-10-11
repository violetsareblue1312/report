import React, { Component } from 'react';
import('./intro.css');

class Intro extends Component {
  render() {
    return (
      <div classname="App">
        <header classname="App-header">
          <h1 classname="App-title">Welcome to Nazi Reporter</h1>
        </header>
        <p classname="App-intro">
          To get started, check out this <a href={this.props.url}>riseup pad</a>{' '}
          for places to start.
        </p>
      </div>
    );
  }
}

export default Intro;
