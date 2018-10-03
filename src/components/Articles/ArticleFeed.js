import React, { Component } from "react";

export default class JobFeed extends Component {
  render() {
    const feedStyle = {
      backgroundColor: "whitesmoke",
      height: "80vh"
    };

    return (
      <div className="container-fluid" style={feedStyle}>
        <div className="container pt-3">
            <p className="ml-3 font-weight-bold">Recent Searches</p>
            <ul class="list-group">
                <li class="list-group-item">Filler</li>
                <li class="list-group-item">Filler</li>
                <li class="list-group-item">Filler</li>
            </ul>
        </div>
      </div>
    );
  }
}
