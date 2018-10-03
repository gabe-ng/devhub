import React, { Component } from "react";

class Favorites extends Component {
  render() {
    const savedContainer = {
      backgroundColor: "whitesmoke",
      height: "84vh"
    }

    return <div>
        <div className="container-fluid">
          <h3 className="text-center pt-3 pb-3">Favorites</h3>
        </div>
        <div className="container-fluid" style={savedContainer}>
          <div className="container pt-4">
            <h6 className="pl-4 pb-2 font-weight-bold">Starred Jobs</h6>
            <ul class="list-group">
              <li class="list-group-item">test</li>
              <li class="list-group-item">test</li>
              <li class="list-group-item">test</li>
            </ul>
            <h6 className="pl-4 pt-5 pb-2 font-weight-bold">Starred Articles</h6>
            <ul class="list-group">
              <li class="list-group-item">test</li>
              <li class="list-group-item">test</li>
              <li class="list-group-item">test</li>
            </ul>
          </div>
        </div>
      </div>;
  }
}

export default Favorites;
