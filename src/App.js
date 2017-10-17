import React, { Component } from 'react';
import Intro from './intro';
import FilterableReportTable from './Reports';
import ReportForm from './ReportForm';
import './App.css';
import axios from 'axios';

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
      reports: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    var _this = this;
    this.serverRequest = axios
      .get('http://localhost:3000/api/reports')
      .then(function(result) {
        _this.setState({
          reports: result.data.data
        });
      });
  }

  handleSubmit(values) {
    // values.tags = values.tags.split(',')
    // values.media = values.media.split(',')
    this.state.reports.push(values);
    axios.post('http://localhost:3000/api/addreport', values);
  }

  render() {
    return (
      <div>
        <Intro url="https://pad.riseup.net/p/OhEAr8p8WwTD" />
        <FilterableReportTable reports={this.state.reports} />
        <ReportForm
          reports={this.state.reports}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
