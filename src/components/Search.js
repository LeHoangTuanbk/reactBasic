import React, { Component } from 'react';
class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      strSearch : ''
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(){
    console.log(this.refs.search.value);
  }
  
  render() {
    return (
      <div className="App">
        <div className="input-group">
          <input  type="text" className="form-control" ref="search" placeholder="Tim theo ma the hoac ten nguoi dung" style={{ width: "500px" }} />
          <span className="input-group-btn"> 
            <button onClick={this.handleSearch} className="btn btn-info" type="button">Tim</button>
          </span>
        </div>
      </div>
    );
  }
  
}

export default Search;
