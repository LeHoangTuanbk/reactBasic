import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-datepicker/dist/react-datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

class DateRangePickerTuan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: null,
      endDate: null
    };
    //this.handleChange= this.handleChangeStart.bind(this);
  }
  aleartStartDate = () => {
    alert(this.state.startDate);
  }
  aleartEndDate = () => {
    alert(this.state.endDate);
  }
  
  render() {
    return (
      <div>
        <DateRangePicker
          startDate={this.state.startDate} // momentPropTypes.momentObj or null,
          startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
          endDate={this.state.endDate} // momentPropTypes.momentObj or null,
          endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
          focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
          onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
        />
        <br/>
        <br/>
        <button onClick={this.aleartStartDate}>Start Date is</button>
        <button onClick={this.aleartEndDate}>End Date is</button>
      </div>
      
    );
  }
  
}

export default DateRangePickerTuan;
