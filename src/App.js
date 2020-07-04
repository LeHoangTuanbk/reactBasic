import React, { Component } from 'react';
import './App.css';

import Search from './components/Search';
import DatePicker from './components/DatePicker'
import StateTuan from './components/State'
import DateRangePickerTuan from './components/DateRangePickerTuan'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <DatePicker />
        <StateTuan />
        <DateRangePickerTuan />
      </div>
    );
  }
  
}

export default App;
