import React, { Component } from "react";
import Search from "../components/Jobs/JobSearch";
import Feed from "../components/Jobs/JobFeed";

class Jobs extends Component {
  state = {
    jobResults: []
  };

  handleSearch = results => {
    this.setState({ jobResults: results})
  }

  render() {
    return (
      <div>
        <Search saveResults={this.handleSearch}/>
        <Feed jobs={this.state.jobResults} />
      </div>
    );
  }
}

export default Jobs;
