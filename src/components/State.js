import React, { Component } from 'react';
class StateTuan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: 1
    };
    this.handleState = this.handleState.bind(this);
  }

  handleState(){
    this.setState({
      state: this.state.state +1
    });
  }
  
  render() {
    var state = this.state.state;
    return (
      <div className="App">
        <div className="input-group">
          <span className="input-group-btn"> 
            <button onClick={this.handleState} className="btn btn-info" type="button">Thay doi state</button>
          </span>
        <p>{state } tuan</p>
        </div>
      </div>
    );
  }
  
}

export default StateTuan;
