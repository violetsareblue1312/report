import React, { Component } from 'react';
import('./intro.css');

class Intro extends Component {
    render() {
        return (
          <div className="App">
            <header className="App-header">
              <h1 className="App-title">Welcome to Nazi Reporter</h1>
            </header>
            <p className="App-intro">
              To get started, check out this <a href={this.props.url}>riseup pad</a> for places to start.
            </p>
          </div>
        );
    }
};

export default Intro;