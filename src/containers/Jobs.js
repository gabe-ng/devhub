import React, { Component } from "react";
import Search from "../components/Jobs/JobSearch";
import Feed from "../components/Jobs/JobFeed";

class Jobs extends Component {
  state = {
    jobResults: [
      {
        name: "Job1"
      },
      {
        name: "Job2"
      },
      {
        name: "Job3"
      }
    ]
  };

  render() {
    return (
      <div>
        <Search />
        <Feed jobs={this.state.jobResults} />
      </div>
    );
  }
}

export default Jobs;
