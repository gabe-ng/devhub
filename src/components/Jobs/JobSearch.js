import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { search } from 'react-icons-kit/fa/search';
import { mapPin } from 'react-icons-kit/fa/mapPin'

export default class JobSearch extends Component {
  state = {};

  render() {
    return <div className="container mt-5 w-50">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <Icon icon={search} />
            </span>
          </div>
          <input type="text" className="form-control mr-1" placeholder="Job Title" aria-label="Job Title" aria-describedby="basic-addon1" />
          <div className="input-group-prepend ml-1">
            <span className="input-group-text" id="basic-addon1">
              <Icon icon={mapPin} />
            </span>
          </div>
          <input type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="basic-addon1" />
          <button type="button" className="btn btn-success ml-2">Search</button>
        </div>
        <p className="text-center">Find your next career with Dev Hub.</p>
      </div>;
  }
}
