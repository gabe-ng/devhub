import React, { Component } from "react";

export default class JobFeed extends Component {
  render() {
    const feedStyle = {
      backgroundColor: "whitesmoke",
      height: "80vh"
    };

    let jobs = this.props.jobs.map(job => (
      <li class="list-group-item">{job.name}</li>
    ));

    return (
      <div className="container-fluid" style={feedStyle}>
        <div className="container pt-3">
            <p className="ml-3 font-weight-bold">Recent Searches</p>
            <ul class="list-group">
                {jobs}
            </ul>
        </div>
      </div>
    );
  }
}
