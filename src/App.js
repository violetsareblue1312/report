import React, { Component } from 'react';
import Intro from './intro';
import FilterableReportTable from './Reports';
//import SubmitForm from './SubmitForm';
import './App.css';

const REPORTS = [
  { category: 'Person', notes: '$49.99', tags: 'nyc', name: 'Nazi' },
  { category: 'Person', notes: '$9.99', tags: 'nyc', name: 'IE' },
  {
    category: 'Person',
    notes: '$29.99',
    tags: 'nyc',
    name: 'Vanguard America'
  },
  { category: 'Workplace', notes: '$99.99', tags: 'nyc', name: 'Golden Dawn' },
  { category: 'Workplace', notes: '$399.99', tags: 'nyc', name: '211' },
  { category: 'Sticker', notes: '$199.99', tags: 'nyc', name: 'Kekistan' }
];

class App extends Component {
  render() {
    return (
      <div>
        <Intro url="http://pad.riseup.net" />
        <FilterableReportTable reports={REPORTS} />
      </div>
    );
  }
}

export default App;
