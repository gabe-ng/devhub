import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { search } from 'react-icons-kit/fa/search';
import { mapPin } from 'react-icons-kit/fa/mapPin';
import JobModel from "../../models/Jobs";

export default class JobSearch extends Component {
  state = {
    title: '',
    location: '',
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSearch = () => {
    if(!this.state.title || this.state.title.trim() === '') {
          return;
      }
    if(!this.state.location || this.state.location.trim() === '') {
          return;
      }

    JobModel.searchGithub(this.state.title, this.state.location)
      .then(res => {
        console.log(res);
        this.props.saveResults(res.data);
      })
  }

  render() {
    return <div className="container mt-5 w-75">
        <div className="input-group mb-2">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <Icon icon={search} />
            </span>
          </div>
          <input type="text" className="form-control mr-1 w-50" placeholder="Job Title" aria-label="Job Title" name="title" onChange={this.handleChange} />
          <div className="input-group-prepend ml-1">
            <span className="input-group-text" id="basic-addon1">
              <Icon icon={mapPin} />
            </span>
          </div>
          <input type="text" className="form-control w-25" placeholder="City" aria-label="City" name="location" onChange={this.handleChange} />
          <button type="button" className="btn btn-success ml-2" onClick={this.handleSearch}>Search</button>
        </div>
        <p className="text-center">Find your next career with Dev Hub.</p>
      </div>;
  }
}
