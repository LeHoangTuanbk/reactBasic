import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
class DatePickerClock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      endDate: new Date(),
    };
    this.handleChange= this.handleChangeStart.bind(this);
    this.handleChange= this.handleChangeEnd.bind(this);
  }

  handleChangeStart = date => {
    this.setState({
      startDate: date
    });
  }
  handleChangeEnd = date => {
    this.setState({
      endDate: date
    });
  }
  
  render() {
    return (
      <div>
        <div>
        <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChangeStart}
        dateFormat='dd/MM/yyyy'
        isClearable
        />
        </div>
        <div>
        <DatePicker
        selected={this.state.endDate}
        onChange={this.handleChangeEnd}
        dateFormat='dd/MM/yyyy'
        isClearable
        />
        </div>
        <span className="input-group-btn"> 
            <button onClick={this.handleSearch} className="btn btn-info" type="button">Tim</button>
        </span>
        
      </div>
      
    );
  }
  
}

export default DatePickerClock;
