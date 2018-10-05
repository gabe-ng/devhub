import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { search } from 'react-icons-kit/fa/search';
import ArticleModel from "../../models/Articles";

export default class ArticleSearch extends Component {
    state = {
        topic: '',
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    componentDidMount = () => {
      ArticleModel.initalLoad()
        .then(res => {
            console.log(res.data);
            this.props.saveResults(res.data.hits);
        })
    }
    
    handleSearch = () => {
        if (!this.state.topic || this.state.topic.trim() === '') {
            return;
        }

        ArticleModel.searchQuery(this.state.topic)
            .then(res => {
                console.log(res);
                this.props.saveResults(res.data.hits);
            })
    }

    render() {
        return <div className="container mt-5 w-50">
            <div className="input-group mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  <Icon icon={search} />
                </span>
              </div>
              <input type="text" className="form-control mr-1 w-25" placeholder="Topic" aria-label="Job Title" name="topic" onChange={this.handleChange} />
              <button type="button" className="btn ml-2 bg-light text-dark " onClick={this.handleSearch}>
                Search
              </button>
            </div>
            <p className="text-center">
              Learn about recent news with Dev Hub.
            </p>
          </div>;
    }
}
