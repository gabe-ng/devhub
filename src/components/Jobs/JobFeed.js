import React, { Component } from "react";

export default class JobFeed extends Component {
  render() {
    const feedStyle = {
      backgroundColor: "whitesmoke",
      minHeight: "80vh"
    };

    let jobs = this.props.jobs.map(job => (
      <li className="list-group-item mb-2">
        <p>
          <a href={`${job.url}`} target="_blank" rel="noopener noreferrer">
            {job.title}
          </a>
        </p>
        <p>
          {job.location}, {job.type}
        </p>
      </li>
    ));

    return (
      <div className="container-fluid" style={feedStyle}>
        <div className="container pt-3">
            <p className="ml-3 font-weight-bold">Recent Searches</p>
            <ul className="list-group pb-5">
                {jobs}
            </ul>
        </div>
      </div>
    );
  }
}
