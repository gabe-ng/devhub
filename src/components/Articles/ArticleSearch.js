import React, { Component } from "react";
import { Icon } from "react-icons-kit";
import { search } from 'react-icons-kit/fa/search';

export default class ArticleSearch extends Component {
    state = {};

    render() {
        return <div className="container mt-5 w-25">
            <div className="input-group mb-2">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon1">
                        <Icon icon={search} />
                    </span>
                </div>
                <input type="text" className="form-control mr-1" placeholder="Topic" aria-label="Job Title" aria-describedby="basic-addon1" />                
                <button type="button" className="btn btn-success ml-2">Search</button>
            </div>
            <p className="text-center">Learn about recent news with Dev Hub.</p>
        </div>;
    }
}
