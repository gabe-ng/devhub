import React, { Component } from "react";
import Search from "../components/Jobs/JobSearch";
import Feed from "../components/Jobs/JobFeed";

class Jobs extends Component {
  render() {
    return (
      <div>
        <Search />
        <Feed />
      </div>
    );
  }
}

export default Jobs;
