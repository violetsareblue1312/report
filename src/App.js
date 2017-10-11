import React, { Component } from 'react';
import Intro from './intro';
import FilterableReportTable from './Reports';
import SubmitForm from './SubmitForm';
import './App.css';

const REPORTS = [
  {
    category: 'Person',
    notes: '$49.99',
    tags: ['nyc', 'groupshot'],
    title: 'Nazi',
    location: 'Long Island'
  },
  {
    category: 'Person',
    notes: '$9.99',
    tags: ['nyc'],
    title: 'IE',
    location: 'Columbia'
  },
  {
    category: 'Person',
    notes: '$29.99',
    tags: ['nyc'],
    title: 'Vanguard America',
    location: 'CUNY',
    media: ['http://lorempixel.com/320/240/nazi']
  },
  {
    category: 'Workplace',
    notes: '$99.99',
    tags: ['nyc'],
    title: 'Golden Dawn',
    location: 'Queens',
    media: ['http://lorempixel.com/240/240/kitten']
  },
  {
    category: 'Workplace',
    notes: '$399.99',
    tags: ['nyc'],
    title: '211',
    location: 'Greenpoint'
  },
  {
    category: 'Sticker',
    notes: '$199.99',
    tags: ['nyc'],
    title: 'Kekistan',
    location: "Parent's Basement",
    media: ['http://lorempixel.com/320/240/basement']
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reports: REPORTS
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(reports) {
    this.setState({
      reports: reports
    });
  }

  render() {
    return (
      <div>
        <Intro url="https://pad.riseup.net/p/OhEAr8p8WwTD" />
        <FilterableReportTable reports={this.state.reports} />
        <SubmitForm reports={this.state.reports} onSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
